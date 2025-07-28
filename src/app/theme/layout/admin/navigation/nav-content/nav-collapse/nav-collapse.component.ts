// Angular Import
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import
import { NavigationItem } from '../../navigation';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { CommonModule } from '@angular/common';
import { ModuleService } from 'src/app/admin-page/SERVICES/Module-Service';

@Component({
  selector: 'app-nav-collapse',
  imports: [NavItemComponent, RouterModule, CommonModule],
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss']
})
export class NavCollapseComponent implements OnInit{
  // public props
  @Input() item!: NavigationItem;
  canShow = false;
  private entrepriseModules: string[] = [];


   constructor(private usersService: UsersService, private moduleService: ModuleService) {}

    ngOnInit(): void {
    // Charger les modules actifs de l'entreprise
    this.moduleService.getModulesEntreprise().subscribe({
      next: (modules) => {
        this.entrepriseModules = modules
          .filter(mod => mod.actif)
          .map(mod => mod.code);
        this.evaluateVisibility();
      },
      error: () => {
        this.canShow = false;
      }
    });
  }

 private evaluateVisibility(): void {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        this.canShow = this.hasVisibleItem(this.item, user.permissions);
      },
      error: () => {
        this.canShow = false;
      }
    });
  }

 private hasVisibleItem(item: NavigationItem, permissions: string[]): boolean {
  const hasPermission = !item.codePermission || permissions.includes(item.codePermission);
  const hasModule = !item.codeModule || this.entrepriseModules.includes(item.codeModule);

  if (item.children?.length) {
    // Si le parent a enfants, il faut que parent soit visible (droits + module)
    // ET qu'au moins un enfant soit visible
    if (hasPermission && hasModule) {
      return item.children.some(child => this.hasVisibleItem(child, permissions));
    } else {
      // Si parent pas visible, on ne doit pas afficher même si enfants visibles
      return false;
    }
  } else {
    // Pas d'enfants, juste vérifier droits + module
    return hasPermission && hasModule;
  }
}



  // public method
  navCollapse(e: MouseEvent) {
    let parent = e.target as HTMLElement;
    parent = (parent as HTMLElement).parentElement as HTMLElement;

    const sections = document.querySelectorAll('.pcoded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('pcoded-trigger');
      }
    }
    let firstParent = parent.parentElement;
    let preParent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (firstParent?.classList.contains('pcoded-hasmenu')) {
      do {
        firstParent?.classList.add('pcoded-trigger');
        firstParent = ((firstParent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (firstParent.classList.contains('pcoded-hasmenu'));
    } else if (preParent.classList.contains('pcoded-submenu')) {
      do {
        preParent?.parentElement?.classList.add('pcoded-trigger');
        preParent = (((preParent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (preParent.classList.contains('pcoded-submenu'));
    }
    parent.classList.toggle('pcoded-trigger');
  }

  
}
