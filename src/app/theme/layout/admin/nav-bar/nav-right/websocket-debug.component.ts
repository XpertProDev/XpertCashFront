import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from 'src/app/admin-page/SERVICES/websocket.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-websocket-debug',
  template: `
    <div class="websocket-debug-panel" *ngIf="showDebug">
      <div class="debug-header">
        <h6>Debug WebSocket</h6>
        <button class="btn btn-sm btn-outline-secondary" (click)="toggleDebug()">Fermer</button>
      </div>
      
      <div class="debug-content">
        <div class="status-row">
          <strong>Statut:</strong>
          <span [class]="'status-badge ' + (isConnected ? 'connected' : 'disconnected')">
            {{ isConnected ? '🟢 Connecté' : '🔴 Déconnecté' }}
          </span>
        </div>
        
        <div class="status-row">
          <strong>Événement:</strong>
          <span class="event-badge">{{ currentEvent }}</span>
        </div>
        
        <div class="status-row">
          <strong>Tentatives de reconnexion:</strong>
          <span>{{ reconnectAttempts }}/{{ maxReconnectAttempts }}</span>
        </div>
        
        <div class="actions">
          <button class="btn btn-sm btn-primary me-2" 
                  (click)="forceReconnect()" 
                  [disabled]="isConnected">
            🔄 Forcer reconnexion
          </button>
          
          <button class="btn btn-sm btn-warning me-2" 
                  (click)="testMessage()" 
                  [disabled]="!isConnected">
            📤 Tester message
          </button>
          
          <button class="btn btn-sm btn-info" 
                  (click)="refreshStatus()">
            🔄 Actualiser
          </button>
        </div>
        
        <div class="logs">
          <strong>Logs:</strong>
          <div class="log-entries">
            <div *ngFor="let log of logs" class="log-entry">
              <span class="log-time">{{ log.time | date:'HH:mm:ss' }}</span>
              <span class="log-message">{{ log.message }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <button class="btn btn-sm btn-outline-info websocket-debug-toggle" 
            (click)="toggleDebug()" 
            *ngIf="!showDebug">
      🐛 Debug WS
    </button>
  `,
  styles: [`
    .websocket-debug-panel {
      position: fixed;
      top: 80px;
      right: 20px;
      width: 350px;
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      font-size: 12px;
    }
    
    .debug-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      border-bottom: 1px solid #eee;
      background: #f8f9fa;
      border-radius: 8px 8px 0 0;
    }
    
    .debug-header h6 {
      margin: 0;
      font-size: 14px;
    }
    
    .debug-content {
      padding: 15px;
    }
    
    .status-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      padding: 5px 0;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .status-badge {
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: bold;
    }
    
    .status-badge.connected {
      background: #d4edda;
      color: #155724;
    }
    
    .status-badge.disconnected {
      background: #f8d7da;
      color: #721c24;
    }
    
    .event-badge {
      background: #e2e3e5;
      color: #383d41;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
    }
    
    .actions {
      margin: 15px 0;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    
    .logs {
      margin-top: 15px;
    }
    
    .log-entries {
      max-height: 150px;
      overflow-y: auto;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 8px;
      background: #f8f9fa;
    }
    
    .log-entry {
      display: flex;
      margin-bottom: 4px;
      font-size: 11px;
    }
    
    .log-time {
      color: #6c757d;
      margin-right: 8px;
      min-width: 60px;
    }
    
    .log-message {
      color: #495057;
    }
    
    .websocket-debug-toggle {
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 999;
    }
  `]
})
export class WebSocketDebugComponent implements OnInit, OnDestroy {
  showDebug = false;
  isConnected = false;
  currentEvent = '';
  reconnectAttempts = 0;
  maxReconnectAttempts = 10;
  logs: Array<{time: Date, message: string}> = [];
  
  private destroy$ = new Subject<void>();

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    // Surveiller le statut de connexion
    this.webSocketService.getConnectionStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe(isConnected => {
        this.isConnected = isConnected;
        this.addLog(`Statut changé: ${isConnected ? 'Connecté' : 'Déconnecté'}`);
      });

    // Surveiller les événements de connexion
    this.webSocketService.getConnectionEvents()
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => {
        this.currentEvent = event;
        this.addLog(`Événement: ${event}`);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleDebug(): void {
    this.showDebug = !this.showDebug;
  }

  forceReconnect(): void {
    this.addLog('Reconnexion forcée...');
    this.webSocketService.forceReconnect();
  }

  testMessage(): void {
    this.addLog('Envoi d\'un message de test...');
    this.webSocketService.send('/user/queue/test', {
      message: 'Test de connexion WebSocket',
      timestamp: new Date().toISOString()
    });
  }

  refreshStatus(): void {
    this.addLog('Actualisation du statut...');
    // Le statut sera mis à jour automatiquement via les observables
  }

  private addLog(message: string): void {
    this.logs.unshift({
      time: new Date(),
      message: message
    });
    
    // Garder seulement les 50 derniers logs
    if (this.logs.length > 50) {
      this.logs = this.logs.slice(0, 50);
    }
  }
}
