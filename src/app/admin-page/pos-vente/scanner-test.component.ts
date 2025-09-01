import { Component, OnInit } from '@angular/core';
import { ScannerService } from 'src/app/admin-page/SERVICES/VenteService/scanner.service';

@Component({
  selector: 'app-scanner-test',
  template: `
    <div class="scanner-test">
      <h3>Test du Scanner de Code-Barres</h3>
      
      <div class="test-section">
        <h4>Test Manuel</h4>
        <input 
          type="text" 
          placeholder="Entrez un code-barres manuellement"
          [(ngModel)]="manualCode"
          (keyup.enter)="testManualScan()"
        >
        <button (click)="testManualScan()">Tester</button>
      </div>

      <div class="test-section">
        <h4>Test Simulation</h4>
        <input 
          type="text" 
          placeholder="Code à simuler"
          [(ngModel)]="simulateCode"
        >
        <button (click)="simulateScan()">Simuler Scan</button>
      </div>

      <div class="test-section">
        <h4>Logs du Scanner</h4>
        <div class="logs">
          <div *ngFor="let log of scannerLogs" class="log-entry">
            <span class="timestamp">{{ log.timestamp | date:'HH:mm:ss' }}</span>
            <span class="message">{{ log.message }}</span>
          </div>
        </div>
        <button (click)="clearLogs()">Effacer les logs</button>
      </div>

      <div class="test-section">
        <h4>Statut du Scanner</h4>
        <p>Scanner activé: {{ scannerEnabled ? 'Oui' : 'Non' }}</p>
        <p>Scan en cours: {{ scanInProgress ? 'Oui' : 'Non' }}</p>
        <button (click)="toggleScanner()">
          {{ scannerEnabled ? 'Désactiver' : 'Activer' }} le scanner
        </button>
      </div>
    </div>
  `,
  styles: [`
    .scanner-test {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .test-section {
      margin-bottom: 20px;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    
    .test-section h4 {
      margin-top: 0;
      color: #333;
    }
    
    input {
      padding: 8px;
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      width: 200px;
    }
    
    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #0056b3;
    }
    
    .logs {
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #eee;
      padding: 10px;
      background-color: #f9f9f9;
      margin-bottom: 10px;
    }
    
    .log-entry {
      margin-bottom: 5px;
      font-family: monospace;
      font-size: 12px;
    }
    
    .timestamp {
      color: #666;
      margin-right: 10px;
    }
    
    .message {
      color: #333;
    }
  `]
})
export class ScannerTestComponent implements OnInit {
  manualCode: string = '';
  simulateCode: string = '';
  scannerLogs: Array<{timestamp: Date, message: string}> = [];
  scannerEnabled: boolean = true;
  scanInProgress: boolean = false;

  constructor(private scannerService: ScannerService) {}

  ngOnInit() {
    // S'abonner aux événements du scanner
    this.scannerService.getScanObservable().subscribe(code => {
      this.addLog(`Code scanné: ${code}`);
    });

    this.scannerService.getScanningObservable().subscribe(scanning => {
      this.scanInProgress = scanning;
      this.addLog(`Scan ${scanning ? 'démarré' : 'terminé'}`);
    });
  }

  testManualScan() {
    if (this.manualCode.trim()) {
      this.addLog(`Test manuel avec le code: ${this.manualCode}`);
      this.scannerService.simulateScan(this.manualCode);
      this.manualCode = '';
    }
  }

  simulateScan() {
    if (this.simulateCode.trim()) {
      this.addLog(`Simulation de scan avec le code: ${this.simulateCode}`);
      this.scannerService.simulateScan(this.simulateCode);
      this.simulateCode = '';
    }
  }

  toggleScanner() {
    if (this.scannerEnabled) {
      this.scannerService.disableScanner();
      this.scannerEnabled = false;
      this.addLog('Scanner désactivé');
    } else {
      this.scannerService.enableScanner();
      this.scannerEnabled = true;
      this.addLog('Scanner activé');
    }
  }

  clearLogs() {
    this.scannerLogs = [];
  }

  private addLog(message: string) {
    this.scannerLogs.unshift({
      timestamp: new Date(),
      message: message
    });
    
    // Limiter le nombre de logs
    if (this.scannerLogs.length > 100) {
      this.scannerLogs = this.scannerLogs.slice(0, 100);
    }
  }
}
