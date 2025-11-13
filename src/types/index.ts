// Global type definitions for WORCURE MEMBERS

export interface User {
  id: string;
  name: string;
  email: string;
  membershipTier: 'free' | 'premium' | 'elite';
  createdAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
  privacy: PrivacySettings;
}

export interface PrivacySettings {
  shareProgress: boolean;
  showProfile: boolean;
  allowMessages: boolean;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  requiredTier: 'free' | 'premium' | 'elite';
}

export interface FlixModule {
  id: string;
  name: string;
  category: FlixCategory;
  content: string;
  duration?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export type FlixCategory = 
  | 'foundation'
  | 'health-tracking'
  | 'fitness'
  | 'nutrition'
  | 'mental-wellness'
  | 'sleep'
  | 'social'
  | 'gamification'
  | 'analytics'
  | 'education'
  | 'integration'
  | 'premium';

export interface Metric {
  id: string;
  userId: string;
  type: string;
  value: number;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface Activity {
  id: string;
  userId: string;
  type: string;
  description: string;
  timestamp: Date;
  moduleId?: string;
}
