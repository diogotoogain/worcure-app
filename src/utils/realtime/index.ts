/**
 * Real-time Update Utilities
 * Handles WebSocket connections and real-time data synchronization
 */

export type EventCallback = (data: any) => void;

export interface RealtimeConfig {
  url: string;
  reconnect?: boolean;
  reconnectInterval?: number;
}

export class RealtimeService {
  private ws: WebSocket | null = null;
  private config: RealtimeConfig;
  private listeners: Map<string, Set<EventCallback>> = new Map();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  
  constructor(config: RealtimeConfig) {
    this.config = {
      reconnect: true,
      reconnectInterval: 5000,
      ...config,
    };
  }
  
  /**
   * Connect to WebSocket server
   */
  connect(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      return;
    }
    
    try {
      this.ws = new WebSocket(this.config.url);
      
      this.ws.onopen = () => {
        console.log('WebSocket connected');
        this.reconnectAttempts = 0;
        this.emit('connected', {});
      };
      
      this.ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          this.emit(message.type, message.data);
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };
      
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.emit('error', error);
      };
      
      this.ws.onclose = () => {
        console.log('WebSocket disconnected');
        this.emit('disconnected', {});
        this.handleReconnect();
      };
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
      this.handleReconnect();
    }
  }
  
  /**
   * Disconnect from WebSocket server
   */
  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
  
  /**
   * Send message to server
   */
  send(type: string, data: any): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error('WebSocket is not connected');
      return;
    }
    
    this.ws.send(JSON.stringify({ type, data }));
  }
  
  /**
   * Subscribe to event
   */
  on(event: string, callback: EventCallback): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    
    this.listeners.get(event)!.add(callback);
    
    // Return unsubscribe function
    return () => {
      this.listeners.get(event)?.delete(callback);
    };
  }
  
  /**
   * Emit event to listeners
   */
  private emit(event: string, data: any): void {
    this.listeners.get(event)?.forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error('Error in event listener:', { event, error });
      }
    });
  }
  
  /**
   * Handle reconnection
   */
  private handleReconnect(): void {
    if (!this.config.reconnect) return;
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      return;
    }
    
    this.reconnectAttempts++;
    console.log(`Reconnecting in ${this.config.reconnectInterval}ms (attempt ${this.reconnectAttempts})`);
    
    setTimeout(() => {
      this.connect();
    }, this.config.reconnectInterval);
  }
}

// Default realtime service instance
export const realtimeService = new RealtimeService({
  url: process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3000/ws',
});
