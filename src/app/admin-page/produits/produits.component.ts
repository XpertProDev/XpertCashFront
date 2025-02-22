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
import autoTable from 'jspdf-autotable';
import { UsersService } from '../SERVICES/users.service';




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
  nomEntreprise: string = '';
  adresseEntreprise: string = '';
  logoEntreprise: string =''

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
        private fb: FormBuilder,
        private router: Router,
        private usersService: UsersService,
  ) {}


  // Mise en évidence du texte recherché dans le tableau
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  filteredTasks(): any[] {
    const sortedTasks = [...this.tasks] // Copie du tableau pour éviter de modifier l'original
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  
    const filtered = sortedTasks.filter(task => 
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

  getImageBase64(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = function () {
        reject(new Error('Erreur lors du chargement de l\'image'));
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }
  
  
  

  // Méthodes pour télécharger en Excel, PDF et CSV
  downloadExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');
    XLSX.writeFile(workbook, 'Facture_des_produits.xlsx');
  }

  downloadPDF() {
    if (!this.tasks || this.tasks.length === 0) {
      console.error("Aucun produit à afficher dans le PDF !");
      return;
    }
  
    const doc = new jsPDF();
  
    // Définir l'URL du logo (par défaut ou dynamique)
    const logoUrl = this.logoEntreprise
      ? `http://localhost:8080/logoUpload/${this.logoEntreprise}`
      : `http://localhost:8080/logoUpload/651.jpg`;
  
    // Récupérer les informations de l’entreprise
    const entreprise = this.nomEntreprise ? this.nomEntreprise : "Nom non disponible";
    const adress = this.adresseEntreprise ? this.adresseEntreprise : "Adresse non disponible";
  
    // Charger le logo avant de générer le PDF
    this.getImageBase64(logoUrl).then((logoBase64) => {
      // Ajouter le logo
      doc.addImage(logoBase64, 'PNG', 14, 5, 30, 30);
  
      // Ajouter les informations de l'entreprise
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(`Nom de l'entreprise: ${entreprise}`, 60, 20);
      doc.text('Liste des produits', 60, 30);
  
      // Ligne de séparation
      doc.setLineWidth(0.5);
      doc.line(14, 35, 195, 35);
  
      // Colonnes du tableau
      const columns = ['Code', 'Nom du produit', 'Catégorie', 'Description', 'Prix', 'Quantité', 'Date & heure'];
  
      // Récupérer uniquement les produits de la page actuelle
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      const pageTasks = this.tasks.slice(startIndex, endIndex);
  
      if (!Array.isArray(pageTasks) || pageTasks.length === 0) {
        console.error("Aucun produit trouvé sur cette page !");
        return;
      }
  
      // Mapper les données des produits
      const rows = pageTasks.map(task => [
        task.codeProduit, task.nomProduit, task.nomCategory,
        task.description, task.prix, task.quantite, task.createdAt
      ]);
  
      // Ajouter le tableau des produits
      autoTable(doc, {
        head: [columns],
        body: rows,
        startY: 40,
        theme: 'grid',
        headStyles: { fillColor: [100, 100, 255], textColor: [255, 255, 255], fontSize: 12 },
        bodyStyles: { fontSize: 10 }
      });
  
      // Récupérer la dernière position Y après le tableau
      const finalY = (doc as any).lastAutoTable?.finalY || 60;
  
      // Ajouter une ligne de séparation après le tableau
      doc.setLineWidth(0.5);
      doc.line(14, finalY + 5, 195, finalY + 5);
  
      // Ajouter un pied de page
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(`Adresse: ${adress}`, 14, finalY + 10);
      doc.text('Contact: 123-456-7890 | email@entreprise.com', 14, finalY + 15);
  
      // Sauvegarder le PDF
      doc.save('Facture_des_produits.pdf');
    }).catch((error) => {
      console.error("Erreur lors du chargement du logo :", error);
    });
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
    this.ajouteProduitForm.reset();

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
    photo: '',
    codebar: ''
  };

  ngOnInit() {
    const token = localStorage.getItem('authToken') || '';
    
    if (token) {
      // Charger les catégories initiales via le service
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
  
      // Souscrire à categories$ pour que la liste se mette à jour en temps réel
      this.categorieService.categories$.subscribe((updatedCategories: Categorie[]) => {
        this.categories = updatedCategories;
        console.log("Catégories mises à jour : ", this.categories);
        
        // Mettre à jour le filtre après ajout de catégorie
        this.filteredCategories = this.control.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || ''))
        );
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
  
    // Formulaire pour ajouter un produit
    this.ajouteProduitForm = this.fb.group({
      nomProduit: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', [Validators.required]],
      prixAchat: ['', Validators.required],
      photo: ['', Validators.required],
      quantite: ['', Validators.required],
      alertSeuil: ['', Validators.required],
      uniteMesure: ['', Validators.required],
      category: ['', Validators.required],
      codebar: ['', [Validators.minLength(8), Validators.maxLength(18)]]
      // codebar: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]],
    });
  
    // Formulaire pour ajouter une catégorie
    this.ajouteCategoryForm = this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  
    // 🔹 Lier control au FormControl existant
    this.control = this.ajouteProduitForm.controls['category'] as FormControl;
  
    // Récupérer les infos de l'utilisateur et le nom de l'entreprise
    this.usersService.getUserInfo().subscribe({
      next: (userInfo) => {
        this.nomEntreprise = userInfo.nomEntreprise; 
        this.adresseEntreprise = userInfo.adresseEntreprise;
        this.logoEntreprise = userInfo.logoEntreprise;
        console.log('infol\'entreprise:', this.nomEntreprise, this.adresseEntreprise, this.loadProduits);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération d\'info entreprise', err);
      }
    });
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
  
        this.tasks = produits
          .map(prod => {
            const fullImageUrl = `http://localhost:8080${prod.photo}`;
            console.log('Image URL:', fullImageUrl);
  
            // Nettoyer et transformer `createdAt` en un objet Date valide
            const createdAtFormatted = prod.createdAt.replace(' à ', 'T'); 
            const createdAtDate = new Date(createdAtFormatted); 
  
            return {
              ...prod,
              photo: fullImageUrl,
              nomCategory: prod.category?.nomCategory ?? 'Catégorie inconnue',
              nomUnite: prod.uniteMesure?.nomUnite,
              createdAtDate
            };
          })
          // **Trier du plus récent au plus ancien**
          .sort((a, b) => b.createdAtDate.getTime() - a.createdAtDate.getTime());
  
        this.dataSource.data = this.tasks;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });
  }

  paginatedTasks: any[] = []; 
  pageSize = 5; 
  currentPage = 0; 


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
      this.ajouteCategoryForm.reset();
      this.errorMessageCategory = '';
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

    if (this.ajouteProduitForm.value.codebar === '') {
      this.ajouteProduitForm.patchValue({ codebar: null });
    }
    
    const formValues = this.ajouteProduitForm.value;

    const produitToSave: any = {
      nomProduit: formValues.nomProduit,
      description: formValues.description,
      prix: formValues.prix,
      prixAchat: formValues.prixAchat,
      quantite: formValues.quantite,
      alertSeuil: formValues.alertSeuil,
      // codebar: this.produit.codebar && this.produit.codebar.trim() !== '' ? this.produit.codebar : 'GEN-' + Date.now(),
      // codebar: formValues.codebar && formValues.codebar.trim() !== '' ? formValues.codebar : null,
      codebar: formValues.codebar,      
      uniteMesure: { nomUnite: formValues.uniteMesure },
      category: {  
        id: formValues.category?.id, 
        nomCategory: formValues.category?.nomCategory
      },
      photo: formValues.photo
    };    

    this.produitService.ajouterProduit(produitToSave, this.selectedFile!).subscribe({
      next: (response: any) => {
        console.log('Produit ajouté avec succès : ', response);
        if (response && response.id) {
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
          nomUnite: response.uniteMesure?.nomUnite,
          photo: response.photo ? `http://localhost:8080${response.photo}` : 'assets/img/lait.jpeg'
        };
      
        // Ajouter le produit en haut de la liste
        this.tasks.unshift(produitFormate);
      
        // Mettre à jour Angular Material Table (dataSource)
        this.dataSource.data = [...this.tasks];
      
        // Réinitialiser le formulaire et la sélection de photo
        this.ajouteProduitForm.reset();
        this.urllink = "assets/img/appareil.jpg"; // Remet l'image par défaut
        this.selectedFile = null;
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

  // Contrôle de l'affichage du pop-up
  showProductDetail: boolean = false;
  selectedProduct: any = null;
    
  openProductDetail(productId: string) {
    // Rechercher le produit dans la liste
    this.selectedProduct = this.tasks.find(task => task.codeProduit === productId);
    if (this.selectedProduct) {
      this.showProductDetail = true;
    }
  }

  // Méthode pour fermer le pop-up
  closeProductDetail() {
    this.showProductDetail = false;
    this.selectedProduct = null;
  }
  

}
