import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, of, startWith } from 'rxjs';
import { SharedDataService } from '../../SERVICES/shared-data.service';
import { CategorieService } from '../../SERVICES/categorie.service';
import { Categorie } from '../../MODELS/categorie.model';
import { UniteMesure } from '../../MODELS/unite.model';
import { UniteMesureService } from '../../SERVICES/unite.service';
import { Router } from '@angular/router';

// export interface CategorySelect {
//   name: string;
// }

// export interface UniteSelect {
//   name: string;
// }

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.scss'
})
export class AddProduitComponent {
  isChecked = false;
  boutiqueName: string = '';
  messageAPI: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  ajouteProduitForm!: FormGroup;
  modifierProduitForm!: FormGroup;
  ajouteCategoryForm!: FormGroup;
  errorMessage: string = '';
  errorMessageCategory: string = '';

  // Propriétés pour la popup
  showPopup: boolean = false;
  showPopup2: boolean = false;
  showPopupCategory: boolean = false;
  showPopupCategory2: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  popupImage: string = '';
  popupType: 'success' | 'error' = 'success';

  imagePopup: string | null = null;
  nomEntreprise: string = '';
  adresseEntreprise: string = '';
  logoEntreprise: string =''

  constructor(
    private sharedDataService: SharedDataService,
    private categorieService: CategorieService,
    private uniteMesureService: UniteMesureService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  onToggleChange(event: Event) {
    // event.target permet d’accéder au checkbox
    const checkbox = event.target as HTMLInputElement;
    console.log('isChecked:', checkbox.checked);
    // Faites ce que vous voulez ici avec la valeur
  }

  // Gestion de l'image
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  selectedFile: File | null | undefined = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
  
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newPhotoUrl = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }   

  //////// FOCUS CATEGORY
  myControl = new FormControl();
  uniteControl = new FormControl();

  options: Categorie[] = []; // Liste des catégories récupérées
  optionsUnite: UniteMesure[] = []; // Liste des unites récupérées
  filteredOptions: Observable<Categorie[]> = of([]);
  filteredNomUnite: Observable<UniteMesure[]> = of([]);

  // filteredOptions: Observable<CategorySelect[]> = of([]);

  ngOnInit(): void  {
    // Partage de donner de user
    this.sharedDataService.boutiqueName$.subscribe(name => {
      console.log("AddProduitComponent - Nom boutique récupéré :", name);
      this.boutiqueName = name;
    });
    // 🟢 Filtrage des catégories (OK)
    const token = localStorage.getItem('authToken'); // ou via un service d'authentification
    if (token) {
      this.categorieService.getCategories(token).subscribe(
        (categories) => {
          console.log('Catégories reçues depuis l\'API :', categories); // Debug ici
          this.options = categories;
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith<string | Categorie>(''),
            map(value => (typeof value === 'string' ? value : value.nom)),
            map(name => (name ? this._filter(name) : this.options.slice()))
          );
        },
        (error) => {
          console.error('Erreur lors de la récupération des catégories :', error);
        }
      );
    } else {
      console.error('Aucun token trouvé !');
    }
    // 🟢 Filtrage des unité de mesure (OK)
    if (token) {
      this.uniteMesureService.getUniteMesure(token).subscribe(
        (uniteMesures) => {
          console.log('Unité de mesure reçues depuis l\'API :', uniteMesures); // Debug ici
          this.optionsUnite = uniteMesures;
          this.filteredNomUnite = this.UniterControl.valueChanges.pipe(
            startWith<string | UniteMesure>(''),
            map(value => (typeof value === 'string' ? value : value.nom)),
            map(name => (name ? this._filterUnite(name) : this.optionsUnite.slice()))
          );
        },
        (error) => {
          console.error('Erreur lors de la récupération des catégories :', error);
        }
      );
    } else {
      console.error('Aucun token trouvé !');
    }

    // Formulaire pour ajouter une catégorie
    this.ajouteCategoryForm = this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });

    // À chaque changement de valeur dans le champ "categoryName", on réinitialise l'erreur
    this.ajouteCategoryForm.get('categoryName')?.valueChanges.subscribe(() => {
      this.errorMessageCategory = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });
  }

  // Getter pour faciliter l'accès aux contrôles dans le template
  get c() { return this.ajouteCategoryForm.controls; }
  
  // Lorsqu'une catégorie est sélectionnée dans l'autocomplete
  onCategorySelected(event: any): void {
    const selectedCategory = event.option.value;
    // this.produit.category = selectedCategory;
  }

  // Pour categorie 
  private _filter(name: string): Categorie[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.nom.toLowerCase().includes(filterValue));
  }
  
  displayFn(category?: Categorie): string {
    return category ? category.nom : '';
  }
  
  // Pour unite
  private _filterUnite(name: string): UniteMesure[] {
    const filterValue = name.toLowerCase();
    return this.optionsUnite.filter(optionNomUnite => optionNomUnite.nom.toLowerCase().includes(filterValue));
  }
  
  displayFnUnite(unityMesure?: UniteMesure): string {
    return unityMesure ? unityMesure.nom : '';
  }

  // POUR UNITE
  UniterControl = new FormControl();
  showCategoryCreation: boolean = false;
  showUniteCreation: boolean = false;

  // Lorsque l'utilisateur clique sur "Créer" pour une catégorie
  onCreateCategoryClick() {
    this.showCategoryCreation = true;
    this.showUniteCreation = false; // Facultatif si vous ne voulez afficher qu'un seul formulaire à la fois
  }

  // Lorsque l'utilisateur clique sur "Créer" pour une unité
  onCreateUniteClick() {
    this.showUniteCreation = true;
    this.showCategoryCreation = false;
  }

  // Méthodes pour annuler la création
  cancelCategoryCreation() {
    this.showCategoryCreation = false;
  }

  cancelUniteCreation() {
    this.showUniteCreation = false;
  }


  //////////////////////////////////////// CREATION DE CATEGORIES

  // Ouvre la popup avec titre, message et type (success ou error)
  // openPopupCategory2(title: string, message: string, type: 'success' | 'error'): void {
  //   this.popupTitle = title;
  //   this.popupMessage = message;
  //   this.popupType = type;
  //   // Choix de l'image en fonction du type
  //   if (type === 'success') {
  //     this.popupImage = 'assets/img/succcccc.png'; // Remplacez par le chemin de votre image de succès
  //   } else {
  //     this.popupImage = 'assets/img/error.png'; // Remplacez par le chemin de votre image d'erreur
  //   }
  //   this.showPopupCategory2 = true;
  // }

  // // Ferme la popup et redirige si l'inscription a réussi
  // closePopupCategory2(): void {
  //   this.showPopupCategory2 = false;
  //   if (this.popupType === 'success') {
  //     //this.router.navigate(['/produit']);
  //     this.showPopupCategory = false;
  //     this.ajouteCategoryForm.reset();
  //     this.errorMessageCategory = '';
      
  //   }
  // }

  submitFormCategory(): void {
    // if (this.ajouteCategoryForm.invalid) {
    //   this.errorMessageCategory = "Veuillez remplir correctement le formulaire.";
    //   return;
    // }
  
    const categoryData = { nom: this.ajouteCategoryForm.value.categoryName };
  
    this.categorieService.ajouterCategorie(categoryData).subscribe({
      next: (response: any) => {
        console.log('Categorie ajouté avec succès : ', response);
        if (response && response.id) {
          this.apiMessageType = 'success';
          this.messageAPI = response.message || "La catégorie a été créée avec succès.";
          this.ajouteCategoryForm.reset();
        }
        
      },
      error: (error) => {
        console.log("Erreur complète :", error);
        console.log("Réponse API :", error.error);
        let message = "Une erreur est survenue lors de la création du produit.";
  
        if (error.error) {
          // Si error.error est un objet contenant une propriété "error"
          if (typeof error.error === "object" && error.error.error) {
            message = error.error.error;
          }
          // Si error.error est une chaîne, on l'utilise directement
          else if (typeof error.error === "string") {
            message = error.error;
          }
        }
  
        this.apiMessageType = 'error';
        this.messageAPI = message;
      }
    });
  }  
  
}
