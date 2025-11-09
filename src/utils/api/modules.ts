import { api, ApiResponse } from './client';

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  content: string;
  isLocked: boolean;
  progress: number;
}

export interface FlixModule {
  id: string;
  category: 'mindset' | 'productivity' | 'leadership' | 'business' | 'health' | 'relationships';
  title: string;
  description: string;
  duration: number;
  videoUrl?: string;
  isCompleted: boolean;
}

export const moduleApi = {
  // Get all main modules
  getModules: (): Promise<ApiResponse<Module[]>> => {
    return api.get<Module[]>('/modules');
  },

  // Get a specific module by ID
  getModule: (id: string): Promise<ApiResponse<Module>> => {
    return api.get<Module>(`/modules/${id}`);
  },

  // Update module progress
  updateProgress: (moduleId: string, progress: number): Promise<ApiResponse<void>> => {
    return api.put<void>(`/modules/${moduleId}/progress`, { progress });
  },

  // Complete a module
  completeModule: (moduleId: string): Promise<ApiResponse<void>> => {
    return api.post<void>(`/modules/${moduleId}/complete`, {});
  },
};

export const flixApi = {
  // Get all FLIX modules
  getAllFlix: (): Promise<ApiResponse<FlixModule[]>> => {
    return api.get<FlixModule[]>('/flix');
  },

  // Get FLIX modules by category
  getFlixByCategory: (category: string): Promise<ApiResponse<FlixModule[]>> => {
    return api.get<FlixModule[]>(`/flix/category/${category}`);
  },

  // Get a specific FLIX module
  getFlixModule: (id: string): Promise<ApiResponse<FlixModule>> => {
    return api.get<FlixModule>(`/flix/${id}`);
  },

  // Mark FLIX as completed
  completeFlixModule: (id: string): Promise<ApiResponse<void>> => {
    return api.post<void>(`/flix/${id}/complete`, {});
  },
};
