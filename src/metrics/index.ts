// Metrics Collection System for WORCURE MEMBERS

export interface MetricData {
  timestamp: Date;
  userId: string;
  eventType: string;
  value: number | string;
  metadata?: Record<string, any>;
}

export class MetricsCollector {
  private static instance: MetricsCollector;
  private metrics: MetricData[] = [];

  private constructor() {}

  static getInstance(): MetricsCollector {
    if (!MetricsCollector.instance) {
      MetricsCollector.instance = new MetricsCollector();
    }
    return MetricsCollector.instance;
  }

  /**
   * Track user activity
   */
  trackActivity(userId: string, eventType: string, value: number | string, metadata?: Record<string, any>) {
    this.metrics.push({
      timestamp: new Date(),
      userId,
      eventType,
      value,
      metadata
    });
  }

  /**
   * Track module access
   */
  trackModuleAccess(userId: string, moduleId: string, moduleName: string) {
    this.trackActivity(userId, 'module_access', moduleId, {
      moduleName,
      category: 'modules'
    });
  }

  /**
   * Track FLIX module completion
   */
  trackFlixCompletion(userId: string, flixId: string, duration: number) {
    this.trackActivity(userId, 'flix_completion', flixId, {
      duration,
      category: 'flix'
    });
  }

  /**
   * Track user engagement
   */
  trackEngagement(userId: string, action: string, details?: Record<string, any>) {
    this.trackActivity(userId, 'engagement', action, details);
  }

  /**
   * Track goal progress
   */
  trackGoalProgress(userId: string, goalId: string, progress: number) {
    this.trackActivity(userId, 'goal_progress', progress, {
      goalId
    });
  }

  /**
   * Get metrics for a user
   */
  getUserMetrics(userId: string): MetricData[] {
    return this.metrics.filter(m => m.userId === userId);
  }

  /**
   * Get metrics by event type
   */
  getMetricsByType(eventType: string): MetricData[] {
    return this.metrics.filter(m => m.eventType === eventType);
  }

  /**
   * Get metrics summary
   */
  getSummary() {
    return {
      totalEvents: this.metrics.length,
      uniqueUsers: new Set(this.metrics.map(m => m.userId)).size,
      eventTypes: new Set(this.metrics.map(m => m.eventType)).size,
      recentEvents: this.metrics.slice(-10)
    };
  }

  /**
   * Clear metrics (for testing)
   */
  clear() {
    this.metrics = [];
  }
}

export default MetricsCollector.getInstance();
