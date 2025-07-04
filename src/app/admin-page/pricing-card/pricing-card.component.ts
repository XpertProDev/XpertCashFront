import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModuleService } from '../SERVICES/Module-Service';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import { Module } from '../MODELS/Module-model';

@Component({
  selector: 'app-pricing-card',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink, CustomNumberPipe],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  freeModules: Module[] = [];
  trialModules: Module[] = [];
  paidModules: Module[] = [];
  allModules: Module[] = [];

  // isPremiumHovered = false;
  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loadModules();
  }

  loadModuleDetails() {}

  subscribe(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const wave = button.querySelector('.wave') as HTMLElement;
    
    if (wave) {
      // Positionner l'effet vague au point de clic
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;
      this.router.navigate(['/payment-form']);
      
      // Réinitialiser et relancer l'animation
      wave.style.animation = 'none';
      setTimeout(() => {
        wave.style.animation = 'wave 1s ease';
      }, 10);
    }

    // Logique d'abonnement...
  }

  loadModules() {
    this.moduleService.getModulesEntreprise().subscribe({
      next: (modules) => {
        // Modules gratuits
        this.freeModules = modules.filter(m => !m.payant);
        
        // Modules payants avec période d'essai active
        this.trialModules = modules.filter(m => 
          m.payant && 
          m.tempsRestantEssai && 
          m.tempsRestantEssai !== 'Terminé'
        );
        
        // Modules payants (sans période d'essai)
        this.paidModules = modules.filter(m => 
          m.payant && 
          (!m.tempsRestantEssai || m.tempsRestantEssai === 'Terminé')
        );
        
        // Tous les modules combinés
        this.allModules = [...this.freeModules, ...this.trialModules, ...this.paidModules];
      },
      error: (error) => console.error(error)
    });
  }

  getStatusIcon(active: boolean): string {
    return active ? '✓' : '✗';
  }

  getStatusClass(active: boolean): string {
    return active ? 'available' : 'unavailable';
  }
}