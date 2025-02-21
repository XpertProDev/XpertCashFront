import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { map, Observable, startWith } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { Categorie } from '../MODELS/categorie.model';
import { CategorieService } from '../SERVICES/categorie.service';
import { ProduitService } from '../SERVICES/produit.service';
import { Produit } from '../MODELS/produit.model';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [ 
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatAutocompleteModule,
    MatInputModule,
    AsyncPipe,
    MatPaginatorModule,
  ],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  // Recherche et affichage des produits
  searchText: string = '';
  // Liste des produits récupérés depuis le backend
  tasks: any[] = [];


  ajouteProduitForm!: FormGroup;
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

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
        private fb: FormBuilder,
        private router: Router
  ) {}


  // Mise en évidence du texte recherché dans le tableau
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  filteredTasks(): any[] {
    const filtered = this.tasks.filter(task => 
      // task.nomCategory?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      task.nomProduit?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      task.codeProduit?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  
    const startIndex = this.currentPage * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }

  // Gestion du dropdown d'export
  showExportDropdown = false;
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) { 
    const target = event.target as HTMLElement;
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }

  // Méthodes pour télécharger en Excel, PDF et CSV
  downloadExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');
    XLSX.writeFile(workbook, 'Facture_des_produits.xlsx');
  }

  downloadPDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Liste des produits', 14, 22);
    
    const columns = ['Code', 'Photo', 'Nom du produit', 'Catégorie', 'Description', 'Prix', 'Prix achat', 'Quantité', 'Unité', 'Alert seuil', 'Date & heure'];
    const rows = this.tasks.map(task => [
      task.codeProduit, task.photo, task.nomProduit, task.nomCategory,
      task.description, task.prix, task.prixAchat, task.quantite, 
      task.nomUnite, task.alertSeuil, task.createdAt
    ]);

    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 30
    });

    doc.save('Facture_des_produits.pdf');
  }

  downloadCSV() {
    const headers = ['Code', 'Photo', 'Nom du produit', 'Catégorie', 'Description', 'Prix', 'Prix achat', 'Quantité', 'Unité', 'Alert seuil', 'Date & heure'];
    const rows = this.tasks.map(task => [
      task.codeProduit, task.photo, task.nomProduit, task.nomCategory,
      task.description, task.prix, task.prixAchat, task.quantite, 
      task.nomUnite, task.alertSeuil, task.createdAt
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Facture_des_produits.csv';
    link.click();
  }

  

  // Gestion du popup d'ajout de produit
  //showPopup: boolean = false;
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }

  // Pour l'autocomplete des catégories
  control = new FormControl('');
  categories: Categorie[] = [];
  filteredCategories!: Observable<Categorie[]>;

  // Objet produit utilisé dans le formulaire d'ajout
  produit = {
    nomProduit: '',
    description: '',
    prix: 0,
    prixAchat: 0,
    quantite: 0,
    alertSeuil: 0,
    uniteMesure: { id: 0, nomUnite: '' },
    category: { id: 0, nomCategory: '' },
    photo: ''
  };

  ngOnInit() {
    const token = localStorage.getItem('authToken') || '';
    if (token) {
      this.categorieService.getCategories(token).subscribe({
        next: (data: Categorie[]) => {
          this.categories = data;
          this.filteredCategories = this.control.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || ''))
          );
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des catégories :", err);
        }
      });
    } else {
      console.error("Aucun token trouvé, vérifiez la connexion !");
    }
    // Initialisation de l'autocomplete (au cas où)
    this.filteredCategories = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    // Charger la liste des produits de l'entreprise
    this.loadProduits();

    this.ajouteProduitForm = this.fb.group({
        nomProduit: ['', Validators.required],
        description: ['', Validators.required],
        prix: ['', [Validators.required]],
        prixAchat: ['', Validators.required],
        photo: ['', Validators.required],
        quantite: ['', Validators.required],
        alertSeuil: ['', Validators.required],
        uniteMesure: ['', Validators.required],
        category: ['', Validators.required]
    });

    this.ajouteCategoryForm = this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });

    // 🔹 Lier control au FormControl existant
    this.control = this.ajouteProduitForm.controls['category'] as FormControl;
  }

  private _filter(value: string | Categorie): Categorie[] {
    let filterValue: string;
    if (typeof value === 'string') {
      filterValue = value.toLowerCase().replace(/\s/g, '');
    } else if (value && typeof value === 'object' && value.nomCategory) {
      filterValue = value.nomCategory.toLowerCase().replace(/\s/g, '');
    } else {
      filterValue = '';
    }
    return this.categories.filter(category =>
      category.nomCategory.toLowerCase().replace(/\s/g, '').includes(filterValue)
    );
  }

  // Lorsqu'une catégorie est sélectionnée dans l'autocomplete
  onCategorySelected(event: any): void {
    const selectedCategory = event.option.value;
    this.produit.category = selectedCategory;
  }

  // Fonction d'affichage pour l'autocomplete
  displayFn(category: Categorie): string {
    return category ? category.nomCategory : '';
  }


  dataSource = new MatTableDataSource<any>(); // Gère les données avec pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  loadProduits(): void {
    this.produitService.getProduitsEntreprise().subscribe({
      next: (produits: Produit[]) => {
        console.log('Produits récupérés:', produits);
  
        this.tasks = produits.map(prod => {
          // Créer l'URL complète de l'image
          const fullImageUrl = `http://localhost:8080${prod.photo}`;
          console.log('Image URL:', fullImageUrl);  // Affiche l'URL de l'image dans la console
  
          return {
            ...prod,
            photo: fullImageUrl, // Passe l'URL complète
            nomCategory: prod.category?.nomCategory ?? 'Catégorie inconnue',
            nomUnite: prod.uniteMesure?.nomUnite
          };
        });
  
        this.dataSource.data = this.tasks;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });
  }

  // tasks: any[] = [];
  paginatedTasks: any[] = []; // Liste des produits affichés selon la pagination
  pageSize = 5; // Nombre de produits par page (modifiable)
  currentPage = 0; // Page actuelle


  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  
  // Ouvre la popup avec titre, message et type (success ou error)
  openPopupCategory2(title: string, message: string, type: 'success' | 'error'): void {
    this.popupTitle = title;
    this.popupMessage = message;
    this.popupType = type;
    // Choix de l'image en fonction du type
    if (type === 'success') {
      this.popupImage = 'assets/img/succcccc.png'; // Remplacez par le chemin de votre image de succès
    } else {
      this.popupImage = 'assets/img/error.png'; // Remplacez par le chemin de votre image d'erreur
    }
    this.showPopupCategory2 = true;
  }
  
  // Ouvre la popup avec titre, message et type (success ou error)
  openPopup2(title: string, message: string, type: 'success' | 'error'): void {
    this.popupTitle = title;
    this.popupMessage = message;
    this.popupType = type;
    // Choix de l'image en fonction du type
    if (type === 'success') {
      this.popupImage = 'assets/img/succcccc.png'; // Remplacez par le chemin de votre image de succès
    } else {
      this.popupImage = 'assets/img/error.png'; // Remplacez par le chemin de votre image d'erreur
    }
    this.showPopup2 = true;
  }

  // Ferme la popup et redirige si l'inscription a réussi
  closePopupCategory2(): void {
    this.showPopupCategory2 = false;
    if (this.popupType === 'success') {
      //this.router.navigate(['/produit']);
      this.showPopupCategory = false;
    }
  }

  // Ferme la popup et redirige si l'inscription a réussi
  closePopup2(): void {
    this.showPopup2 = false;
    if (this.popupType === 'success') {
      //this.router.navigate(['/produit']);
      this.showPopup = false;
    }
  }

  // Méthode pour sauvegarder un produit via le service
  submitForm(): void {
    if (this.ajouteProduitForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }

    const formValues = this.ajouteProduitForm.value;

    const produitToSave: any = {
      nomProduit: formValues.nomProduit,
      description: formValues.description,
      prix: formValues.prix,
      prixAchat: formValues.prixAchat,
      quantite: formValues.quantite,
      alertSeuil: formValues.alertSeuil,
      uniteMesure: { nomUnite: formValues.uniteMesure },
      category: {  
        id: formValues.category?.id, 
        nomCategory: formValues.category?.nomCategory
      },
      photo: '' // Photo
    };    

    this.produitService.ajouterProduit(produitToSave, this.selectedFile!).subscribe({
      next: (response: any) => {
        console.log('Produit ajouté avec succès : ', response);

        // Vérification basée sur l'existence d'un id ou autre propriété confirmant la création
        if (response && response.id) {
          // Utilisation d'un message par défaut si response.message n'est pas défini
          const successMessage = response.message || "Le produit a été créé avec succès.";
          this.openPopup2("Ajout de produit réussi !", successMessage, 'success');
        } else {
          this.errorMessage = response.error || "Erreur de l'ajout de produit, veuillez vérifier les champs.";
          this.openPopup2("Erreur de l'ajout de produit", this.errorMessage, 'error');
          return;
        }

        const produitFormate = {
          ...response,
          nomCategory: response.category?.nomCategory,
          nomUnite: response.uniteMesure?.nomUnite
        };

        // Ajouter le produit en haut de la liste
        this.tasks.unshift(produitFormate);

        // Mettre à jour Angular Material Table (dataSource)
        this.dataSource.data = [...this.tasks];
      },
      error: (error) => {
        console.log("Erreur complète :", error);
        console.log("Réponse API :", error.error);
        let message = "Une erreur est survenue lors de la création du produit.";

        if (error.status === 400 || error.status === 500) {
          if (typeof error.error === "string") {
            const match = error.error.match(/interpolatedMessage='([^']+)'/);
            message = match ? match[1] : error.error;
          } else if (error.error?.error) {
            message = error.error.error;
          }
        }

        this.openPopup2("❌ Oups, une erreur !", message, "error");
      }
    });
  }

  isPopupOpen = false;

  submitFormCategory(): void {
    if (this.ajouteCategoryForm.invalid) {
      this.errorMessageCategory = "Veuillez remplir correctement le formulaire.";
      return;
    }

    const categoryData = { nomCategory: this.ajouteCategoryForm.value.categoryName };

    this.categorieService.ajouterCategorie(categoryData).subscribe({
      next: (response: any) => {
        console.log('Categorie ajouté avec succès : ', response);

        if (response && response.id) {
          const successMessage = response.message || "Le category a été créé avec succès.";
          this.openPopupCategory2("Ajout de category réussi !", successMessage, 'success');
        }

        // console.log("Catégorie ajoutée avec succès :", response);
        // this.closePopupCategory();
        // this.ajouteCategoryForm.reset();
      },
      error: (error) => {
        console.log("Erreur complète :", error);
        console.log("Réponse API :", error.error);
        let message = "Une erreur est survenue lors de la création du produit.";

        if (error.status === 400 || error.status === 500) {
          if (typeof error.error === "string") {
            const match = error.error.match(/interpolatedMessage='([^']+)'/);
            message = match ? match[1] : error.error;
          } else if (error.error?.error) {
            message = error.error.error;
          }
        }

        this.openPopupCategory2("❌ Oups, une erreur !", message, "error");
      }
    });
  }

  openPopupCategory() {
    this.showPopupCategory = true;
  }

  closePopupCategory() {
    this.showPopupCategory = false;
    this.errorMessage = '';
  }

  // Getter pour faciliter l'accès aux contrôles dans le template
  get f() { return this.ajouteProduitForm.controls; }
  get c() { return this.ajouteCategoryForm.controls; }

  openImage(imageUrl: string): void {
    this.imagePopup = imageUrl;
  }
  
  closeImage(): void {
    this.imagePopup = null;
  }

    // Côte de mon image pour que l'utilisateur ajouter une photo

  urllink: string = "assets/img/appareil.jpg";
  selectedFile: File | null = null;
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
  
      // Lire le fichier et mettre à jour `urllink`
      const reader = new FileReader();
      reader.onload = (e) => {
        this.urllink = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
    
  

}
