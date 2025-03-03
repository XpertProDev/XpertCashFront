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
import { ProduitService } from '../../SERVICES/add-produit-service';
import { PopupData } from '../../MODELS/PopUp/popup-data';
import { UsersService } from '../../SERVICES/users.service';

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

  // boutiqueId: number | null = null;

  // Variable pour gérer l'affichage du popup
  showPopup: boolean = false;

   // Variable regroupant toutes les informations du popup
   popupData: PopupData = {
    title: '',
    message: '',
    image: '',
    type: 'success'
  };
  
  // Exemple d'utilisation lors d'une réponse du backend
  onResponseFromBackend(response: any): void {
    // Par exemple, si response contient { message, type } et que vous souhaitez afficher une image par défaut
    const defaultImage = response.type === 'success' ? 'assets/img/succes.png' : 'assets/img/error.png';
    this.showPopupMessage({
      title: response.type === 'success' ? 'Succès' : 'Erreur',
      message: response.message,
      image: defaultImage,
      type: response.type
    });
  }
  
  // Méthode pour afficher le popup avec des données passées en paramètre
  showPopupMessage(data: PopupData): void {
    this.popupData = data;
    this.showPopup = true; 
    
  }

  // Méthode pour fermer le popup
  closePopup(): void {
    this.showPopup = false;
  }


  isChecked = false;
  boutiqueName: string = '';
  boutiqueId: number = 1; 
  messageAPI: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  ajouteProduitForm!: FormGroup;
  modifierProduitForm!: FormGroup;
  ajouteCategoryForm!: FormGroup;
  ajouteUniteForm!: FormGroup;
  errorMessage: string = '';
  errorMessageCategory: string = '';
  errorMessageUnity: string = '';

  // Propriétés pour la popup
  // showPopup: boolean = false;
  // showPopup2: boolean = false;
  // showPopupCategory: boolean = false;
  // showPopupCategory2: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  popupImage: string = '';
  popupType: 'success' | 'error' = 'success';

  imagePopup: string | null = null;
  nomEntreprise: string = '';
  adresseEntreprise: string = '';
  logoEntreprise: string =''

  // produitForm: FormGroup;
  imageFile: File | null = null;
  isLoading: boolean = false;

  constructor(
    private sharedDataService: SharedDataService,
    private categorieService: CategorieService,
    private uniteMesureService: UniteMesureService,
    private produitService: ProduitService,
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    
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

  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.newPhotoUrl = e.target?.result as string;
  //     };
  //     reader.readAsDataURL(this.selectedFile);
  //   }
  // }
  // Remplacez cette méthode :
 
  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0]; // Récupère le fichier sélectionné

    // Vérification de la taille du fichier (2 Mo = 2 * 1024 * 1024 octets)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      this.errorMessage = 'Le fichier est trop volumineux. Veuillez choisir un fichier de moins de 2 Mo.';
      this.selectedFile = null;
      this.imageFile = null;  // Réinitialise l'image si le fichier est trop grand
      this.newPhotoUrl = null;
      return;
    }

    // Si le fichier est correct, on continue
    this.errorMessage = '';
    this.selectedFile = file;
    this.imageFile = file; // ✅ Associe le fichier sélectionné à imageFile

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
    this.getBoutiqueName();
    
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
            // map(value => (typeof value === 'string' ? value : value.nom)),
            map(value => (value ? (typeof value === 'string' ? value : value.nom) : '')),
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
            // map(value => (typeof value === 'string' ? value : value.nom)),
            map(value => (value ? (typeof value === 'string' ? value : value.nom) : '')),
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
    this.ajouteProduitForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prixVente: ['', Validators.required],
      prixAchat: ['', Validators.required],
      quantite: ['', Validators.required],
      seuilAlert: ['', Validators.required],
      description: [''],
      codeBare: ['', [Validators.minLength(8), Validators.maxLength(18)]],
      categorieId: [''],
      uniteId: ['']
    });
    // Abonnement pour récupérer l'ID de la boutique active
    this.sharedDataService.boutiqueId$.subscribe(id => {
      this.boutiqueId = id;
    });

    // Formulaire pour ajouter une catégorie
    this.ajouteCategoryForm = this.fb.group({
      categoryName: ['', [/*Validators.required,*/ Validators.minLength(3), Validators.maxLength(20)]]
    });

    // Formulaire pour ajouter une unite
    this.ajouteUniteForm = this.fb.group({
      unityName: ['', [ Validators.minLength(2), Validators.maxLength(20)]]
    });

    // À chaque changement de valeur dans le champ "categoryName", on réinitialise l'erreur
    this.ajouteCategoryForm.get('categoryName')?.valueChanges.subscribe(() => {
      this.errorMessageCategory = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });

    // À chaque changement de valeur dans le champ "uniteName", on réinitialise l'erreur
    this.ajouteUniteForm.get('unityName')?.valueChanges.subscribe(() => {
      this.errorMessageUnity = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });

    
  }

  getBoutiqueName() {
    this.usersService.getUserInfo().subscribe(
      (userInfo) => {
        console.log(userInfo);
        if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
          console.log(userInfo.boutiques[0]);
  
          this.boutiqueName = userInfo.boutiques[0].nomBoutique || 'Nom de la boutique non trouvé';
        } else {
          console.error('Aucune boutique trouvée pour cet utilisateur');
          this.boutiqueName = 'Aucune boutique';
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    );
  }

  // Getter pour faciliter l'accès aux contrôles dans le template
  get c() { return this.ajouteCategoryForm.controls; }
  get u() { return this.ajouteUniteForm.controls; }
  get f() { return this.ajouteProduitForm.controls; }
  
  // Méthode pour la sélection d'une catégorie
  onCategorySelected(event: any): void {
    console.log('Option sélectionnée :', event.option.value);  // Ajoutez ce log pour vérifier la sélection
    if (event.option && event.option.value) {
      this.ajouteProduitForm.get('categorieId')?.setValue(event.option.value.id);
    } else {
      this.ajouteProduitForm.get('categorieId')?.setValue(null);
    }
  }

  onUniteSelected(event: any): void {
    console.log('Unité sélectionnée :', event.option.value);
    if (event.option && event.option.value) {
      this.ajouteProduitForm.get('uniteId')?.setValue(event.option.value.id);
    } else {
      this.ajouteProduitForm.get('uniteId')?.setValue(null);
    }
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
    this.showUniteCreation = false; 
    // this.ajouteUniteForm.get('unityName')!.setValue('');
    this.ajouteCategoryForm.get('categoryName')!.setValue('');
  }

  // Lorsque l'utilisateur clique sur "Créer" pour une unité
  onCreateUniteClick() {
    this.showUniteCreation = true;
    this.showCategoryCreation = false;
    this.ajouteUniteForm.get('unityName')!.setValue('');
    // this.ajouteCategoryForm.get('categoryName')!.setValue('');
  }

  // Méthodes pour annuler la création
  cancelCategoryCreation() {
    this.showCategoryCreation = false;
  }

  cancelUniteCreation() {
    this.showUniteCreation = false;
  }

  submitFormCategory(): void {
    const categoryData = { nom: this.ajouteCategoryForm.value.categoryName };
  
    this.categorieService.ajouterCategorie(categoryData).subscribe({
      next: (response: any) => {
        console.log('Catégorie ajoutée avec succès : ', response);
        if (response && response.id) {
          // Réinitialiser le formulaire
          this.ajouteCategoryForm.get('categoryName')!.setValue('');
  
          // Ajouter la nouvelle catégorie à la liste des catégories
          const newCategory: Categorie = { id: response.id, nom: categoryData.nom };
          this.options.push(newCategory);
  
          // Mettre à jour les options filtrées pour inclure la nouvelle catégorie
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith<string | Categorie>(''),
            map(value => (typeof value === 'string' ? value : value.nom)),
            map(name => (name ? this._filter(name) : this.options.slice()))
          );
  
          // Afficher un message de succès
          this.apiMessageType = 'success';
          this.messageAPI = response.message || "La catégorie a été créée avec succès.";
        }
      },
      error: (error) => {
        console.log("Erreur complète :", error);
        console.log("Réponse API :", error.error);
        let message = "Une erreur est survenue lors de la création de la catégorie.";
  
        if (error.error) {
          if (typeof error.error === "object" && error.error.error) {
            message = error.error.error;
          } else if (typeof error.error === "string") {
            message = error.error;
          }
        }
  
        this.apiMessageType = 'error';
        this.messageAPI = message;
      }
    });
  }
  

  submitFormUnity(): void {
    const unityData = { nom: this.ajouteUniteForm.value.unityName };
  
    this.uniteMesureService.ajouterUnite(unityData).subscribe({
      next: (response: any) => {
        console.log('Unité ajouté avec succès : ', response);
        if (response && response.id) {
          // Réinitialiser le formulaire
          this.ajouteUniteForm.get('unityName')!.setValue('');
          
          // Ajouter l'unité créée à la liste des unités
          const newUnity: UniteMesure = { id: response.id, nom: unityData.nom };
          this.optionsUnite.push(newUnity);
  
          // Mettre à jour les options filtrées pour afficher la nouvelle unité
          this.filteredNomUnite = this.uniteControl.valueChanges.pipe(
            startWith<string | UniteMesure>(''),
            map(value => (typeof value === 'string' ? value : value.nom)),
            map(name => (name ? this._filterUnite(name) : this.optionsUnite.slice()))
          );
  
          // Afficher un message de succès
          this.apiMessageType = 'success';
          this.messageAPI = response.message || "L'unité a été créée avec succès.";
        }
      },
      error: (error) => {
        console.log("Erreur complète :", error);
        console.log("Réponse API :", error.error);
        let message = "Une erreur est survenue lors de la création de l'unité.";
  
        if (error.error) {
          if (typeof error.error === "object" && error.error.error) {
            message = error.error.error;
          } else if (typeof error.error === "string") {
            message = error.error;
          }
        }
  
        this.apiMessageType = 'error';
        this.messageAPI = message;
      }
    });
  }

  onSubmit() {

    if (this.ajouteProduitForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }
    
    this.isLoading = true;
    
    // (patch des catégories et unités comme précédemment)

    const produit = this.ajouteProduitForm.value;
    console.log('Produit soumis:', produit);
    const tokenStored = localStorage.getItem('authToken');
    if (!tokenStored) {
      this.showPopupMessage({
        title: 'Erreur',
        message: 'Aucun token trouvé !',
        image: 'assets/img/error.png',
        type: 'error'
      });
      this.isLoading = false;
      return;
    }
    const token = `Bearer ${tokenStored}`;
    const addToStock = this.isChecked;

    setTimeout(() => { 

      this.produitService.ajouterProduit(this.boutiqueId, produit, this.imageFile, addToStock, token)
      .subscribe({
        next: data => {
          this.showPopupMessage({
            title: 'Succès',
            message: 'Produit créé avec succès',
            image: 'assets/img/succcccc.png',
            type: 'success',
            
          });
          this.ajouteProduitForm.reset();
          this.myControl.reset();
          this.uniteControl.reset();

          this.imageFile = null;
          this.selectedFile = null;
          this.newPhotoUrl = null;

          this.isLoading = false;
          
          // Redirection vers la page '/produit'
          this.router.navigate(['/produit']);
        },
        error: error => {
          let errorMessage = 'Erreur lors de la création du produit';
          
          if (error.error) {
            if (typeof error.error === 'object' && error.error.error) {
              errorMessage = error.error.error;
            } else if (typeof error.error === 'string') {
              errorMessage = error.error;
            }
          }
          
          // Optionnel : supprimer le préfixe "Une erreur est survenue :"
          errorMessage = errorMessage.replace('Une erreur est survenue : ', '');
          
          this.showPopupMessage({
            title: 'Erreur',
            message: errorMessage,
            image: 'assets/img/error.png',
            type: 'error'
          });
          this.isLoading = false;
        }        
        
      });
    }, 100);
    
  }

}
