import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, of, startWith } from 'rxjs';
import { SharedDataService } from '../../SERVICES/shared-data.service';
import { CategorieService } from '../../SERVICES/categorie.service';
import { Categorie } from '../../MODELS/categorie.model';
import { UniteMesure } from '../../MODELS/unite.model';
import { UniteMesureService } from '../../SERVICES/unite.service';

export interface CategorySelect {
  name: string;
}

export interface UniteSelect {
  name: string;
}

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

  constructor(
    private sharedDataService: SharedDataService,
    private categorieService: CategorieService,
    private uniteMesureService: UniteMesureService,
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

  //////// FOCUS CATEGORUY
  
  myControl = new FormControl();
  uniteControl = new FormControl();
  // Categorie
  // options: CategorySelect[] = [
  //   {name: 'Cate 1'},
  //   {name: 'Cate 2'},
  //   {name: 'Cate 3'}
  // ];
  // unite

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

    // Filtrage des unités 
    // this.filteredNomUnite = this.UniterControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filterUnite(value))
    // );

  
  }
  

  // POUR CATEGORY
   // Lorsqu'une catégorie est sélectionnée dans l'autocomplete
   onCategorySelected(event: any): void {
    const selectedCategory = event.option.value;
    // this.produit.category = selectedCategory;
  }

  // displayFn(acte?: CategorySelect): string {
  //   return acte ? acte.name : '';
  // }  

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
}
