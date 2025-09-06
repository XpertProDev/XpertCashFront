import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';

@Component({
  selector: 'app-boutique',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.scss'
})

export class BoutiqueComponent implements OnInit {

  showPopup = false;
  boutiques: any[] = [];
  filteredBoutiques: any[] = [];
  isLoading: boolean = false;

  boutiqueForm: FormGroup = new FormGroup({});
  errorMessage: string | null = null;
  successMessage: string | null = null;
  
  filteredUsers: any[] = [];
  indicatif: string = '';
  maxPhoneLength: number = 8;
  isAscending: boolean = true;
  searchTerm: string = '';

  // Propriétés de pagination
  pageSize = 5;
  currentPage = 0;
  totalPages = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.initForm();  // Ajouté pour éviter l'erreur NG01052
    this.fetchBoutiques();
  }

  initForm() {
    this.boutiqueForm = this.fb.group({
      nomBoutique: ['', Validators.required],
      email: [''],
      telephone: ['', [Validators.pattern(/^\d{8,15}$/)]],
      adresse: [''],
      type: ['BOUTIQUE', Validators.required]
    });
  }
  
  updatePhoneValidator(longueur: number): void {
    this.boutiqueForm.controls['telephoneBoutique'].setValidators([
      Validators.required,
      Validators.pattern(`^\\+\\d{1,3}\\s?\\d{${longueur}}$`)
    ]);
    this.boutiqueForm.controls['telephoneBoutique'].updateValueAndValidity();
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.resetForm();
  }

  private resetForm() {
    if (this.boutiqueForm) {
      this.boutiqueForm.reset();  // ✅ reset() simplifie la réinitialisation
    }
  }

  onSubmit(): void {
    console.log("onSubmit() déclenché !");
    
    if (this.boutiqueForm.valid) {
      console.log("Formulaire valide, envoi en cours...", this.boutiqueForm.value);
  
      this.usersService.addBoutique(this.boutiqueForm.value).subscribe({
        next: (response) => {
          console.log("Réponse du backend :", response);
          this.successMessage = "Boutique ajoutée avec succès !";
  
          // ✅ Actualise la liste des boutiques après un ajout réussi
          this.fetchBoutiques();
  
          this.resetForm();
          this.closePopup();
        },
        error: (err) => {
          console.error("Erreur lors de l'ajout :", err);
          this.errorMessage = err.error?.error || "Une erreur est survenue.";
        }
      });
  
    } else {
      console.warn("Le formulaire est invalide !");
    }
  }
  
  fetchBoutiques(): void {
    this.usersService.getBoutiquesByEntreprise().subscribe({
      next: (data) => {
        this.boutiques = data;
        this.filteredBoutiques = [...data];
        this.updateTotalPages();
        console.log('Boutiques récupérées:', this.boutiques);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des boutiques:', err);
      }
    });
  }

 filterBoutiques(): void {
  const term = this.searchTerm.toLowerCase();

  this.filteredBoutiques = this.boutiques.filter(boutique => {
    const matchTerm = !term || (
      (boutique.nomBoutique && boutique.nomBoutique.toLowerCase().includes(term)) ||
      (boutique.adresse && boutique.adresse.toLowerCase().includes(term))
    );

    const matchType = this.filtreType === 'ALL' || boutique.typeBoutique === this.filtreType;

    return matchTerm && matchType;
  });

  // Réinitialiser à la première page lors du filtrage
  this.currentPage = 0;
  this.updateTotalPages();
}

  

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredBoutiques = this.boutiques;
    this.currentPage = 0;
    this.updateTotalPages();
  }

  openBoutiqueDetail(boutiqueId: number): void {
    this.router.navigate(['/detail-boutique', boutiqueId]);
  }


showFiltreDropdown: boolean = false;
filtreType: 'ALL' | 'BOUTIQUE' | 'ENTREPOT' = 'ALL';


toggleFiltreDropdown(): void {
  this.showFiltreDropdown = !this.showFiltreDropdown;
}

filtrerParType(type: 'ALL' | 'BOUTIQUE' | 'ENTREPOT'): void {
  this.filtreType = type;
  this.showFiltreDropdown = false;
  this.filterBoutiques();
}

// Méthodes pour la pagination personnalisée
goToPage(page: number): void {
  this.currentPage = page;
  this.updateTotalPages();
}

onPageSizeChange(): void {
  // Réinitialiser à la première page quand on change la taille
  this.currentPage = 0;
  this.updateTotalPages();
}

updateTotalPages(): void {
  this.totalPages = Math.ceil(this.filteredBoutiques.length / this.pageSize);
}

getPageInfo(): string {
  const startItem = this.currentPage * this.pageSize + 1;
  const endItem = Math.min((this.currentPage + 1) * this.pageSize, this.filteredBoutiques.length);
  return `${startItem}-${endItem} sur ${this.filteredBoutiques.length}`;
}

getVisiblePages(): (number | string)[] {
  const pages: (number | string)[] = [];
  const maxVisible = 5;
  
  if (this.totalPages <= maxVisible) {
    for (let i = 0; i < this.totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (this.currentPage <= 2) {
      for (let i = 0; i < 4; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(this.totalPages - 1);
    } else if (this.currentPage >= this.totalPages - 3) {
      pages.push(0);
      pages.push('...');
      for (let i = this.totalPages - 4; i < this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(0);
      pages.push('...');
      for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(this.totalPages - 1);
    }
  }
  
  return pages;
}

// Méthode helper pour gérer le clic sur les numéros de page
onPageClick(page: number | string): void {
  if (typeof page === 'number') {
    this.goToPage(page);
  }
}

// Getter pour les boutiques paginées
get paginatedBoutiques(): any[] {
  const startIndex = this.currentPage * this.pageSize;
  return this.filteredBoutiques.slice(startIndex, startIndex + this.pageSize);
}


}

