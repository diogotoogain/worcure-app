/**
 * Performance Tracking Utilities
 * Monitors and tracks application performance metrics
 */

export interface PerformanceEntry {
  name: string;
  startTime: number;
  duration: number;
  metadata?: Record<string, any>;
}

export class PerformanceTracker {
  private static entries: PerformanceEntry[] = [];
  private static marks: Map<string, number> = new Map();
  
  /**
   * Start tracking a performance metric
   */
  static start(name: string): void {
    this.marks.set(name, performance.now());
  }
  
  /**
   * End tracking and record the metric
   */
  static end(name: string, metadata?: Record<string, any>): PerformanceEntry | null {
    const startTime = this.marks.get(name);
    if (!startTime) {
      console.warn(`No start mark found for: ${name}`);
      return null;
    }
    
    const endTime = performance.now();
    const entry: PerformanceEntry = {
      name,
      startTime,
      duration: endTime - startTime,
      metadata,
    };
    
    this.entries.push(entry);
    this.marks.delete(name);
    
    return entry;
  }
  
  /**
   * Measure a function's execution time
   */
  static async measure<T>(
    name: string,
    fn: () => Promise<T> | T,
    metadata?: Record<string, any>
  ): Promise<T> {
    this.start(name);
    try {
      const result = await fn();
      this.end(name, metadata);
      return result;
    } catch (error) {
      this.end(name, { ...metadata, error: true });
      throw error;
    }
  }
  
  /**
   * Get all recorded performance entries
   */
  static getEntries(name?: string): PerformanceEntry[] {
    if (name) {
      return this.entries.filter(entry => entry.name === name);
    }
    return [...this.entries];
  }
  
  /**
   * Get average duration for a metric
   */
  static getAverage(name: string): number | null {
    const entries = this.getEntries(name);
    if (entries.length === 0) return null;
    
    const total = entries.reduce((sum, entry) => sum + entry.duration, 0);
    return total / entries.length;
  }
  
  /**
   * Clear all performance entries
   */
  static clear(name?: string): void {
    if (name) {
      this.entries = this.entries.filter(entry => entry.name !== name);
    } else {
      this.entries = [];
    }
  }
  
  /**
   * Track page load performance
   */
  static trackPageLoad(): void {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        this.entries.push({
          name: 'page-load',
          startTime: 0,
          duration: perfData.loadEventEnd - perfData.fetchStart,
          metadata: {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
            domInteractive: perfData.domInteractive - perfData.fetchStart,
            firstByte: perfData.responseStart - perfData.fetchStart,
          },
        });
      }
    });
  }
  
  /**
   * Track resource loading
   */
  static trackResources(): void {
    if (typeof window === 'undefined') return;
    
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    resources.forEach(resource => {
      this.entries.push({
        name: 'resource-load',
        startTime: resource.startTime,
        duration: resource.duration,
        metadata: {
          url: resource.name,
          type: resource.initiatorType,
          size: resource.transferSize,
        },
      });
    });
  }
  
  /**
   * Get performance report
   */
  static getReport(): {
    totalEntries: number;
    averages: Record<string, number>;
    slowest: PerformanceEntry[];
  } {
    const averages: Record<string, number> = {};
    const uniqueNames = new Set(this.entries.map(e => e.name));
    
    uniqueNames.forEach(name => {
      const avg = this.getAverage(name);
      if (avg !== null) {
        averages[name] = avg;
      }
    });
    
    const slowest = [...this.entries]
      .sort((a, b) => b.duration - a.duration)
      .slice(0, 10);
    
    return {
      totalEntries: this.entries.length,
      averages,
      slowest,
    };
  }
}

export default PerformanceTracker;
