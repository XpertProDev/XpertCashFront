// Angular Import
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { NavigationItem } from '../../navigation';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { ModuleService } from 'src/app/admin-page/SERVICES/Module-Service';

@Component({
  selector: 'app-nav-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() item!: NavigationItem;
  canShow = false;

  private entrepriseModules: string[] = [];

  constructor(
    private usersService: UsersService,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.moduleService.getModulesEntreprise().subscribe({
      next: (modules) => {
        this.entrepriseModules = modules
          .filter(mod => mod.actif)
          .map(mod => mod.code.trim().toUpperCase());
        this.evaluateVisibility();
      },
      error: () => {
        this.canShow = false;
      }
    });
  }

   private evaluateVisibility(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.canShow = this.hasVisibleItem(this.item, user.permissions);
      },
      error: () => {
        this.canShow = false;
      }
    });
  }

    private hasVisibleItem(item: NavigationItem, permissions: string[]): boolean {
    // Vérifier permission et module sur l'item courant
    const hasPermission = !item.codePermission || permissions.includes(item.codePermission);
    const hasModule = !item.codeModule || this.entrepriseModules.includes(item.codeModule);

    if (hasPermission && hasModule) {
      return true; // cet item peut s’afficher
    }

    // Sinon, on vérifie récursivement les enfants
    if (item.children?.length) {
      return item.children.some(child => this.hasVisibleItem(child, permissions));
    }

    return false;
  }

   // public method
  closeOtherMenu(event: MouseEvent) {
    const ele = event.target as HTMLElement;
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement as HTMLElement;
      const up_parent = ((parent.parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      const last_parent = up_parent.parentElement;
      const sections = document.querySelectorAll('.pcoded-hasmenu');
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
        sections[i].classList.remove('pcoded-trigger');
      }

      if (parent.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger');
        parent.classList.add('active');
      } else if (up_parent.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger');
        last_parent.classList.add('active');
      }
    }
    if (document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
      document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('mob-open');
    }
  }

}
