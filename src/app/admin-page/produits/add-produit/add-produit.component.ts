import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
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
import imageCompression from 'browser-image-compression';
import { NgxBarcode6Module } from 'ngx-barcode6';

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
    // MatFormFieldModule,
    // MatInputModule,
    NgxBarcode6Module
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

  clearImage() {
    this.newPhotoUrl = null;
    this.imageFile = null;
  }

  async testImageCompression(file: File) {
    if (!file) {
      console.log('Aucun fichier sélectionné.');
      return;
    }
  
    console.log('Taille originale:', file.size / 1024, 'Ko');
  
    // Options de compression
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1000,
      useWebWorker: true,
    };
  
    try {
      const compressedFile = await imageCompression(file, options);
      console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
  
      // Vérifier si le fichier est bien en PNG/JPEG après compression
      if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
        console.error('Le fichier compressé n\'est pas un format supporté (PNG ou JPEG).');
        this.errorMessage = 'Erreur de compression : Le format de l\'image n\'est pas valide.';
        return;
      }
  
      // Lire l'image compressée et afficher l'aperçu
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newPhotoUrl = e.target?.result as string;
        console.log('Image compressée prête à être affichée !');
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error('Erreur lors de la compression:', error);
    }
  }

  goToProduit() {
    this.router.navigate(['/produit']);
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
  }
  

  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  selectedFile: File | null | undefined = null;
 
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
  
      // Vérification du format du fichier
      const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedFormats.includes(file.type)) {
        this.errorMessage = 'Le fichier doit être une image (JPG, PNG)';
        return;
      }
      this.selectedFile = file;
      this.imageFile = file;
  
      // Tester la compression
      this.testImageCompression(file);

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
    this.ajouteProduitForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prixVente: ['', Validators.required],
      prixAchat: ['', Validators.required],
      quantite: ['0'],
      seuilAlert: ['0'],
      description: [''],
      codeBare: ['', [Validators.minLength(8), Validators.maxLength(13)]],
      categorieId: [''],
      uniteId: [''],
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

    // Abonnement pour mettre à jour l'image par défaut en fonction du nom du produit
    this.ajouteProduitForm.get('nom')?.valueChanges.subscribe(name => {
      // Si aucun fichier n'a été sélectionné manuellement
      // ou si le fichier actuel est le fichier généré par défaut (nommé 'default.svg')
      if (!this.selectedFile || (this.selectedFile && this.selectedFile.name === 'default.svg')) {
        if (name && name.trim().length > 0) {
          this.newPhotoUrl = this.generateImageFromLetter(name.trim()[0]);
          this.selectedFile = this.dataURLtoFile(this.newPhotoUrl, 'default.svg');
          this.imageFile = this.selectedFile;
        } else {
          // Si le champ est vide, affichez l'image par défaut
          this.newPhotoUrl = this.urllink;
        }
      }
    });

    // Remplacer l'abonnement existant par :
    this.ajouteProduitForm.get('codeBare')?.valueChanges.subscribe(value => {
      this.showBarcode = value && value.length >= 3;
    });

    this.getFilteredStreetsBoutique();
    this.getBoutiqueName(); // Appel pour récupérer les noms des boutiques
    
  }

  generateImageFromLetter(letter: string): string {
    // Génération d'un SVG affichant la première lettre en majuscule
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="100" fill="#333">
          ${letter.toUpperCase()}
        </text>
      </svg>
    `;
    return 'data:image/svg+xml;base64,' + btoa(svg);
  }
    
  dataURLtoFile(dataurl: string, filename: string): File {
    const arr = dataurl.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch) {
      throw new Error('Format de dataURL invalide');
    }
    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  

  getBoutiqueName(): void {
    this.usersService.getUserInfo().subscribe(
      (userInfo) => {
        if (userInfo && userInfo.boutiques) {
          this.streetsBoutique = userInfo.boutiques.map((boutique: any) => boutique.nomBoutique);
          this.getFilteredStreetsBoutique();
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
    return this.optionsUnite.filter(optionNomUnite => 
      optionNomUnite.nom.toLowerCase().includes(filterValue)
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

          // Créer le nouvel objet catégorie
          const newCategory: Categorie = { 
            id: response.id, 
            nom: categoryData.nom 
          };

          // Ajouter à la liste des options
          this.options.push(newCategory);

          this.showCategoryCreation = false;

          // 1. Mettre à jour l'input d'autocomplete
          this.myControl.setValue(newCategory);

          // 2. Mettre à jour la valeur dans le formulaire principal
          this.ajouteProduitForm.get('categorieId')?.setValue(newCategory.id);

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

          this.showUniteCreation = false;

          // Ajouter à la liste
          this.optionsUnite.push(newUnity);
          // Force la mise à jour du filtre
          this.uniteControl.updateValueAndValidity();

          // 1. Mettre à jour l'input d'autocomplete
          this.uniteControl.setValue(newUnity);

          // 2. Mettre à jour le formulaire principal
          this.ajouteProduitForm.get('uniteId')?.setValue(newUnity.id);

          // 3. Mettre à jour les options filtrées
          // Corriger la structure du pipe RxJS
          // Corriger la structure du pipe RxJS
          this.filteredNomUnite = this.uniteControl.valueChanges.pipe(
            startWith(newUnity),
            map(value => typeof value === 'string' ? value : value?.nom),
            map((name: string) => name ? this._filterUnite(name) : this.optionsUnite.slice())
          );

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

  async onSubmit() {
    if (this.ajouteProduitForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }
  
    this.isLoading = true;
  
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
  
    try {
      let finalImage: File;
  
      // Si une image a été sélectionnée
      if (this.imageFile && this.imageFile.name !== 'default.svg') {
        console.log('Compression de l\'image en cours...');
  
        // Options de compression
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1000,
          useWebWorker: true,
        };
  
        const compressedFile = await imageCompression(this.imageFile, options);
        console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
  
        // Vérification du type MIME du fichier compressé
        if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
          this.errorMessage = 'Le fichier compressé n\'est pas un format valide (PNG ou JPEG).';
          this.isLoading = false;
          return;
        }
  
        // Changer le nom du fichier en fonction du type MIME
        const extension = compressedFile.type === 'image/png' ? '.png' : '.jpeg';
        finalImage = new File([compressedFile], this.imageFile.name.replace(/\..+$/, extension), {
          type: compressedFile.type, // Forcer le type MIME à PNG ou JPEG
          lastModified: Date.now()
        });
  
        console.log('Final Image:', finalImage);
      } else {
        // Si aucune image n'a été sélectionnée, utiliser l'image SVG générée
        const productName = produit.nom.trim()[0]; // Récupérer la première lettre du nom du produit
        finalImage = this.dataURLtoFile(this.generateImageFromLetter(productName), 'default.svg');
        console.log('Image par défaut utilisée:', finalImage);
      }
  
      // Inclure l'ID de la boutique sélectionnée dans les données
      const boutiqueId = this.boutiqueIdSelected;
      if (!boutiqueId) {
        this.errorMessage = "Veuillez sélectionner une boutique.";
        this.isLoading = false;
        return;
      }
  
      // Envoi du produit avec l'image compressée (JPEG/PNG) ou l'image SVG par défaut
      this.produitService.ajouterProduit(boutiqueId, produit, finalImage, addToStock, token)
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
  
    } catch (error) {
      console.error('Erreur lors de la compression:', error);
      this.errorMessage = 'Erreur lors de la compression de l\'image';
      this.isLoading = false;
    }
  }
  
  // Options de configuration pour le code barre

  showBarcode = false;

  // Modifiez onCodeBarChange() :
  onCodeBarChange(): void {
    const codeBareValue = this.ajouteProduitForm.get('codeBare')?.value || '';
    this.showBarcode = codeBareValue.length >= 1;
  }
  validateNumericInput(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); 
    }
  }


  controlBoutique = new FormControl('');
  streetsBoutique: string[] = [];
  filteredStreetsBoutique!: Observable<string[]>;

  getFilteredStreetsBoutique() {
    this.filteredStreetsBoutique = this.controlBoutique.valueChanges.pipe(
      startWith(''),
      map(value => this._filterBoutique(value || ''))
    );
  }

  private _filterBoutique(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streetsBoutique.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  showPopupBoutique = false;

  
  
  onFocusBoutiqueInput(): void {
    this.controlBoutique.setValue(''); // Réinitialise la valeur pour afficher toutes les options
  }

  boutiqueForm!: FormGroup;
  successMessage: string | null = null;
  
  // users: any[] = [];
  filteredUsers: any[] = [];
  
  indicatif: string = '';
  maxPhoneLength: number = 8;
  
  isAscending: boolean = true;
  searchTerm: string = '';


  initForm() {
    this.boutiqueForm = this.fb.group({
      nomBoutique: ['', Validators.required],
      emailBoutique: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      adresseBoutique: ['', Validators.required],
      telephoneBoutique: ['', [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
    });
  }
  
  updatePhoneValidator(longueur: number): void {
    this.boutiqueForm.controls['phone'].setValidators([
      Validators.required,
      Validators.pattern(`^\\+\\d{1,3}\\s?\\d{${longueur}}$`)
    ]);
    this.boutiqueForm.controls['phone'].updateValueAndValidity();
  }
   
  openPopupBoutique() {
    this.showPopup = true;
  }

  closePopupBoutique() {
    this.showPopup = false;
    this.resetForm();
  }

  private resetForm() {
    this.boutiqueForm.patchValue({
      nomBoutique: '',
      emailBoutique: '',
      adresseBoutique: '',
      telephoneBoutique: ''
    });
  
    this.boutiqueForm.markAsPristine();
    this.boutiqueForm.markAsUntouched();
    this.boutiqueForm.updateValueAndValidity();
  }

  onBoutiqueSelected(event: any): void {
    const selectedValue = event.option.value;
    this.controlBoutique.setValue(selectedValue); // Met à jour le FormControl avec la valeur sélectionnée
    console.log('Boutique sélectionnée :', selectedValue); // Debug pour vérifier la sélection

    // Trouver l'ID de la boutique sélectionnée
    const selectedBoutique = this.streetsBoutique.find(boutique => boutique === selectedValue);
    if (selectedBoutique) {
      const boutiqueIndex = this.streetsBoutique.indexOf(selectedBoutique);
      this.boutiqueIdSelected = boutiqueIndex + 1; // Exemple : supposez que l'index correspond à l'ID
    }
  }

  onSubmitBoutique(): void {}

  displayFnBoutique(boutique?: string): string {
    return boutique ? boutique : '';
  }

  boutiqueIdSelected: number | null = null; // Propriété pour stocker l'ID de la boutique sélectionnée

}
