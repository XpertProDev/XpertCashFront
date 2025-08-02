import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  /**
   * Log normal - visible seulement en développement
   */
  log(message: any, ...args: any[]): void {
    if (!environment.production) {
      console.log(`[LOG] ${message}`, ...args);
    }
  }

  /**
   * Warning - visible seulement en développement
   */
  warn(message: any, ...args: any[]): void {
    if (!environment.production) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  }

  /**
   * Error - visible seulement en développement
   */
  error(message: any, ...args: any[]): void {
    if (!environment.production) {
      console.error(`[ERROR] ${message}`, ...args);
    }
  }

  /**
   * Info - visible seulement en développement
   */
  info(message: any, ...args: any[]): void {
    if (!environment.production) {
      console.info(`[INFO] ${message}`, ...args);
    }
  }

  /**
   * Debug - visible seulement en développement
   */
  debug(message: any, ...args: any[]): void {
    if (!environment.production) {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }

  /**
   * Log critique - visible même en production (pour les erreurs importantes)
   */
  critical(message: any, ...args: any[]): void {
    console.error(`[CRITICAL] ${message}`, ...args);
  }

  /**
   * Log de performance - utile pour mesurer les performances
   */
  performance(label: string, startTime: number): void {
    if (!environment.production) {
      const duration = performance.now() - startTime;
      console.log(`[PERF] ${label}: ${duration.toFixed(2)}ms`);
    }
  }

  /**
   * Log d'API - pour tracer les appels API
   */
  api(method: string, url: string, data?: any): void {
    if (!environment.production) {
      console.log(`[API] ${method} ${url}`, data || '');
    }
  }
} 