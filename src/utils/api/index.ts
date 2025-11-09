/**
 * API Client Utilities
 * Handles API requests, error handling, and response formatting
 */

export interface ApiConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export class ApiClient {
  private config: ApiConfig;
  
  constructor(config: ApiConfig) {
    this.config = {
      timeout: 30000,
      ...config,
    };
  }
  
  /**
   * Make GET request
   */
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = new URL(endpoint, this.config.baseUrl);
    if (params) {
      Object.keys(params).forEach(key => 
        url.searchParams.append(key, params[key])
      );
    }
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: this.getHeaders(),
    });
    
    return this.handleResponse<T>(response);
  }
  
  /**
   * Make POST request
   */
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    const url = new URL(endpoint, this.config.baseUrl);
    
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    
    return this.handleResponse<T>(response);
  }
  
  /**
   * Make PUT request
   */
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    const url = new URL(endpoint, this.config.baseUrl);
    
    const response = await fetch(url.toString(), {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    
    return this.handleResponse<T>(response);
  }
  
  /**
   * Make DELETE request
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    const url = new URL(endpoint, this.config.baseUrl);
    
    const response = await fetch(url.toString(), {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
    
    return this.handleResponse<T>(response);
  }
  
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...this.config.headers,
    };
    
    // Add auth token if available
    const token = localStorage.getItem('worcure_auth_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
  }
  
  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (!response.ok) {
      const error = await response.text();
      return {
        data: null as any,
        success: false,
        error: error || 'Request failed',
      };
    }
    
    const data = await response.json();
    return {
      data,
      success: true,
    };
  }
}

// Default API client instance
export const apiClient = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
});
