import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from 'src/app/admin-page/MODELS/click-outside.directive';
import { environment } from 'src/environments/environment';
import { ViewStateService } from './view-state.service';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { CommandeStateService } from 'src/app/admin-page/SERVICES/commande-state.service';
import { PosCaisseService } from 'src/app/admin-page/SERVICES/CaisseService/pos-caisse-service';
import { FermerCaisseRequest } from 'src/app/admin-page/MODELS/CaisseModel/caisse.model';
import { BoutiqueStateService } from 'src/app/admin-page/SERVICES/CaisseService/boutique-state.service';
import { BoutiqueService } from 'src/app/admin-page/SERVICES/boutique-service';
import { CfaCurrencyPipe } from 'src/app/admin-page/MODELS/cfa-currency.pipe';
import { ScannerService } from 'src/app/admin-page/SERVICES/VenteService/scanner.service';
import { CalculatorService } from 'src/app/admin-page/SERVICES/VenteService/calculator.service';

@Component({
  selector: 'app-pos-accueil',
  standalone: true,
  imports: [ FormsModule, CommonModule, RouterModule, ClickOutsideDirective, CfaCurrencyPipe],
  templateUrl: './pos-accueil.component.html',
  styleUrl: './pos-accueil.component.scss'
})
export class PosAccueilComponent {
  private apiUrl = environment.imgUrl;
  // isListView = true;
  showDropdown = false;
  public isListView$: Observable<boolean>;
  activeButton: 'vente' | 'commande' = 'vente';
  showMenuDropdown = false;
  userName: string = '';
  nomEntreprise = '';
  photo: string | null = null;
  photoUrl: string | null = null;
  commandes: string[] = ['001']; // Liste initiale
  activeCommande: string = '001'; // Commande active
  // showCommandeDropdown = false;
  showCommandePopup = false;
  private commandeSubscription: Subscription;

  private boutiqueSub?: Subscription;
  private boutiques: any[] = [];

  selectedBoutiqueId: number | null = null;
  selectedBoutiqueName: string = '';         // vide par défaut
  private boutiquesLoaded = false;
  isBoutiqueNameLoaded = false;              // <- nouveau flag

  scanInProgress = false;

  isDraggingPopup = false;
  startXPopup = 0;
  startYPopup = 0;
  initialXPopup = 0;
  initialYPopup = 0;
  popupOffsetPopup = { x: 0, y: 0 };

  showFermerCaissePopup = false;
  caisseDetails: any = null;
  isLoadingCaisseDetails = false;
  fermetureErrorMessage: string | null = null;

  showCalculatorPopup = false;

  @ViewChild('calculatorRef', { static: false }) calculatorRef?: ElementRef<HTMLDivElement>;
  @ViewChild('calcElement', { static: false }) calcElement?: ElementRef<HTMLElement>;


  private baseWidth = 420; 
  private baseHeight = 480;

  calcWidth = 420;
  calcHeight = 480;

  calcScale = 1;
  hoverResizeCorner: 'br' | 'bl' | null = null;
  // seuil (en px) pour détecter la zone de redimensionnement près des coins
  private readonly cornerThreshold = 18;

  // resize state
  private isResizing = false;
  private resizeCorner: 'br' | 'bl' | null = null;
  private startXResize = 0;
  private startYResize = 0;
  private initialWidth = 0;
  private initialHeight = 0;
  private initialPopupX = 0;
  private initialPopupY = 0;

  // min / max
  private minWidth = 160;
  private minHeight = 200;
  private maxWidth = window.innerWidth - 40;
  private maxHeight = window.innerHeight - 40;

  // handlers references
  private pointerMoveHandler: any;
  private pointerUpHandler: any;

  // Ajoutez ces propriétés à votre classe
  isCalculatorMinimized = false;
  calculatorPosition = { x: 100, y: 100 };

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private userService: UsersService,
    private posCaisseService: PosCaisseService,
    private commandeState: CommandeStateService,
    private boutiqueState: BoutiqueStateService,
    private boutiqueService: BoutiqueService,
    private calculator: CalculatorService,
    private scannerService: ScannerService,
    private renderer: Renderer2, 
  ) {
    this.isListView$ = this.viewState.isListView$;
    
    // Initialiser avec les commandes actuelles
    this.commandes = this.commandeState.getAllCommandesIds();
    
    // S'abonner aux mises à jour des commandes
    this.commandeState.commandeUpdated$.subscribe(() => {
      this.commandes = this.commandeState.getAllCommandesIds();
    });

    this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommande = id;
    });
    
    this.commandeSubscription = this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommande = id;
    });
  }

  ngOnInit() {

    const currentRoute = this.router.url;
    this.activeButton = currentRoute.includes('/commandes') ? 'commande' : 'vente';
    this.getUserInfo();

    this.loadBoutiques();

    // Charger toutes les boutiques une fois (pour résoudre id -> nom)
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: (list) => {
        this.boutiques = list || [];
        this.boutiquesLoaded = true;
        // si on avait déjà un id, mettre à jour le nom
        if (this.selectedBoutiqueId !== null) {
          this.updateBoutiqueName(this.selectedBoutiqueId);
        }
      },
      error: (err) => console.error('Erreur chargement boutiques', err)
    });

    // S'abonner aux changements de boutique
    this.boutiqueSub = this.boutiqueState.selectedBoutique$.subscribe(id => {
      this.selectedBoutiqueId = id;
      if (id === null) {
        this.selectedBoutiqueName = 'Sélectionnez une boutique';
      } else {
        this.updateBoutiqueName(id);
      }
    });

    // Si on arrive par navigation avec une caisse passée en state, on peut setter aussi
    const nav = this.router.getCurrentNavigation()?.extras?.state as any;
    if (nav?.caisse?.boutiqueId) {
      this.boutiqueState.setSelectedBoutique(nav.caisse.boutiqueId);
    }

    // S'abonner aux événements de scan
    this.scannerService.getScanningObservable().subscribe(scanning => {
      this.scanInProgress = scanning;
    });
  }

  private loadBoutiques(): void {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: (list) => {
        this.boutiques = list || [];
        this.boutiquesLoaded = true;
        
        // Vérifier si une boutique est déjà sélectionnée dans le state
        const currentBoutiqueId = this.boutiqueState.getCurrentValue();
        if (currentBoutiqueId) {
          this.updateBoutiqueName(currentBoutiqueId);
        }
      },
      error: (err) => console.error('Erreur chargement boutiques', err)
    });
  }

  private updateBoutiqueName(id: number): void {
    // reset du flag pendant le chargement
    this.isBoutiqueNameLoaded = false;
    const found = this.boutiques.find(b => b.id === id);
    if (found) {
      this.selectedBoutiqueName = found.nomBoutique || '';
      this.isBoutiqueNameLoaded = true;
    } else {
      // Si non trouvée, tenter une requête directe
      this.boutiqueService.getBoutiqueById(id).subscribe({
        next: (boutique) => {
          this.selectedBoutiqueName = boutique?.nomBoutique || 'Boutique inconnue';
          this.isBoutiqueNameLoaded = true;
        },
        error: () => {
          this.selectedBoutiqueName = 'Boutique inconnue';
          this.isBoutiqueNameLoaded = true;
        }
      });
    }
  }

  ngOnDestroy() {
    this.removeResizeListeners();
    this.boutiqueSub?.unsubscribe();
  }

  // ngOnDestroy() {
  //   // Nettoyer la souscription
  //   if (this.commandeSubscription) {
  //     this.commandeSubscription.unsubscribe();
  //   }
  // }

  toggleView(viewType: 'grid' | 'list') {
    this.viewState.setViewPreference(viewType === 'grid');
    this.showDropdown = true;
  }

  onClickCommandes() {
    this.activeButton = 'commande';
    this.router.navigate(['/pos-accueil/commandes']);
  }

  onClickVente() {
    this.activeButton = 'vente';
    this.router.navigate(['/pos-accueil']);
  }

  toggleMenuDropdown() {
    this.showMenuDropdown = !this.showMenuDropdown;
  }

  addCommande() {
    const newId = this.commandeState.addNewCommande();
    // Récupère la liste mise à jour du service
    this.commandes = this.commandeState.getAllCommandesIds(); 
    this.setActiveCommande(newId);
    this.showCommandePopup = false;
  }

  // addCommande() {
  //   const newId = this.commandeState.addNewCommande();
  //   this.commandes.push(newId);
  //   this.setActiveCommande(newId);
  // }

  setActiveCommande(cmd: string) {
    this.commandeState.setActiveCommande(cmd);
    this.activeCommande = cmd;
    this.showCommandePopup = false; // Fermer le popup après sélection
  }

  get visibleCommandes() {
    const start = Math.max(0, this.commandes.length - 6);
    return this.commandes.slice(start);
  }

  get hiddenCommandes() {
    // Commandes non visibles dans la barre principale
    return this.commandes.length > 6 
      ? this.commandes.slice(0, this.commandes.length - 6) 
      : [];
  }
    
  getUserInfo(): void {
    this.userService.getUserInfo().subscribe({
      next: (user) => {
      this.userName = user.nomComplet.charAt(0).toUpperCase();
        this.nomEntreprise = user.nomEntreprise;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
 
  onLogout(): void {
    console.log("Début de la procédure de déconnexion...");

    // Récupérer l'ID de la boutique active depuis le service BoutiqueStateService
    const boutiqueId = this.boutiqueState.getCurrentValue();

    if (!boutiqueId) {
      console.error("Aucune boutique active détectée.");
      this.router.navigate(['/analytics']);
      return;
    }

    this.userService.getUserInfo().subscribe({
      next: (user) => {
        console.log('Utilisateur récupéré:', user);
        const userPermissions = user.permissions; 

        // Vérifier si l'utilisateur a uniquement la permission "VENDRE_PRODUITS"
        if (userPermissions.length === 1 && userPermissions.includes("VENDRE_PRODUITS")) {
          console.log('L\'utilisateur a uniquement la permission "VENDRE_PRODUITS". Tentative de fermeture de la caisse...');
          
          // Fermer la caisse pour la boutique active
          this.posCaisseService.fermerCaisse(boutiqueId).subscribe({
            next: (response) => {
              console.log('Caisse fermée avec succès:', response);
              // Déconnexion de l'utilisateur
              this.userService.logoutUser();  
              console.log('Déconnexion de l\'utilisateur...');
              this.router.navigate(['/connexion']).then(success => {
                console.log("Déconnexion réussie ?", success);
              });
            },
            error: (err) => {
              console.error('Erreur lors de la fermeture de la caisse:', err.message);
              // Si une erreur se produit lors de la fermeture de la caisse, rediriger vers la page d'analytics.
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            }
          });
        } else {
          console.log('L\'utilisateur n\'a pas uniquement la permission "VENDRE_PRODUITS", fermeture de la caisse et redirection vers analytics...');
          
          // Fermer la caisse pour la boutique active
          this.posCaisseService.fermerCaisse(boutiqueId).subscribe({
            next: (response) => {
              console.log('Caisse fermée avec succès:', response);
              // Redirection vers analytics après fermeture de la caisse
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            },
            error: (err) => {
              console.error('Erreur lors de la fermeture de la caisse:', err.message);
              // Si une erreur se produit lors de la fermeture de la caisse, rediriger vers la page d'analytics.
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            }
          });
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des informations utilisateur:', err);
        // Gestion des erreurs de récupération des infos utilisateur
        this.router.navigate(['/analytics']);
      }
    });
  }

  prepareFermerCaisse(): void {
    this.isLoadingCaisseDetails = true;
    this.fermetureErrorMessage = null;
    this.caisseDetails = null;
    
    const boutiqueId = this.boutiqueState.getCurrentValue();
    
    if (!boutiqueId) {
      this.fermetureErrorMessage = "Aucune boutique sélectionnée";
      this.isLoadingCaisseDetails = false;
      return;
    }

    this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
      next: (response) => {
        if (typeof response === 'string') {
          this.fermetureErrorMessage = response;
        } else {
          this.caisseDetails = response;
          // Vérifier si la caisse est ouverte
          if (this.caisseDetails.statut !== 'OUVERTE') {
            this.fermetureErrorMessage = "Aucune caisse ouverte pour cette boutique";
          } else {
            this.showFermerCaissePopup = true;
          }
        }
        this.isLoadingCaisseDetails = false;
      },
      error: (err) => {
        this.fermetureErrorMessage = "Erreur lors du chargement des détails de la caisse: " + err.message;
        this.isLoadingCaisseDetails = false;
      }
    });
  }

  formatDate(dateString: string | Date | null): string {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Date invalide';
    
    return date.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Nouvelle méthode pour confirmer la fermeture
  confirmFermerCaisse(): void {
    if (!this.caisseDetails?.id) return;
    
    const caisseId = this.caisseDetails.id;
    this.isLoadingCaisseDetails = true;
    
    this.posCaisseService.fermerCaisse(caisseId).subscribe({
      next: (response) => {
        this.showFermerCaissePopup = false;
        this.handlePostFermeture();
      },
      error: (err) => {
        this.fermetureErrorMessage = "Échec de la fermeture de la caisse";
        this.isLoadingCaisseDetails = false;
      }
    });
  }

  // Méthode pour gérer la redirection après fermeture
  private handlePostFermeture(): void {
    this.userService.getUserInfo().subscribe({
      next: (user) => {
        const permissions = user.permissions;
        if (permissions.length === 1 && permissions.includes("VENDRE_PRODUITS")) {
          this.userService.logoutUser();
          this.router.navigate(['/connexion']);
        } else {
          this.router.navigate(['/analytics']);
        }
      },
      error: () => this.router.navigate(['/analytics'])
    });
  }

  startDragPopup(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation(); // Empêche la propagation à l'overlay
    
    this.isDraggingPopup = true;
    this.startXPopup = event.clientX;
    this.startYPopup = event.clientY;
    this.initialXPopup = this.popupOffsetPopup.x;
    this.initialYPopup = this.popupOffsetPopup.y;

    document.addEventListener('mousemove', this.onMouseMovePopup);
    document.addEventListener('mouseup', this.onMouseUpPopup);
  }

  onMouseMovePopup = (event: MouseEvent): void => {
    if (!this.isDraggingPopup) return;
    
    requestAnimationFrame(() => {
      const deltaX = event.clientX - this.startXPopup;
      const deltaY = event.clientY - this.startYPopup;
      this.popupOffsetPopup.x = this.initialXPopup + deltaX;
      this.popupOffsetPopup.y = this.initialYPopup + deltaY;
    });
  }

  onMouseUpPopup = (): void => {
    this.isDraggingPopup = false;
    document.removeEventListener('mousemove', this.onMouseMovePopup);
    document.removeEventListener('mouseup', this.onMouseUpPopup);
  }

  closePopup(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.showCommandePopup = false;
  }

  getMontantObtenu(): number {
    if (!this.caisseDetails) return 0;
    return (this.caisseDetails.montantCourant || 0) - (this.caisseDetails.montantInitial || 0);
  }

  toggleCalculator(): void {
    this.showCalculatorPopup = !this.showCalculatorPopup;
    if (this.showCalculatorPopup) {
      this.isCalculatorMinimized = false;
      this.calcWidth = this.baseWidth;
      this.calcHeight = this.baseHeight;
      this.calcScale = 1;
      if (this.calcElement?.nativeElement) {
        this.renderer.setStyle(this.calcElement.nativeElement, 'transform', `scale(1)`);
      }
    }
  }

  // Méthode appelée depuis le template
  onCalcKey(key: string) {
    this.calculator.handleKey(key);
  }

  // expose l'affichage pour le template
  get calcDisplay(): string {
    return this.calculator.display;
  }

  get calcSolarDisplay(): string {
    return this.calculator.solarDisplay;
  }

  // Optionnel : gestion clavier global pour la calculatrice
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // Si l'utilisateur tape dans un input / textarea / contentEditable -> ne pas interférer
    const target = event.target as HTMLElement | null;
    const isEditable = !!target && (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      (target as HTMLElement).isContentEditable
    );
    if (isEditable) return; // laisse le champ gérer l'évènement normalement

    // N'intercepte que si la calculatrice est visible
    if (!this.showCalculatorPopup) return;

    const k = event.key;
    if ((/^[0-9]$/).test(k)) { this.onCalcKey(k); event.preventDefault(); return; }
    if (k === 'Enter') { this.onCalcKey('='); event.preventDefault(); return; }
    if (k === '.') { this.onCalcKey('.'); event.preventDefault(); return; }
    if (k === '+') { this.onCalcKey('+'); event.preventDefault(); return; }
    if (k === '-') { this.onCalcKey('−'); event.preventDefault(); return; }
    if (k === '*') { this.onCalcKey('×'); event.preventDefault(); return; }
    if (k === '/') { this.onCalcKey('÷'); event.preventDefault(); return; }
    if (k === 'Backspace') { this.onCalcKey('▶'); event.preventDefault(); return; }
    if (k === 'Escape') { this.onCalcKey('ON/AC'); event.preventDefault(); return; }
  }

  ngAfterViewInit(): void {
    // mesurer la taille réelle de .calc pour établir la base
    setTimeout(() => {
      if (this.calcElement?.nativeElement) {
        const el = this.calcElement.nativeElement;
        this.baseWidth = el.offsetWidth || 420;
        this.baseHeight = el.offsetHeight || 480;

        // initialiser les dimensions actuelles à la base
        this.calcWidth = this.baseWidth;
        this.calcHeight = this.baseHeight;
        this.calcScale = 1;
      }
      // recalculer max selon fenêtre actuelle
      this.maxWidth = Math.max(400, window.innerWidth - 40);
      this.maxHeight = Math.max(400, window.innerHeight - 40);
    }, 0);
  }

  // Unified start (mouse) — délègue au startResizeFromCoords
  startResize(event: MouseEvent, corner: 'br' | 'bl'): void {
    event.preventDefault();
    event.stopPropagation();
    this.startResizeFromCoords(corner, event.clientX, event.clientY);
  }

  // start pour touch
  startResizeTouch(touch: Touch, corner: 'br' | 'bl'): void {
    this.startResizeFromCoords(corner, touch.clientX, touch.clientY);
  }

    // point d'entrée commun
  private startResizeFromCoords(corner: 'br' | 'bl', clientX: number, clientY: number): void {
    this.isResizing = true;
    this.resizeCorner = corner;
    this.startXResize = clientX;
    this.startYResize = clientY;
    this.initialWidth = this.calcWidth;
    this.initialHeight = this.calcHeight;
    this.initialPopupX = this.popupOffsetPopup.x;
    this.initialPopupY = this.popupOffsetPopup.y;

    // handlers unifiés pour mouse & touch
    this.pointerMoveHandler = (e: any) => {
      // empêcher scroll mobile quand on redimensionne
      if (e.type === 'touchmove') e.preventDefault();
      const { clientX, clientY } = this.extractClientFromEvent(e);
      this.handlePointerMove(clientX, clientY);
    };
    this.pointerUpHandler = (e: any) => {
      this.handlePointerUp();
    };

    document.addEventListener('mousemove', this.pointerMoveHandler, { passive: false });
    document.addEventListener('mouseup', this.pointerUpHandler);
    document.addEventListener('touchmove', this.pointerMoveHandler, { passive: false });
    document.addEventListener('touchend', this.pointerUpHandler);
  }

  // extraction client coords pour mouse/touch
  private extractClientFromEvent(e: any): { clientX: number, clientY: number } {
    if (!e) return { clientX: 0, clientY: 0 };
    if (e.type && e.type.startsWith('touch')) {
      const t = e.touches && e.touches[0] ? e.touches[0] : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0] : null);
      if (t) return { clientX: t.clientX, clientY: t.clientY };
    } else if (e.clientX !== undefined) {
      return { clientX: e.clientX, clientY: e.clientY };
    }
    // fallback
    return { clientX: this.startXResize, clientY: this.startYResize };
  }

  // logique principale: on garde scale uniforme (même ratio), container suit le scale
  private handlePointerMove(clientX: number, clientY: number): void {
    if (!this.isResizing || !this.resizeCorner) return;

    const deltaX = clientX - this.startXResize;
    const deltaY = clientY - this.startYResize;

    // calcul des candidats selon coin
    let candidateWidth = this.initialWidth;
    let candidateHeight = this.initialHeight;

    if (this.resizeCorner === 'br') {
      candidateWidth = this.initialWidth + deltaX;
    } else if (this.resizeCorner === 'bl') {
      candidateWidth = this.initialWidth - deltaX; // mouvement du coin gauche inverse
    }
    candidateHeight = this.initialHeight + deltaY;

    // éviter valeurs négatives
    candidateWidth = Math.max(10, candidateWidth);
    candidateHeight = Math.max(10, candidateHeight);

    // échelles relatives
    const scaleX = candidateWidth / this.initialWidth;
    const scaleY = candidateHeight / this.initialHeight;

    // choisir le scale qui respecte à la fois deltaX et deltaY sans déformer (on prend le plus restrictif)
    // ainsi largeur et hauteur changent ensemble en gardant le ratio initial
    let newScale = Math.min(scaleX, scaleY);

    // clamp scale global
    newScale = Math.max(0.4, Math.min(2.5, newScale));

    // nouvelles dimensions basées sur la base (ratio initial)
    const newWidth = Math.round(this.baseWidth * newScale);
    const newHeight = Math.round(this.baseHeight * newScale);

    // clamp dimensions sur min/max en px
    const clampedWidth = Math.max(this.minWidth, Math.min(this.maxWidth, newWidth));
    const clampedHeight = Math.max(this.minHeight, Math.min(this.maxHeight, newHeight));

    // recalc scale si les dimensions clampées ont changé
    const finalScaleW = clampedWidth / this.baseWidth;
    const finalScaleH = clampedHeight / this.baseHeight;
    // garder le plus petit pour éviter débordements
    const finalScale = Math.min(finalScaleW, finalScaleH);

    // appliquer
    this.calcScale = finalScale;
    this.calcWidth = Math.round(this.baseWidth * finalScale);
    this.calcHeight = Math.round(this.baseHeight * finalScale);

    // ajuster position si coin gauche (bl) : le left doit bouger pour suivre le coin
    if (this.resizeCorner === 'bl') {
      // quand le width diminue, left augmente; quand width augmente, left diminue
      this.popupOffsetPopup.x = Math.round(this.initialPopupX + (this.initialWidth - this.calcWidth));
    } else {
      this.popupOffsetPopup.x = this.initialPopupX;
    }

    // appliquer le scale au contenu
    if (this.calcElement?.nativeElement) {
      const el = this.calcElement.nativeElement;
      el.style.transformOrigin = 'top left';
      el.style.transform = `scale(${this.calcScale})`;
    }
  }

  private onMouseMoveResize(event: MouseEvent): void {
    if (!this.isResizing || !this.resizeCorner) return;
    // calcul deltas
    const deltaX = event.clientX - this.startXResize;
    const deltaY = event.clientY - this.startYResize;

    let newWidth = this.initialWidth;
    let newHeight = this.initialHeight;
    let newPopupX = this.initialPopupX;

    if (this.resizeCorner === 'br') {
      newWidth = this.initialWidth + deltaX;
      newPopupX = this.initialPopupX; // gauche fixe
    } else if (this.resizeCorner === 'bl') {
      // left handle bouge -> on déplace aussi popupOffsetPopup.x
      newWidth = this.initialWidth - deltaX;
      newPopupX = this.initialPopupX + deltaX;
    }

    newHeight = this.initialHeight + deltaY;

    // clamp
    newWidth = Math.max(this.minWidth, Math.min(this.maxWidth, newWidth));
    newHeight = Math.max(this.minHeight, Math.min(this.maxHeight, newHeight));

    // appliquer
    this.calcWidth = Math.round(newWidth);
    this.calcHeight = Math.round(newHeight);
    this.popupOffsetPopup.x = Math.round(newPopupX);

    // recalculer scale du contenu pour conserver proportions et éviter débordements
    const scaleX = this.calcWidth / this.baseWidth;
    const scaleY = this.calcHeight / this.baseHeight;
    // on prend le min pour garder le contenu entier visible
    this.calcScale = Math.max(0.4, Math.min(2.5, Math.min(scaleX, scaleY)));

    // appliquer scale directement via style sur l'élément
    if (this.calcElement?.nativeElement) {
      const el = this.calcElement.nativeElement;
      el.style.transformOrigin = 'top left';
      el.style.transform = `scale(${this.calcScale})`;
      // pour éviter que le contenu dépasse lors du scale, on peut ajuster la hauteur du container
      // si tu veux que le container suive exactement le contenu scaled, décommente :
      // this.calcHeight = Math.round(this.baseHeight * this.calcScale);
    }
  }

  private onMouseUpResize(): void {
    this.isResizing = false;
    this.resizeCorner = null;
    this.removeResizeListeners();
  }

  // Si tu veux gérer le redimensionnement sur changement de fenêtre :
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.maxWidth = Math.max(300, window.innerWidth - 40);
    this.maxHeight = Math.max(300, window.innerHeight - 40);
    // clamp des valeurs actuelles
    this.calcWidth = Math.min(this.calcWidth, this.maxWidth);
    this.calcHeight = Math.min(this.calcHeight, this.maxHeight);
  }

  onCalculatorMouseMove(event: MouseEvent): void {
  const el = this.calculatorRef?.nativeElement;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left; // position locale
  const y = event.clientY - rect.top;

  const nearRight = (rect.width - x) <= this.cornerThreshold;
  const nearLeft = x <= this.cornerThreshold;
  const nearBottom = (rect.height - y) <= this.cornerThreshold;

  // détecte coin bas-droit ou bas-gauche
  if (nearBottom && nearRight) {
    this.hoverResizeCorner = 'br';
    el.style.cursor = 'nwse-resize';
  } else if (nearBottom && nearLeft) {
    this.hoverResizeCorner = 'bl';
    el.style.cursor = 'nesw-resize';
  } else {
    // pas près d'un coin
    this.hoverResizeCorner = null;
    el.style.cursor = 'default';
  }
}


// reset du curseur quand on sort du cadre
onCalculatorMouseLeave(_: MouseEvent): void {
  const el = this.calculatorRef?.nativeElement;
  if (el) el.style.cursor = 'default';
  this.hoverResizeCorner = null;
}

// fin du pointer
private handlePointerUp(): void {
  this.isResizing = false;
  this.resizeCorner = null;
  // remove listeners
  document.removeEventListener('mousemove', this.pointerMoveHandler);
  document.removeEventListener('mouseup', this.pointerUpHandler);
  document.removeEventListener('touchmove', this.pointerMoveHandler);
  document.removeEventListener('touchend', this.pointerUpHandler);
  this.pointerMoveHandler = undefined;
  this.pointerUpHandler = undefined;
}

// ancien removeResizeListeners - on peut garder ou supprimer selon usage
private removeResizeListeners(): void {
  if (this.pointerMoveHandler) {
    document.removeEventListener('mousemove', this.pointerMoveHandler);
    document.removeEventListener('touchmove', this.pointerMoveHandler);
    this.pointerMoveHandler = undefined;
  }
  if (this.pointerUpHandler) {
    document.removeEventListener('mouseup', this.pointerUpHandler);
    document.removeEventListener('touchend', this.pointerUpHandler);
    this.pointerUpHandler = undefined;
  }
}

// -----------------------------------------------------------
// mouse flow resto — remplace onCalculatorMouseDown & add touch start
onCalculatorMouseDown(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  // si click sur un bouton/clavier => laisser l'action normale
  if (target.closest('.key') || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
    return;
  }

  // si déjà près d'un coin
  if (this.hoverResizeCorner) {
    this.startResize(event, this.hoverResizeCorner);
    return;
  }

  // sinon drag
  this.startDragPopup(event);
}

// tactile: touchstart
onCalculatorTouchStart(ev: TouchEvent): void {
  // si multiple touches -> ignore
  if (!ev || !ev.touches || ev.touches.length === 0) return;

  const touch = ev.touches[0];
  const el = this.calculatorRef?.nativeElement;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  const nearRight = (rect.width - x) <= this.cornerThreshold;
  const nearLeft = x <= this.cornerThreshold;
  const nearBottom = (rect.height - y) <= this.cornerThreshold;

  // si on commence un resize tactile
  if (nearBottom && (nearRight || nearLeft)) {
    const corner = nearRight ? 'br' : 'bl';
    // preventDefault pour éviter le scroll
    ev.preventDefault();
    this.startResizeTouch(touch, corner);
    return;
  }

  // sinon si on touche sur une zone non interactive -> démarrer drag
  const target = ev.target as HTMLElement;
  if (target && (target.closest('.key') || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
    // laisser interaction normale
    return;
  }

  // simuler startDragPopup via start coords (on convertit touch à mouse event)
  const fakeMouseEvent = new MouseEvent('mousedown', {
    clientX: touch.clientX,
    clientY: touch.clientY,
    bubbles: true
  });
  this.startDragPopup(fakeMouseEvent);
}

// Méthode pour réduire la calculatrice
minimizeCalculator(): void {
  this.isCalculatorMinimized = !this.isCalculatorMinimized;

  if (this.isCalculatorMinimized) {
    // Sauvegarder la position actuelle
    this.calculatorPosition.x = this.popupOffsetPopup.x;
    this.calculatorPosition.y = this.popupOffsetPopup.y;

    // Réduire la taille du container
    this.calcWidth = 200;
    this.calcHeight = 40;

    // Calculer un scale basé sur la baseWidth pour garder les proportions
    this.calcScale = Math.max(0.1, Math.min(1, this.calcWidth / this.baseWidth));

    // Appliquer transform au contenu .calc
    if (this.calcElement?.nativeElement) {
      this.renderer.setStyle(this.calcElement.nativeElement, 'transformOrigin', 'top left');
      this.renderer.setStyle(this.calcElement.nativeElement, 'transform', `scale(${this.calcScale})`);
    }
  } else {
    // Restaurer la taille normale
    this.calcWidth = this.baseWidth;
    this.calcHeight = this.baseHeight;
    this.calcScale = 1;

    if (this.calcElement?.nativeElement) {
      this.renderer.setStyle(this.calcElement.nativeElement, 'transform', `scale(${this.calcScale})`);
    }

    // Restaurer la position
    this.popupOffsetPopup.x = this.calculatorPosition.x;
    this.popupOffsetPopup.y = this.calculatorPosition.y;
  }
}



}