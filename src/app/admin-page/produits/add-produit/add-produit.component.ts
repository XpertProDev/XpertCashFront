import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, of, startWith } from 'rxjs';

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
  options: CategorySelect[] = [
    {name: 'Cate 1'},
    {name: 'Cate 2'},
    {name: 'Cate 3'}
  ];
  // unite

  filteredOptions: Observable<CategorySelect[]> = of([]);

  ngOnInit() {
    // 🟢 Filtrage des catégories (OK)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith<string | CategorySelect>(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice()))
    );

    // Filtrage des unités 
    this.filteredNomUnite = this.UniterControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUnite(value))
    );
  }
  

  // POUR CATEGORY
   // Lorsqu'une catégorie est sélectionnée dans l'autocomplete
   onCategorySelected(event: any): void {
    const selectedCategory = event.option.value;
    // this.produit.category = selectedCategory;
  }

  displayFn(acte?: CategorySelect): string {
    return acte ? acte.name : '';
  }  

  private _filter(name: string): CategorySelect[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  // POUR UNITE
  UniterControl = new FormControl();
  nomUnite: string[] = ['One', 'Two', 'Three'];
  filteredNomUnite: Observable<string[]> = of([]);

  private _filterUnite(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.nomUnite.filter(optionNomUnite => optionNomUnite.toLowerCase().indexOf(filterValue) === 0);
  }




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
