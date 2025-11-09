// Metrics and analytics utilities

export interface UserMetrics {
  userId: string;
  completedModules: number;
  totalModules: number;
  completedFlix: number;
  totalFlix: number;
  currentStreak: number;
  longestStreak: number;
  totalHours: number;
  averageSessionTime: number; // minutes
  lastActiveDate: string;
  joinedDate: string;
}

export interface ModuleMetrics {
  moduleId: string;
  completionRate: number;
  averageTime: number; // minutes
  totalCompletions: number;
  averageScore: number;
}

export interface FlixMetrics {
  flixId: string;
  category: string;
  views: number;
  completions: number;
  averageWatchTime: number; // minutes
  rating: number;
}

class MetricsService {
  // Track user activity
  trackActivity(userId: string, activityType: string, data?: any): void {
    if (typeof window === 'undefined') return;
    
    const event = {
      userId,
      activityType,
      timestamp: new Date().toISOString(),
      data,
    };

    // Send to analytics service
    console.log('Activity tracked:', event);
  }

  // Track module start
  trackModuleStart(userId: string, moduleId: string): void {
    this.trackActivity(userId, 'module_start', { moduleId });
  }

  // Track module completion
  trackModuleCompletion(userId: string, moduleId: string, timeSpent: number): void {
    this.trackActivity(userId, 'module_complete', { 
      moduleId, 
      timeSpent 
    });
  }

  // Track FLIX view
  trackFlixView(userId: string, flixId: string): void {
    this.trackActivity(userId, 'flix_view', { flixId });
  }

  // Track FLIX completion
  trackFlixCompletion(userId: string, flixId: string, watchTime: number): void {
    this.trackActivity(userId, 'flix_complete', { 
      flixId, 
      watchTime 
    });
  }

  // Calculate user metrics
  async getUserMetrics(userId: string): Promise<UserMetrics> {
    // Mock implementation - in production, fetch from API
    return {
      userId,
      completedModules: 5,
      totalModules: 13,
      completedFlix: 45,
      totalFlix: 720,
      currentStreak: 7,
      longestStreak: 15,
      totalHours: 24,
      averageSessionTime: 45,
      lastActiveDate: new Date().toISOString(),
      joinedDate: new Date('2024-01-01').toISOString(),
    };
  }

  // Calculate completion rate
  calculateCompletionRate(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
  }

  // Update streak
  updateStreak(lastActiveDate: string): number {
    const now = new Date();
    const lastActive = new Date(lastActiveDate);
    const diffDays = Math.floor((now.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0 || diffDays === 1) {
      // Continue streak
      return 1; // Increment current streak
    }
    
    // Streak broken
    return 0;
  }

  // Format time spent
  formatTimeSpent(minutes: number): string {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  }
}

export const metricsService = new MetricsService();
