// Authentication utilities

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
  subscription: 'free' | 'premium';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Mock authentication - in production, use a proper auth service
export const authService = {
  // Login user
  login: async (email: string, password: string): Promise<{ user: User | null; error?: string }> => {
    // Mock implementation
    if (email && password) {
      return {
        user: {
          id: '1',
          email,
          name: 'User Name',
          role: 'student',
          subscription: 'free',
        },
      };
    }
    return { user: null, error: 'Credenciais inválidas' };
  },

  // Register user
  register: async (email: string, password: string, name: string): Promise<{ user: User | null; error?: string }> => {
    // Mock implementation
    if (email && password && name) {
      return {
        user: {
          id: '1',
          email,
          name,
          role: 'student',
          subscription: 'free',
        },
      };
    }
    return { user: null, error: 'Erro ao registrar' };
  },

  // Logout user
  logout: async (): Promise<void> => {
    // Clear session
  },

  // Get current user
  getCurrentUser: async (): Promise<User | null> => {
    // Mock implementation - check session/token
    return null;
  },

  // Check if user has premium access
  hasPremiumAccess: (user: User | null): boolean => {
    return user?.subscription === 'premium';
  },

  // Check if user is admin
  isAdmin: (user: User | null): boolean => {
    return user?.role === 'admin';
  },
};

// Helper to store/retrieve tokens
export const tokenStorage = {
  get: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  },

  set: (token: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  },

  remove: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  },
};
