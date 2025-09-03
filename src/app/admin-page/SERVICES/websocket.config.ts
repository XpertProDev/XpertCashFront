export interface WebSocketConfig {
  endpoint: string;
  reconnectDelay: number;
  maxReconnectAttempts: number;
  heartbeatIncoming: number;
  heartbeatOutgoing: number;
  connectionTimeout: number;
  maxBackoffDelay: number;
}

export const DEFAULT_WEBSOCKET_CONFIG: WebSocketConfig = {
  endpoint: '', // Sera défini par l'environnement
  reconnectDelay: 2000,        // Délai initial de 2s au lieu de 5s
  maxReconnectAttempts: 15,    // Plus de tentatives
  heartbeatIncoming: 4000,     // Heartbeat entrant
  heartbeatOutgoing: 4000,     // Heartbeat sortant
  connectionTimeout: 8000,     // Timeout de connexion plus court
  maxBackoffDelay: 15000       // Délai max de 15s au lieu de 30s
};

export const WEBSOCKET_EVENTS = {
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
  ERROR: 'error',
  MESSAGE: 'message',
  RECONNECTING: 'reconnecting',
  RECONNECTED: 'reconnected'
} as const;

export const WEBSOCKET_TOPICS = {
  NOTIFICATIONS: '/user/queue/notifications',
  CHAT: '/user/queue/chat',
  STOCK_UPDATES: '/user/queue/stock-updates',
  SYSTEM_ALERTS: '/user/queue/system-alerts'
} as const;
