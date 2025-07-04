import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModuleService } from '../SERVICES/Module-Service';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';

@Component({
  selector: 'app-pricing-card',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink, CustomNumberPipe],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  // isPremiumHovered = false;
  mouseX = 0;
  mouseY = 0;
  particles: any[] = [];
  moduleCode: string = '';
  moduleDetails: any;
  moduleName: string = ''; // Valeur par défaut
  modulePrice: number = 0; // Valeur par défaut

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService,
    private router: Router,
  ) {
    this.generateParticles();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.moduleCode = params['moduleCode'];
      this.loadModuleDetails();
    });
  }

  loadModuleDetails() {
    // Récupérer tous les modules et trouver celui correspondant au code
    this.moduleService.getModulesEntreprise().subscribe({
      next: (modules) => {
        const foundModule = modules.find(module => module.code === this.moduleCode);
        if (foundModule) {
          this.moduleName = foundModule.nom;
          this.modulePrice = foundModule.prix;
        }
      },
      error: (err) => console.error('Erreur chargement modules', err)
    });
  }

  generateParticles() {
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        style: {
          width: `${Math.random() * 40 + 10}px`,
          height: `${Math.random() * 40 + 10}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random() * 0.5 + 0.2
        }
      });
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  // onPremiumHover(hovered: boolean) {
  //   this.isPremiumHovered = hovered;
  // }

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
      this.router.navigate(['/payment-form', this.moduleCode]);
      
      // Réinitialiser et relancer l'animation
      wave.style.animation = 'none';
      setTimeout(() => {
        wave.style.animation = 'wave 1s ease';
      }, 10);
    }

    // Logique d'abonnement...
  }
}