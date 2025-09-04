import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from '../SERVICES/boutique-service';
import { Boutique } from '../MODELS/boutique-model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Produit } from '../MODELS/produit.model';
import { Users } from '../MODELS/utilisateur.model';
import { lastValueFrom, take } from 'rxjs';
import { UsersService } from '../SERVICES/users.service';
import { AssignerVendeurRequest } from '../MODELS/AssignerVendeurRequest';



@Component({
  selector: 'app-detail-boutique',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './detail-boutique.component.html',
  styleUrl: './detail-boutique.component.scss'
})
export class DetailBoutiqueComponent implements OnInit {
  isModificationFormVisible = false;
  boutique: Boutique | null = null;
  isLoading = false;
  errorMessage: string | null = null;
  boutiqueForm!: FormGroup;
  successMessage: string | null = null;
  errorMessageApi: string | null = null;
  successMessageTimeout: any;
  updateTimeout: any;
  isEditing = false;
  showTransferModal = false;
  allBoutiques: Boutique[] = [];
  filteredBoutiques: Boutique[] = [];
  searchTerm = '';
  searchTerm1 = '';
  showCopyModal = false;
  copySearchTerm = '';
  filteredCopyBoutiques: Boutique[] = [];
  selectedImageUrl: string | null = null;
  showImageModal = false;
  selectedProductIds: number[] = [];
  copyWarningMessage: string | null = null;
  deleteWarningMessage: string | null = null;
  showCopyWarningModal = false;
  showDeleteWarningModal = false;
  photo: string = '';
  private apiUrl = environment.imgUrl;

  control = new FormControl();

  isUpdating = false;
  isUpdating_boutique = false;
  showConfirmationModal = false;
  confirmationTitle = '';
  confirmationMessage = '';
  pendingStatusChange: boolean | null = null;
  private checkboxRef?: HTMLInputElement;
  // productsInBoutique: any[] = [];
  productsInBoutique: Produit[] = [];
  isLoadingProducts = false;
  imgUrl = environment.imgUrl;

  isCopying = false;
  copySuccessMessage: string | null = null;
  copyErrorMessage: string | null = null;
  selectedCopyBoutique: Boutique | null = null;

  showConfirmationModalB = false;
  isDeletingB = false;

  showDeleteModal = false;
  deleteMessage = '';
  isDeleting = false;
  listeVendeurs: Users[] = [];
  boutiqueId!: number;
  imageActuelle = '';

  selectedFilters: any[] = [];
  showFilterDropdown = false;
  searchText: string = '';
  filteredProducts: Produit[] = [];

  showUserList: boolean = false;
  allUsers: Users[] = [];
  selectedUserIds: number[] = [];

  currentPage = 0;
  pageSize = 20;
  totalPages = 0;
  isLoadingMore = false;
  allProductsLoaded = false;
  totalProductsCount = 0;
  
  @ViewChild('tableScrollContainer') tableScrollContainer!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(
    private route: ActivatedRoute,
    private boutiqueService: BoutiqueService,
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private usersService: UsersService,
  ) {

  }

  ngOnInit(): void {
    this.initForm();
    this.loadBoutique();
    this.loadAllBoutiques();
    this.boutiqueForm.disable();
    this.loadAllVendeursBoutique();

    // Dans ngOnInit ou là où vous appelez loadProductsInBoutique pour la première fois
  if (this.boutique) {
    this.loadProductsInBoutique(this.boutique.id);
  }
  }

  private initForm(): void {
    this.boutiqueForm = this.fb.group({
      nomBoutique: ['', Validators.required],
      adresse: [''],
      email: [''],
      telephone: ['', [Validators.pattern(/^\d{8,15}$/)]],
    });
  }

  private loadBoutique(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (!id) {
      this.errorMessage = 'ID de boutique invalide';
      this.isLoading = false;
      return;
    }
     this.boutiqueId = +id;

    this.boutiqueService.getBoutiqueById(+id).subscribe({
      next: (boutique) => {
        this.boutique = boutique;
        this.boutiqueForm.patchValue({
          nomBoutique: boutique.nomBoutique,
          adresse: boutique.adresse,
          email: boutique.email,
          telephone: boutique.telephone
        });
        this.isLoading = false;
        
        this.loadProductsInBoutique(boutique.id);
        // this.loadAllVendeursBoutique();

        // Mise à jour du formulaire
        this.boutiqueForm.patchValue({
          nomBoutique: boutique.nomBoutique,
          adresse: boutique.adresse,
          email: boutique.email,
          telephone: boutique.telephone
        });

      },
      error: (err) => {
        this.errorMessage = 'Échec du chargement des données';
        this.isLoading = false;
      }
    });
  }

  getStatusText(): string {
    return this.boutique?.actif ? 'Actif' : 'Inactif';
  }
 
  getStatusColor(): string {
      return this.boutique?.actif ? '#008000' : '#ff0000';
  }

  // Méthodes pour gérer le popup de copie
  toggleCopyModal(): void {
    // Vérifier si des produits sont sélectionnés
    if (this.selectedProductIds.length === 0) {
      this.showCopyWarningModal = true;
      this.copyWarningMessage = "Veuillez sélectionner au moins un produit à copier.";
      
      // Effacer le message après 3 secondes
      setTimeout(() => this.copyWarningMessage = null, 3000);
      return;
    }

    // Fermer le modal de transfert si ouvert
    if (this.showTransferModal) {
      this.showTransferModal = false;
    }
    
    this.showCopyModal = !this.showCopyModal;
    if (this.showCopyModal) {
      this.loadAllBoutiques();
      this.copySearchTerm = '';
      this.filterCopyBoutiques();
    }
  }

  // Sélectionner une boutique pour la copie
  // selectCopyBoutique(boutique: Boutique): void {
  //     console.log('Boutique sélectionnée pour la copie :', boutique);
      
  //     this.closeCopyModal();
      
  //     // Afficher un message de succès
  //     this.successMessage = `Produits copiés vers ${boutique.nomBoutique} avec succès!`;
  //     setTimeout(() => this.successMessage = null, 5000);
  // }

  selectCopyBoutique(boutique: Boutique): void {
    // if (!boutique.actif) {
    //     const confirmCopy = confirm('Cette boutique est désactivée. Êtes-vous sûr de vouloir copier les produits vers cette boutique ?');
    //     if (!confirmCopy) return;
    // }
    this.selectedCopyBoutique = boutique;
    this.confirmCopyProducts();
  }

async confirmCopyProducts(): Promise<void> {
  if (!this.boutique || !this.selectedCopyBoutique) return;

  this.isCopying = true;
  this.copyErrorMessage = null;
  this.copySuccessMessage = null;

  try {
    const detailsCopie = {
      boutiqueSourceId: this.boutique.id,
      boutiqueDestinationId: this.selectedCopyBoutique.id,
      toutCopier: this.selectedProductIds.length === 0,
      produitIds: this.selectedProductIds.length > 0 ? this.selectedProductIds : undefined
    };

    const response = await this.boutiqueService.copierProduits(detailsCopie).toPromise();
    
    // Gestion de la réponse
    if (response && response.success !== undefined) {
      if (response.success) {
        this.copySuccessMessage = response.message; // Message de succès
      } else {
        // Assigner le message d'erreur lorsque success est false
        this.copyErrorMessage = response.message; // Correction ici
      }
    } else if (response && response.message) {
      // Cas de fallback - supposons que c'est un succès
      this.copySuccessMessage = response.message;
    } else {
      this.copyErrorMessage = 'Réponse inattendue du serveur';
    }

    this.selectedProductIds = [];
  } catch (error: any) {
    console.error('Erreur copie', error);
    
    // Gestion spécifique des différents formats d'erreur
    if (error.error && error.error.message) {
      this.copyErrorMessage = error.error.message;
    } else if (error.message) {
      this.copyErrorMessage = error.message;
    } else if (typeof error === 'string') {
      this.copyErrorMessage = error;
    } else {
      this.copyErrorMessage = 'Erreur lors de la copie des produits';
    }
  } finally {
    this.isCopying = false;
    this.closeCopyModal();
    
    // Effacer les messages après 8 secondes
    setTimeout(() => {
      this.copySuccessMessage = null;
      this.copyErrorMessage = null;
    }, 8000);
  }
}

  // Filtrer les boutiques pour la copie
  filterCopyBoutiques(): void {
      if (!this.copySearchTerm) {
          this.filteredCopyBoutiques = [...this.allBoutiques];
          return;
      }
      
      const term = this.copySearchTerm.toLowerCase();
      this.filteredCopyBoutiques = this.allBoutiques.filter(b => 
          b.nomBoutique.toLowerCase().includes(term)
      );
  }

  closeCopyModal(): void {
      this.showCopyModal = false;
      this.copySearchTerm = '';
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    
    if (this.isEditing) {
      this.boutiqueForm.enable();
    } else {
      this.boutiqueForm.disable();
      // Réinitialiser le formulaire avec les valeurs originales
      if (this.boutique) {
        this.boutiqueForm.patchValue({
          nomBoutique: this.boutique.nomBoutique,
          adresse: this.boutique.adresse,
          email: this.boutique.email,
          telephone: this.boutique.telephone
        });
      }
    }
  }

  goToBoutique() {
    if (this.isEditing) {
      this.cancelEditing();
    } else {
      this.router.navigate(['/boutique']);
    }
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.boutiqueForm.disable();
    this.loadBoutique();
  }

  getLoadingMessage(): string {
    if (this.isLoading) return 'Chargement en cours...';
    if (this.isUpdating) return 'Mise à jour du statut...';
    if (this.isUpdating_boutique) return 'Mise à jour des informations...';
    return 'Traitement en cours...';
  }

  // Modifiez la méthode existante
  toggleBoutiqueStatus(event: Event): void {
    event.preventDefault();
    this.checkboxRef = event.target as HTMLInputElement;
    const newStatus = this.checkboxRef.checked;
    this.pendingStatusChange = newStatus;

    this.confirmationTitle = newStatus 
      ? 'Activation de la boutique' 
      : 'Désactivation de la boutique';

    this.confirmationMessage = newStatus
      ? 'Êtes-vous sûr de vouloir activer cette boutique ? Les utilisateurs pourront y accéder.'
      : 'Êtes-vous sûr de vouloir désactiver cette boutique ? L\'accès sera bloqué.';

    this.showConfirmationModal = true;
  }

  // Ajoutez ces nouvelles méthodes
  cancelAction(): void {
    this.showConfirmationModal = false;
    if (this.checkboxRef) {
      this.checkboxRef.checked = !this.checkboxRef.checked;
    }
    this.pendingStatusChange = null;
  }

  handleStatusChange(): void {
      if (!this.boutique || this.pendingStatusChange === null) return;

      this.isUpdating = true;
      this.showConfirmationModal = false;

      // Démarrer un timer pour le délai minimum de 3 secondes
      const minDelay = 3000;
      const startTime = Date.now();

      const operation$ = this.pendingStatusChange 
          ? this.boutiqueService.activerBoutique(this.boutique.id)
          : this.boutiqueService.desactiverBoutique(this.boutique.id);

      operation$.subscribe({
          next: () => {
              const elapsed = Date.now() - startTime;
              const remainingDelay = Math.max(minDelay - elapsed, 0);
              
              // Attendre le temps restant pour compléter les 3 secondes
              setTimeout(() => {
                  this.loadBoutique();
                  this.isUpdating = false;
              }, remainingDelay);
          },
          error: (err) => {
              const elapsed = Date.now() - startTime;
              const remainingDelay = Math.max(minDelay - elapsed, 0);
              
              setTimeout(() => {
                  console.error(err);
                  this.isUpdating = false;
                  if (this.checkboxRef) {
                      this.checkboxRef.checked = !this.pendingStatusChange;
                  }
                  this.showErrorMessage();
              }, remainingDelay);
          }
      });
  }

  private showSuccessMessage(action: string): void {
    // Implémenter une notification ou message temporaire
    alert(`Boutique ${action} avec succès !`);
  }

  private showErrorMessage(): void {
    alert('Échec de la mise à jour du statut');
  }

  async onSubmitBoutique(): Promise<void> {
    if (this.boutiqueForm.invalid || !this.boutique) return;

    this.isLoading = true;
    this.errorMessage = null;
    this.successMessage = null;

    try {
      // Délai minimum de 2 secondes pour le loading
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Appel au service
      const response = await this.boutiqueService.updateBoutique(
        this.boutique.id, 
        this.boutiqueForm.value
      ).toPromise();

      // Mettre à jour la boutique locale
      if (this.boutique) {
        this.boutique = { 
          ...this.boutique, 
          ...this.boutiqueForm.value 
        };
      }

      this.successMessage = 'Boutique mise à jour avec succès !';
      
      // Désactiver le mode édition après succès
      this.toggleEditing();
      
      // Effacer le message après 5 secondes
      setTimeout(() => this.successMessage = null, 5000);

    } catch (err: any) {
      console.error('Update error:', err);
      this.errorMessage = err.error?.message || 'Erreur lors de la mise à jour';
    } finally {
      this.isLoading = false;
    }
  }

  toggleModificationForm() {
    this.isModificationFormVisible = !this.isModificationFormVisible;
    this.cd.detectChanges(); // Force la mise à jour du DOM
  }

  navigateBack(){
    this.router.navigate(['/boutique']);
  }

  toggleTransferModal(): void {
    // Fermer le modal de copie si ouvert
    if (this.showCopyModal) {
        this.showCopyModal = false;
    }
    
    this.showTransferModal = !this.showTransferModal;
    if (this.showTransferModal) {
        this.loadAllBoutiques();
        this.searchTerm = '';
        this.filterBoutiques();
    }
  }

  toggleCopierModal(): void {
    this.showTransferModal = !this.showTransferModal;
    if (this.showTransferModal) {
        this.loadAllBoutiques();
    }
  }

  closeTransferModal(): void {
    this.showTransferModal = false;
    this.searchTerm = '';
  }

  // Ajoute ça dans DetailBoutiqueComponent (private helper)
  // private normalizeBoutique(b: any): Boutique {
  //   return {
  //     id: b.id,
  //     nomBoutique: b.nomBoutique ?? '',
  //     telephone: b.telephone ?? '',
  //     email: b.email ?? '',
  //     adresse: b.adresse ?? '',
  //     caisseId: b.caisseId ?? null,
  //     // propriétés manquantes : on fournit des valeurs par défaut
  //     actif: typeof b.actif === 'boolean' ? b.actif : false,
  //     type: b.type ?? 'BOUTIQUE',
  //     typeBoutique: b.typeBoutique ?? 'BOUTIQUE',
  //     // si ton interface Boutique contient d'autres champs, les ajouter ici aussi
  //   } as Boutique;
  // }

  // Charger toutes les boutiques (sauf la boutique actuelle)
  // loadAllBoutiques(): void {
  //   this.usersService.getUserInfo().pipe(take(1)).subscribe({
  //     next: (user) => {
  //       const mapAndFilter = (list: any[]) => {
  //         const arr = (list || []).map(b => this.normalizeBoutique(b));
  //         // Exclure la boutique courante si nécessaire
  //         this.allBoutiques = arr.filter(b => b.id !== this.boutique?.id);
  //         this.filteredCopyBoutiques = [...this.allBoutiques];
  //         this.filteredBoutiques = [...this.allBoutiques];
  //       };

  //       if (user && user.roleType === 'VENDEUR') {
  //         // vendeur : ne charger que ses boutiques (depuis user.boutiques)
  //         mapAndFilter(user.boutiques || []);
  //       } else {
  //         // admin/manager : charger toutes les boutiques de l'entreprise
  //         this.boutiqueService.getBoutiquesByEntreprise().subscribe({
  //           next: (boutiques) => mapAndFilter(boutiques),
  //           error: (err) => {
  //             console.error('Erreur lors du chargement des boutiques', err);
  //             this.allBoutiques = [];
  //             this.filteredCopyBoutiques = [];
  //             this.filteredBoutiques = [];
  //           }
  //         });
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Erreur récupération user', err);
  //       // fallback : charger toutes les boutiques
  //       this.boutiqueService.getBoutiquesByEntreprise().subscribe({
  //         next: (boutiques) => {
  //           this.allBoutiques = (boutiques || []).map(b => this.normalizeBoutique(b));
  //           this.filteredCopyBoutiques = [...this.allBoutiques];
  //           this.filteredBoutiques = [...this.allBoutiques];
  //         },
  //         error: () => {
  //           this.allBoutiques = [];
  //           this.filteredCopyBoutiques = [];
  //           this.filteredBoutiques = [];
  //         }
  //       });
  //     }
  //   });
  // }

  loadAllBoutiques(): void {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
        next: (boutiques) => {
            this.allBoutiques = boutiques.filter(b => b.id !== this.boutique?.id);
            
            // Initialiser les deux listes filtrées
            this.filteredCopyBoutiques = [...this.allBoutiques];
            this.filteredBoutiques = [...this.allBoutiques];
        },
        error: (err) => {
            console.error('Erreur lors du chargement des boutiques', err);
        }
    });
  }

  filterBoutiques(): void {
    if (!this.searchTerm) {
        this.filteredBoutiques = [...this.allBoutiques];
        return;
    }
    
    const term = this.searchTerm.toLowerCase();
    this.filteredBoutiques = this.allBoutiques.filter(b => 
        b.nomBoutique.toLowerCase().includes(term)
    );
  }

  // Sélectionner une boutique pour le transfert
  selectBoutique(boutique: Boutique): void {
    console.log('Boutique sélectionnée pour le transfert :', boutique);
    // Ici vous pouvez implémenter la logique de transfert
    
    // Fermer le modal après sélection
    this.closeTransferModal();
  }

  // loadProductsInBoutique(boutiqueId: number): void {
  //   this.isLoadingProducts = true;
  //   this.boutiqueService.getProductsByBoutiqueId(boutiqueId).subscribe({
  //     next: (produits) => {
  //       this.productsInBoutique = produits.map(produit => ({
  //         ...produit,
  //         photoUrl: produit.photo ? `${this.imgUrl}${produit.photo}` : this.generateInitialImage(produit.nom.charAt(0))
  //       }));
  //       this.isLoadingProducts = false;
  //     },
  //     error: (err) => {
  //       console.error('Erreur chargement produits', err);
  //       this.isLoadingProducts = false;
  //     }
  //   });
  // }

  loadProductsInBoutique(boutiqueId: number, loadMore: boolean = false): void {
    if (loadMore) {
      this.isLoadingMore = true;
    } else {
      this.isLoadingProducts = true;
      this.currentPage = 0;
      this.allProductsLoaded = false;
    }

    this.boutiqueService.getProduitsBoutiquePaginated(boutiqueId, this.currentPage, this.pageSize)
      .subscribe({
        next: (response) => {
          const newProducts = response.content.map(produit => ({
            ...produit,
            photoUrl: produit.photo ? `${this.imgUrl}${produit.photo}` : this.generateInitialImage(produit.nom.charAt(0)),
            nomCategorie: produit.categorie?.nom || '',
            nomUnite: produit.uniteDeMesure?.nom || '',
          }));

          if (loadMore) {
            this.productsInBoutique = [...this.productsInBoutique, ...newProducts];
          } else {
            this.productsInBoutique = newProducts;
            // Mettre à jour le compteur total avec la valeur de l'API
            this.totalProductsCount = response.totalElements;
          }

          this.filteredProducts = [...this.productsInBoutique];
          this.totalPages = response.totalPages;
          
          this.isLoadingProducts = false;
          this.isLoadingMore = false;
          this.allProductsLoaded = this.currentPage >= response.totalPages - 1;
        },
        error: (err) => {
          console.error('Erreur chargement produits', err);
          this.isLoadingProducts = false;
          this.isLoadingMore = false;
        }
      });
  }

  loadMoreProducts(): void {
    if (this.isLoadingMore || this.allProductsLoaded || !this.boutique) return;
    
    this.isLoadingMore = true;
    this.currentPage++;
    
    this.boutiqueService.getProduitsBoutiquePaginated(this.boutique.id, this.currentPage, this.pageSize)
      .subscribe({
        next: (response) => {
          const newProducts = response.content.map(produit => ({
            ...produit,
            photoUrl: produit.photo ? `${this.imgUrl}${produit.photo}` : this.generateInitialImage(produit.nom.charAt(0)),
            nomCategorie: produit.categorie?.nom || '',
            nomUnite: produit.uniteDeMesure?.nom || '',
          }));

          this.productsInBoutique = [...this.productsInBoutique, ...newProducts];
          this.filteredProducts = [...this.productsInBoutique];
          this.totalPages = response.totalPages;
          
          // Délai de 3 secondes avant de masquer le loading
          setTimeout(() => {
            this.isLoadingMore = false;
          }, 2000);
          
          this.allProductsLoaded = this.currentPage >= response.totalPages - 1;
        },
        error: (err) => {
          console.error('Erreur chargement produits supplémentaires', err);
          // Délai de 3 secondes même en cas d'erreur
          setTimeout(() => {
            this.isLoadingMore = false;
          }, 2000);
          this.currentPage--; // Revenir à la page précédente en cas d'erreur
        }
      });
  }
  
 onTableScroll(event: any): void {
  if (this.allProductsLoaded || this.isLoadingMore || !this.boutique) return;

  const threshold = 100;
  const container = event.target;
  const position = container.scrollTop + container.offsetHeight;
  const height = container.scrollHeight;

  if (position > height - threshold) {
    this.loadMoreProducts();
  }
}

  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  handleImageError(event: Event, product: Produit): void {
    const img = event.target as HTMLImageElement;
    img.src = this.generateInitialImage(product.nom.charAt(0));
    img.onerror = null; // Empêcher les boucles d'erreur
  }

  // Méthode pour générer une image avec initiale
  generateInitialImage(letter: string): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="100%" height="100%" fill="#0671e4ac"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="100" fill="#fff">
          ${letter.toUpperCase()}
        </text> 
      </svg>
    `;
    return 'data:image/svg+xml;base64,' + btoa(svg);
  }

  // Implémentez les méthodes manquantes
  toggleSelectAll(event: Event): void {
    if (!this.boutique?.actif) return;
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedProductIds = this.productsInBoutique.map(p => p.id);
    } else {
      this.selectedProductIds = [];
    }
  }

  isProductSelected(id: number): boolean {
    return this.selectedProductIds.includes(id);
  }
  
  openImageModal(imageUrl: string | undefined): void {
  if (!this.boutique?.actif) return;
  if (imageUrl) {
    this.selectedImageUrl = imageUrl;
    this.showImageModal = true;
  } else {
    // Gérer le cas où l'URL est undefined
    console.warn("Aucune URL d'image fournie");
  }
}

  closeImageModal(): void {
    this.showImageModal = false;
    this.selectedImageUrl = null;
  }

  // Dans la classe DetailBoutiqueComponent
  toggleProductSelection(productId: number, event: Event): void {
    if (!this.boutique?.actif) return;
    event.stopPropagation();
    const index = this.selectedProductIds.indexOf(productId);
    
    if (index === -1) {
      this.selectedProductIds.push(productId);
    } else {
      this.selectedProductIds.splice(index, 1);
    }
  }




loadAllVendeursBoutique(): void {
  if (!this.boutiqueId) {
    this.errorMessage = "Identifiant boutique manquant";
    console.log('Erreur : identifiant boutique manquant');
    return;
  }

  this.boutiqueService.getVendeursDeBoutique(this.boutiqueId).subscribe({
    next: (response) => {
      // Loguer la réponse brute pour vérifier son format
      console.log('Réponse brute de l\'API :', response);

      const vendeurs = response; // Si la réponse contient déjà un tableau de vendeurs
      
      console.log(`Liste des vendeurs récupérée (${vendeurs.length}) :`, vendeurs);

      const timestamp = new Date().getTime(); 

      // Map des vendeurs pour ajouter l'URL complète de la photo et la date d'affectation
      this.listeVendeurs = vendeurs.map((vendeur: { 
        photo: string, 
        nomComplet: string, 
        email: string, 
        phone: string, 
        pays: string,
        assignedAt: string // Nouvelle propriété
      }) => {
        const fullImageUrl = (vendeur.photo && vendeur.photo !== 'null' && vendeur.photo !== 'undefined')
          ? `${this.apiUrl}${vendeur.photo}?t=${timestamp}`
          : 'assets/img/profil.png'; // Photo par défaut si pas d'image

        // Formatage de la date d'affectation si nécessaire (par exemple : "YYYY-MM-DD HH:mm")
        const assignedAtFormatted = new Date(vendeur.assignedAt).toLocaleString();

        return {
          ...vendeur,
          photo: fullImageUrl,
          assignedAt: assignedAtFormatted // Ajout de la date formatée
        };
      });

      // Réinitialiser le message d'erreur
      this.errorMessage = '';
    },
    error: (err) => {
      console.error('Erreur lors du chargement des vendeurs', err);
      this.listeVendeurs = [];
      this.errorMessage = "Erreur lors du chargement des vendeurs.";
    }
  });
}






ouvrirImage(photoUrl: string): void {
  this.imageActuelle = photoUrl || 'assets/defaultProfile/profil.png';
  this.showImageModal = true;
}

fermerImage(): void {
  this.showImageModal = false;
}

  ajouterVendeur(): void {
    // Rediriger vers une page d'ajout ou ouvrir un modal
    console.log('Ajouter un vendeur cliqué');
  }

  clearSearch(): void {}

  deleteSelectedProducts(): void {
    if (this.selectedProductIds.length === 0) {
      this.deleteWarningMessage = "Veuillez sélectionner au moins un produit à supprimer.";
      this.showDeleteWarningModal = true;
      return;
    }

    this.deleteMessage = `Êtes-vous sûr de vouloir supprimer les ${this.selectedProductIds.length} produit(s) sélectionné(s) ?`;
    this.showDeleteModal = true;
  }

  // Confirmation de suppression
async confirmDelete(): Promise<void> {
  this.showDeleteModal = false;
  this.isDeleting = true;

  const corbeilleIds: number[] = [];
  const errors: string[] = [];

  for (const id of this.selectedProductIds) {
    try {
      const response = await lastValueFrom(this.boutiqueService.mettreEnCorbeille(id));
      
      if (response.status === 'success') {
        corbeilleIds.push(id);
      } else {
        errors.push(`Réponse inattendue: ${response.message}`);
      }
    } catch (error: any) {
      errors.push(error.message || 'Erreur inconnue');
    }
  }

 this.isDeleting = false;

  if (corbeilleIds.length > 0) {
    this.successMessage = `${corbeilleIds.length} produit(s) mis en corbeille avec succès.`;

    // ✅ Mise à jour locale : on filtre les produits supprimés
    this.productsInBoutique = this.productsInBoutique.filter(
      p => !corbeilleIds.includes(p.id)
    );

    this.filteredProducts = this.filteredProducts.filter(
      p => !corbeilleIds.includes(p.id)
    );

    this.selectedProductIds = [];
  }
  
  if (errors.length > 0) {
    this.errorMessage = `${errors.join(', ')}`;
  }

  setTimeout(() => {
    this.successMessage = null;
    this.errorMessage = null;
  }, 5000);
}

  cancelDelete(): void {
    this.showDeleteModal = false;
  }

  // Ajouter ces méthodes dans la classe
  toggleFilterDropdown(): void {
    this.showFilterDropdown = !this.showFilterDropdown;
  }

  applyFilters(): void {
    let filtered = [...this.productsInBoutique]; // Utilisez la source originale
    const searchLower = this.searchText.toLowerCase().trim();

    if (this.searchText) {
      if (this.selectedFilters.length > 0) {
        filtered = filtered.filter(product => {
          return this.selectedFilters.some(filter => {
            const key = filter.type as keyof Produit;
            const value = product[key]?.toString().toLowerCase() || '';
            return value.includes(searchLower);
          });
        });
      } else {
        // Recherche dans toutes les propriétés
        filtered = filtered.filter(product => 
          Object.values(product).some(val => 
            val?.toString().toLowerCase().includes(searchLower)
        ));
      }
    }

    this.filteredProducts = filtered;
  }

  addFilter(filter: any): void {
    if (this.isFilterSelected(filter.type)) {
      this.selectedFilters = [];
    } else {
      this.selectedFilters = [filter];
    }
    this.showFilterDropdown = false;
    this.applyFilters();
    
    setTimeout(() => {
      if (this.searchInput?.nativeElement) {
        this.searchInput.nativeElement.focus();
      }
    }, 0);
  }

  isFilterSelected(filterType: string): boolean {
    return this.selectedFilters.some(f => f.type === filterType);
  }

  focusSearchInput(): void {
    if (this.searchInput?.nativeElement) {
      this.searchInput.nativeElement.focus();
    }
  }

  removeFilter(filter: any): void {
    this.selectedFilters = this.selectedFilters.filter(f => f !== filter);
    this.applyFilters();
  }

  getSearchPlaceholder(): string {
    if (this.selectedFilters.length > 0) {
      return `par ${this.selectedFilters[0].label.toLowerCase()}...`;
    }
    return "Rechercher...";
  }

  resetFilters(): void {
    this.selectedFilters = [];
    this.searchText = '';
    this.filteredProducts = [...this.productsInBoutique]; // Réinitialisez à la liste complète
    this.showFilterDropdown = false;
  }

  deleteBoutique() {
    if (!this.boutique) {
      console.error("La boutique n'est pas disponible.");
      return;
    }

    this.showConfirmationModalB = true;
  }

  async confirmDeleteB(): Promise<void> {
    this.showConfirmationModalB = false
    if (!this.boutique) return;

    this.showConfirmationModal = false;
    this.isDeletingB = true;

    this.errorMessage = null;
    this.successMessage = null;

    try {
      const response = await lastValueFrom(this.boutiqueService.deleteBoutique(this.boutique.id));
      this.successMessage = 'Boutique supprimée avec succès.';
      this.router.navigate(['/boutique']);
    } catch (err: any) {
      let message = err?.error?.error || 'Erreur lors de la suppression.';
      const prefix = "Une erreur est survenue : ";
      if (message.startsWith(prefix)) {
        message = message.substring(prefix.length);
      }
      this.errorMessage = message;
    } finally {
      this.isDeletingB = false;
      setTimeout(() => {
        this.errorMessage = null;
        this.successMessage = null;
      }, 5000);
    }
  }

  toggleUserList(): void {
      this.showUserList = !this.showUserList;
      if (this.showUserList) {
          this.loadAllUsersOfEntreprise();
      }
  }

  loadAllUsersOfEntreprise(): void {
    this.usersService.getUserInfo().subscribe({
        next: (userData) => {
            if (userData && userData.id) {
                const entrepriseId = userData.id;
                const token = this.usersService.getToken();
                const connectedUserId = token ? this.usersService.extractUserIdFromToken(token) : null;

                this.usersService.getAllUsersOfEntreprise(entrepriseId).subscribe({
                    next: (data) => {
                        this.allUsers = data.filter(user => user.id !== connectedUserId)
                            .map(user => ({
                                ...user,
                                photoUrl: user.photo ? `${this.apiUrl}${user.photo}` : 'assets/img/profil.png'
                            }));
                    },
                    error: (err) => {
                        console.error('Erreur lors du chargement des utilisateurs', err);
                    }
                });
            }
        },
        error: (err) => {
            console.error("Erreur lors de la récupération des informations utilisateur :", err);
        }
    });
  }

  // Méthodes pour gérer la sélection des utilisateurs
  toggleSelectAllUsers(event: Event): void {
      const checkbox = event.target as HTMLInputElement;
      if (checkbox.checked) {
        this.selectedUserIds = this.allUsers
          .map(u => u.id)
          .filter((id): id is number => id !== undefined);
      } else {
          this.selectedUserIds = [];
      }
  }

  isUserSelected(id: number | undefined): boolean {
    return id !== undefined && this.selectedUserIds.includes(id);
  }

  toggleUserSelection(id: number): void {
      if (id === undefined) return;
      const index = this.selectedUserIds.indexOf(id);
      if (index === -1) {
          this.selectedUserIds.push(id);
      } else {
          this.selectedUserIds.splice(index, 1);
      }
  }

  // Méthode pour associer un utilisateur à la boutique
associateUserToBoutique(userId: number): void {
    if (!this.boutiqueId) {
      console.error("Aucune boutique sélectionnée.");
      return;
    }
    if (userId === undefined || userId === null) {
      console.error("Aucun utilisateur sélectionné.");
      return;
    }

    // Préparer l'objet de la requête
    const request: AssignerVendeurRequest = {
      userId: userId,
      boutiqueIds: [this.boutiqueId] 
    };

    this.boutiqueService.assignerVendeur(request).subscribe({
      next: (response) => {
        // Vérifier la réponse et afficher un message de succès
        if (response.status === 'success') {
          this.successMessage = 'Utilisateur associé à la boutique avec succès!';
        } else {
          this.successMessage = 'Aucune boutique n\'a été affectée.';
        }
        // Recharger la liste des vendeurs de la boutique si nécessaire
        // this.loadAllVendeursBoutique();

        // Effacer le message après 3 secondes
        setTimeout(() => this.successMessage = null, 3000);
        this.loadAllVendeursBoutique()
      },
      error: (err) => {
        // Gérer les erreurs de l'API
        this.errorMessage = "Erreur lors de l'association : " + (err.error?.message || err.message);
        setTimeout(() => this.errorMessage = null, 5000);
      }
    });
  }

selectedVendeurs: number[] = [];
toggleSelectionCheckbox(event: Event, id: number | undefined): void {
  if (id === undefined) {
    console.warn("ID vendeur manquant.");
    return;
  }

  const checked = (event.target as HTMLInputElement).checked;

  if (checked) {
    this.selectedVendeurs.push(id);
  } else {
    this.selectedVendeurs = this.selectedVendeurs.filter(v => v !== id);
  }

  console.log('Vendeurs sélectionnés:', this.selectedVendeurs);
}



deleteSelectedVendeurs(): void {
  if (this.selectedVendeurs.length === 0) {
    console.warn("Aucun vendeur sélectionné.");
    return;
  }

  this.selectedVendeurs.forEach(userId => {
    this.dissociateUserFromBoutique(userId);
  });

  this.selectedVendeurs = []; // Réinitialise après suppression
}

  // Methode pour retirer vendeur
  dissociateUserFromBoutique(userId: number): void{
        if (!this.boutiqueId) {
      console.error("Aucune boutique sélectionnée.");
      return;
    }
    if (userId === undefined || userId === null) {
      console.error("Aucun utilisateur sélectionné.");
      return;
    }

    // Préparer l'objet de la requête
    const request: AssignerVendeurRequest = {
      userId: userId,
      boutiqueIds: [this.boutiqueId] 
    };

    this.boutiqueService.retirerVendeur(request).subscribe({
      next: (response) => {
        // Vérifier la réponse et afficher un message de succès
        if (response.status === 'success') {
          this.successMessage = 'Utilisateur retiré de la boutique!';
        } else {
          this.successMessage = 'Aucune Utilisateur n\'a été retiré.';
        }
        // Recharger la liste des vendeurs de la boutique si nécessaire
        // this.loadAllVendeursBoutique();

        // Effacer le message après 3 secondes
        setTimeout(() => this.successMessage = null, 3000);
        this.loadAllVendeursBoutique()
      },
      error: (err) => {
        // Gérer les erreurs de l'API
        this.errorMessage = "Erreur lors de retrait : " + (err.error?.message || err.message);
        setTimeout(() => this.errorMessage = null, 5000);
      }
    });

  }

formatDateOnly(dateString?: string): string {
  if (!dateString) return '';

  // Supposons format : "28/07/2025 10:48:52"
  const parts = dateString.split(' ')[0].split('/'); // ["28", "07", "2025"]

  if (parts.length !== 3) return '';

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // JS month index commence à 0
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  if (isNaN(date.getTime())) return '';

  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}



}
