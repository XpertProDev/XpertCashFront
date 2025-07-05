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
  modulePrice: number = 0; 
  moduleName: string = 'Nom module'; 
  totalMensuel: number = 0;

  allPaidModules: Module[] = []; // Tous les modules payants (avec ou sans essai)
  priceTchakedaPlus: number = 0;
  pricePro: number = 0;

  prixAnnuelSansRemise: number = 0;

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

  subscribe(event: MouseEvent, module: Module) {
    const button = event.target as HTMLElement;
    const wave = button.querySelector('.wave') as HTMLElement;
    if (wave) {
      // Positionner l'effet vague au point de clic
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;
      // this.router.navigate(['/payment-form', module.code]);
      
      // Réinitialiser et relancer l'animation
      wave.style.animation = 'none';
      setTimeout(() => {
        wave.style.animation = 'wave 1s ease';
      }, 10);
    }

    // Naviguer vers /payment-form/:moduleCode
    this.router.navigate(['/payment-form', module.code]);
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
        
        // Tous les modules payants combinés (essai + sans essai)
        this.allPaidModules = [...this.trialModules, ...this.paidModules];
        
        // Calcul du total mensuel des modules payants
        const totalMensuel = this.allPaidModules.reduce(
          (sum, module) => sum + (module.prix || 0), 
          0
        );

        // Calcul des prix pour les offres
        this.priceTchakedaPlus = totalMensuel * 3;
        // this.pricePro = totalMensuel * 12; // Pour 12 mois

        // Prix annuel avec remise de 10%
        const prixAnnuelSansRemise = totalMensuel * 12;
        this.pricePro = prixAnnuelSansRemise * 0.9; // 10% de remise

        // Formatage pour affichage
        // this.priceProFormatted = this.customNumberPipe.transform(this.pricePro);
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