// Angular Import
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

// project import
import { NavContentComponent } from './nav-content/nav-content.component';
import { Module } from 'src/app/admin-page/MODELS/Module-model';
import { ModuleService } from 'src/app/admin-page/SERVICES/Module-Service';

@Component({
  selector: 'app-navigation',
  imports: [NavContentComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  windowWidth: number;
  @Output() NavMobCollapse = new EventEmitter<void>();

  modulesActifs: Module[] = [];

  constructor(private moduleService: ModuleService) {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.chargerModulesActifs();
  }

  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.NavMobCollapse.emit();
    }
  }

chargerModulesActifs() {
    this.moduleService.getModulesEntreprise().subscribe({
        next: (modules) => {
            this.modulesActifs = modules.filter(m => m.actif === true);
            console.log('Modules actifs filtrés', this.modulesActifs);
        },
        error: (err) => console.error('Erreur chargement modules', err)
    });
}


  estModuleVisible(code: string): boolean {
    return this.modulesActifs.some(m => m.code === code);
  }
}
