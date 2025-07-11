import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, of, startWith } from 'rxjs';
import { Produit } from '../../MODELS/produit.model';
import { ProduitService } from '../../SERVICES/produit.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Categorie } from '../../MODELS/categorie.model';
import { UniteMesure } from '../../MODELS/unite.model';
import { CategorieService } from '../../SERVICES/categorie.service';
// import { SharedDataService } from '../../SERVICES/shared-data.service';
import { UniteMesureService } from '../../SERVICES/unite.service';
import { UsersService } from '../../SERVICES/users.service';
import { PopupData } from '../../MODELS/PopUp/popup-data';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { environment } from 'src/environments/environment';

export interface CategorySelect {
  nom: string;
}

export interface UniteSelect {
  name: string;
}

@Component({
  selector: 'app-list-produit',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, MatAutocompleteModule, NgxBarcode6Module, RouterLink ],
  templateUrl: './list-produit.component.html',
  styleUrl: './list-produit.component.scss'
})
export class ListProduitComponent {
  boutiqueNames: string[] = [];
  selectedBoutique: any = null;
  previousSelectedBoutique: any | null = null;
  boutiqueActuelle: string = "Toutes les boutiques";
  boutiques: any[] = []; 
  isChecked = true;
  allBoutiqueNames: string[] = [];
  boutiqueName: string = '';
  boutiqueId: number = 1; 
  messageAPI: string = '';
  apiMessageType: 'success' | 'error' | '' = '';
  // ajouteProduitForm!: FormGroup;
  modifierProduitForm!: FormGroup;
  ajouteCategoryForm!: FormGroup;
  ajouteUniteForm!: FormGroup;
  errorMessage: string = '';
  errorMessageCategory: string = '';
  errorMessageUnity: string = '';
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
  // Variable pour gérer l'affichage du popup
  showPopup: boolean = false;
  // Gestion de l'image
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  private backendUrl =environment.apiBaseUrl;
    private apiUrl = environment.imgUrl;
 

  selectedFile: File | null | undefined = null;
  selectedBoutiqueId: number | null = null;
  showPopupMessage(data: PopupData): void { this.popupData = data; this.showPopup = true; }
  // Méthode pour fermer le popup
  closePopup(): void { this.showPopup = false; this.router.navigate(['/produit']); }
  // Variable regroupant toutes les informations du popup
  popupData: PopupData = { title: '', message: '', image: '', type: 'success' };
  showBarcode = false;
  showPopupCategory: boolean = false;
  showPopupUnit: boolean = false;
  isEditing: boolean = false;
    
  // Produit 
  produit: Produit = {
    id: 0,
    nom: '',
    prixVente: 0,
    description: '',
    codeGenerique: '',
    prixAchat: 0,
    quantite: 0,
    seuilAlert: 0,
    categorieId: null,
    uniteId: null,
    codeBare: '',
    photo: '',
    enStock: false,
    boutiqueId: null,
    // Facultatif : nomCategorie, nomUnite, createdAt
  };

  // Getter pour faciliter l'accès aux contrôles dans le template
  get c() { return this.ajouteCategoryForm.controls; }
  get u() { return this.ajouteUniteForm.controls; }
  get f() { return this.modifierProduitForm.controls; }

  constructor(
    // private sharedDataService: SharedDataService,
    private categorieService: CategorieService,
    private uniteMesureService: UniteMesureService,
    private produitService: ProduitService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void  {
    // this.getProduit();
    // this.getPartageNameBoutique();
    // this.getPartageIdBoutique();
    this.getFiltrageCategoriesUnites();
    this.getModifierProduitForm();
    this.getAjouteCategoryForm();
    this.getAjouteUniteForm();
    this.getAjouteCategoryFormCategoryName();
    this.getAjouteCategoryFormUnityName();
    this.getModifierProduitFormCodeBare();
    this.modifierProduitForm.disable();
    this.myControl.disable();
    this.uniteControl.disable();

    this.route.queryParams.subscribe(params => {
      this.selectedBoutiqueId = params['boutiqueId'] ? +params['boutiqueId'] : null;
      this.getProduit();
    });
  }

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
  
  onToggleChange(event: Event) {
    // event.target permet d’accéder au checkbox
    const checkbox = event.target as HTMLInputElement;
    console.log('isChecked:', checkbox.checked);
    // Faites ce que vous voulez ici avec la valeur
  }

  clearImage() {
    this.newPhotoUrl = null;
    this.imageFile = null;
  }
   
  // Dans list-produit.component.ts
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

  getImageUrl(produit: Produit): string {
    if (produit.photo) {
      return this.apiUrl + produit.photo;  // Si le produit a une image, on la récupère
    } else if (produit.nom) {
      const firstLetter = produit.nom.charAt(0).toUpperCase();  // Si pas d'image, on prend la première lettre du nom du produit
      return `assets/img/letters/${firstLetter}.png`;  // Assurez-vous d'avoir une image pour chaque lettre dans le dossier "assets/img/letters/"
    } else {
      return 'assets/img/appareil.jpg';  // Image par défaut si aucune image et nom
    }
  }
  
  //////// FOCUS CATEGORY
  myControl = new FormControl();
  uniteControl = new FormControl();

  options: Categorie[] = []; // Liste des catégories récupérées
  optionsUnite: UniteMesure[] = []; // Liste des unites récupérées
  filteredOptions: Observable<Categorie[]> = of([]);
  filteredNomUnite: Observable<UniteMesure[]> = of([]);
    
  // getPartageNameBoutique() {
  //   // Partage de donner de user
  //   this.sharedDataService.boutiqueName$.subscribe(name => {
  //     console.log("AddProduitComponent - Nom boutique récupéré :", name);
  //     this.boutiqueName = name;
  //   });
  // }

  // Méthodes pour ouvrir/fermer le popup
  openPopupCategory(): void {
    this.showPopupCategory = true;
    this.ajouteCategoryForm.reset();
    this.errorMessageCategory = '';
    this.messageAPI = '';
  }

  closePopupCategory(): void { 
    this.showPopupCategory = false; 
  }

  // Méthodes pour ouvrir/fermer le popup
  openPopupUnit(): void {
    this.showPopupUnit = true;
    this.ajouteUniteForm.reset();
    this.errorMessageUnity = '';
    this.messageAPI = '';
  }

  closePopupUnit(): void { 
    this.showPopupUnit = false; 
  }
  

  getFiltrageCategoriesUnites() {
    // 🟢 Filtrage des catégories (OK)
    const token = localStorage.getItem('accessToken'); // ou via un service d'authentification
    if (token) {
      this.categorieService.getCategories().subscribe(
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
      this.uniteMesureService.getUniteMesure().subscribe(
        (uniteMesures) => {
          console.log('Unité de mesure reçues depuis l\'API :', uniteMesures); // Debug ici
          this.optionsUnite = uniteMesures;
          this.filteredNomUnite = this.uniteControl.valueChanges.pipe(
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
  }

  getModifierProduitForm() {
    this.modifierProduitForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prixVente: ['', Validators.required],
      prixAchat: ['', Validators.required],
      quantite: [''],
      seuilAlert: ['', Validators.required],
      description: [''],
      codeBare: ['', [Validators.minLength(8), Validators.maxLength(18)]],
      categorieId: [''],
      uniteId: ['']
    });
  }

  // getPartageIdBoutique() {
  //   // Abonnement pour récupérer l'ID de la boutique active
  //   this.sharedDataService.boutiqueId$.subscribe(id => {
  //     this.boutiqueId = id;
  //   });
  // }

  getAjouteCategoryForm() {
    // Formulaire pour ajouter une catégorie
    this.ajouteCategoryForm = this.fb.group({
      categoryName: ['', [/*Validators.required,*/ Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  getAjouteUniteForm() {
    // Formulaire pour ajouter une unite
    this.ajouteUniteForm = this.fb.group({
      unityName: ['', [ Validators.minLength(2), Validators.maxLength(20)]]
    });
  }

  getAjouteCategoryFormCategoryName() {
    // À chaque changement de valeur dans le champ "categoryName", on réinitialise l'erreur
    this.ajouteCategoryForm.get('categoryName')?.valueChanges.subscribe(() => {
      this.errorMessageCategory = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });
  }

  getAjouteCategoryFormUnityName() {
    // À chaque changement de valeur dans le champ "uniteName", on réinitialise l'erreur
    this.ajouteUniteForm.get('unityName')?.valueChanges.subscribe(() => {
      this.errorMessageUnity = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });
  }

  getModifierProduitFormCodeBare() {
    // Remplacer l'abonnement existant par :
    this.modifierProduitForm.get('codeBare')?.valueChanges.subscribe(value => {
      this.showBarcode = value && value.length >= 3;
    });
  }

  // Fonction pour récupérer le produit
  selectBoutique(boutique: any | null): void {
      console.log("Boutique sélectionnée:", boutique);
  
      // Si une boutique est sélectionnée, met à jour selectedBoutique
      if (boutique === null) {
          this.selectedBoutique = null;
          this.boutiqueActuelle = "Toutes les boutiques"; // Si aucune boutique n'est sélectionnée
      } else {
          this.selectedBoutique = boutique;
          this.boutiqueActuelle = boutique.nom || "Boutique sans nom"; // Mise à jour de la boutique actuelle
      }
  
      console.log("selectedBoutique après mise à jour:", this.selectedBoutique);
      console.log("boutiqueActuelle après mise à jour:", this.boutiqueActuelle);
  
      // Après la mise à jour, appelle getProduit() pour récupérer les produits de la boutique sélectionnée
      this.getProduit();
  }
  
  getProduit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const productId = idParam ? +idParam : 0;
  
    this.produitService.getProduitById(productId).subscribe({
      next: (data: Produit) => {
        this.produit = data;
        this.modifierProduitForm.patchValue(this.produit);
        this.loadInitialValues();

        // Réinitialiser les contrôles après chargement
        this.myControl.disable();
        this.uniteControl.disable();
  
        // Mise à jour des noms de boutiques
        if (this.produit.boutiques && this.produit.boutiques.length > 0) {
          this.allBoutiqueNames = this.produit.boutiques.map(b => b.nom);
          
          if (this.selectedBoutiqueId) {
            const boutique = this.produit.boutiques.find(b => b.id === this.selectedBoutiqueId);
            this.boutiqueName = boutique ? boutique.nom : 'Boutique non trouvée';
          }
        } else {
          this.allBoutiqueNames = ['Aucune boutique'];
          this.boutiqueName = 'Aucune boutique';
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du produit', err);
      }
    });
  }

  getBoutiqueQuantity(): number {
    if (!this.selectedBoutiqueId || !this.produit.boutiques) return 0;
    const boutique = this.produit.boutiques.find(b => b.id === this.selectedBoutiqueId);
    return boutique?.quantite || 0;
  }

  getBoutiqueNames(boutiques: { id: number, nom: string, quantite: number }[] | undefined): string[] {
    if (boutiques && boutiques.length > 0) {
      return boutiques.map(b => `${b.nom} (ID: ${b.id}) - Quantité: ${b.quantite}`);
    }
    console.error('Aucune boutique trouvée pour ce produit');
    return ['Aucune boutique'];
  }

  // toggleEditing(): void {
  //   this.isEditing = !this.isEditing;
    
  //   if (this.isEditing) {
  //     this.modifierProduitForm.enable();
  //   } else {
  //     // Annuler les modifications et recharger les données originales
  //     this.modifierProduitForm.disable();
  //     this.getProduit();
  //   }
  // }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    
    if (this.isEditing) {
      // Activer tous les contrôles
      this.modifierProduitForm.enable();
      this.myControl.enable();
      this.uniteControl.enable();
    } else {
      // Désactiver et réinitialiser
      this.modifierProduitForm.disable();
      this.myControl.disable();
      this.uniteControl.disable();
      
      // Réinitialiser les valeurs aux données originales
      this.getProduit();
    }
  }

  // Méthode pour la sélection d'une catégorie
  onCategorySelected(event: any): void {
    console.log('Option sélectionnée :', event.option.value);
    if (event.option && event.option.value) {
      this.modifierProduitForm.get('categorieId')?.setValue(event.option.value.id);
    } else {
      this.modifierProduitForm.get('categorieId')?.setValue(null);
    }
  }

  onUniteSelected(event: any): void {
    console.log('Unité sélectionnée :', event.option.value);
    if (event.option && event.option.value) {
      this.modifierProduitForm.get('uniteId')?.setValue(event.option.value.id);
    } else {
      this.modifierProduitForm.get('uniteId')?.setValue(null);
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
    return this.optionsUnite.filter(option => 
      option.nom.toLowerCase().includes(filterValue)
    );
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
    this.openPopupCategory();
    // this.ajouteUniteForm.get('unityName')!.setValue('');
    this.ajouteCategoryForm.get('categoryName')!.setValue('');
  }

  // Lorsque l'utilisateur clique sur "Créer" pour une unité
  onCreateUniteClick() {
    this.showUniteCreation = true;
    this.showCategoryCreation = false;
    this.openPopupUnit();
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

          // Créer le nouvel objet catégorie
          const newCategory: Categorie = { 
            id: response.id, 
            nom: categoryData.nom 
          };

          // Ajouter à la liste des options
          this.options.push(newCategory);

          this.showPopupCategory = false; 

          // 1. Mettre à jour l'input d'autocomplete
          this.myControl.setValue(newCategory);

          // 2. Mettre à jour la valeur dans le formulaire principal
          this.modifierProduitForm.get('categorieId')?.setValue(newCategory.id);

          // Mettre à jour les options filtrées
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(newCategory), // Pré-remplir avec la nouvelle valeur
            map(value => (typeof value === 'string' ? value : value?.nom)),
            map(name => (name ? this._filter(name) : this.options.slice()))
          );

          // Afficher message
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

  private loadInitialValues() {
    if(this.produit.uniteId) {
      const initialUnite = this.optionsUnite.find(u => u.id === this.produit.uniteId);
      if(initialUnite) this.uniteControl.setValue(initialUnite);
    }
    
    if(this.produit.categorieId) {
      const initialCategorie = this.options.find(c => c.id === this.produit.categorieId);
      if(initialCategorie) this.myControl.setValue(initialCategorie);
    }
  }

  submitFormUnity(): void {
    const unityData = { nom: this.ajouteUniteForm.value.unityName };
  
    this.uniteMesureService.ajouterUnite(unityData).subscribe({
      next: (response: any) => {
        console.log('Unité ajouté avec succès : ', response);
        if (response && response.id) {
          // Réinitialiser le formulaire
          this.ajouteUniteForm.get('unityName')!.setValue('');

          // Créer la nouvelle unité
          const newUnity: UniteMesure = { 
            id: response.id, 
            nom: unityData.nom 
          };

          // Ajouter à la liste
          this.optionsUnite.push(newUnity);

          this.showPopupUnit = false; 

          // Mettre à jour le contrôle après l'ajout
          this.uniteControl.setValue(newUnity);
          this.modifierProduitForm.get('uniteId')?.setValue(newUnity.id);
          
          // Forcer la mise à jour des options filtrées
          this.filteredNomUnite = this.uniteControl.valueChanges.pipe(
            startWith(newUnity),
            map(value => typeof value === 'string' ? value : value?.nom),
            map((name: string) => name ? this._filterUnite(name) : this.optionsUnite.slice())
          );
          
          // Ajouter cette ligne pour actualiser l'affichage
          this.uniteControl.updateValueAndValidity();

          // Afficher message
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

  // submitUpdateForm(): void {
  //   // Vérifier que le formulaire est valide
  //   if (this.modifierProduitForm.invalid) {
  //     this.errorMessage = "Veuillez remplir les champs obligatoires.";
  //     return;
  //   }
  
  //   // Fusionner les valeurs du formulaire avec le produit existant
  //   const updatedProduct: Produit = {
  //     ...this.produit,
  //     ...this.modifierProduitForm.value 
  //   };
  
  //   // Ajout de logs pour le debug
  //   console.log("Produit mis à jour (avant envoi) :", updatedProduct);
  //   console.log("Fichier sélectionné :", this.selectedFile);
  
  //   // Appel du service qui se charge de créer le FormData et d'envoyer la requête PATCH
  //   this.produitService.modifierProduit(updatedProduct, this.selectedFile ?? undefined)
  //     .subscribe({
  //       next: (response: Produit) => {
  //         console.log("Produit modifié avec succès", response);
  //         this.produit = response;
  //         this.showPopupMessage({
  //           title: 'Succès',
  //           message: 'Le produit a été modifié avec succès.',
  //           image: 'assets/img/succcccc.png',
  //           type: 'success'
  //         });
  //       },
  //       error: (error) => {
  //         console.error("Erreur lors de la modification du produit", error);
  //         let errorMessage = "Une erreur est survenue lors de la modification du produit.";
  //         if (error.error) {
  //           if (typeof error.error === "object" && error.error.error) {
  //             errorMessage = error.error.error;
  //           } else if (typeof error.error === "string") {
  //             errorMessage = error.error;
  //           }
  //         }
  //         this.showPopupMessage({
  //           title: 'Erreur',
  //           message: errorMessage,
  //           image: 'assets/img/error.png',
  //           type: 'error'
  //         });
  //       }
  //     });
  // }

  submitUpdateForm(): void {
  // 1. Vérifier si on est en mode édition
  if (!this.isEditing) return;

  // 2. Vérifier la validité du formulaire
  if (this.modifierProduitForm.invalid) {
    this.errorMessage = "Veuillez corriger les erreurs dans le formulaire.";
    
    // Marquer tous les champs comme "touched" pour afficher les erreurs
    this.markFormGroupTouched(this.modifierProduitForm);
    return;
  }

  // 3. Préparer les données à envoyer
  const updatedProduct: Produit = {
    ...this.produit,
    ...this.modifierProduitForm.value
  };

  // 4. Appel au service de mise à jour
  this.isLoading = true;
  this.produitService.modifierProduit(
    updatedProduct, 
    this.selectedFile ?? undefined
  ).subscribe({
    next: (response: Produit) => {
      this.isLoading = false;
      
      // Mettre à jour les données locales
      this.produit = response;
      
      // Réinitialiser l'état d'édition
      this.isEditing = false;
      this.modifierProduitForm.disable();
      
      // Réinitialiser la sélection de fichier
      this.selectedFile = null;
      this.newPhotoUrl = null;
      
      // Afficher message de succès
      this.showPopupMessage({
        title: 'Succès',
        message: 'Produit modifié avec succès',
        image: 'assets/img/succcccc.png',
        type: 'success'
      });
    },
    error: (error) => {
      this.isLoading = false;
      
      // Gestion des erreurs
      let errorMessage = "Erreur lors de la modification du produit";
      
      if (error.error?.message) {
        errorMessage += `: ${error.error.message}`;
      } else if (error.statusText) {
        errorMessage += `: ${error.statusText}`;
      }
      
      // Afficher message d'erreur
      this.showPopupMessage({
        title: 'Erreur',
        message: errorMessage,
        image: 'assets/img/error.png',
        type: 'error'
      });
    }
  });
}

  // Méthode utilitaire pour marquer tous les champs comme "touched"
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Modifiez onCodeBarChange() :
  onCodeBarChange(): void {
    const codeBareValue = this.modifierProduitForm.get('codeBare')?.value || '';
    this.showBarcode = codeBareValue.length >= 1;
  }

  validateNumericInput(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  navigateBack() {
    this.router.navigate(['/produit']);
  }
  
}