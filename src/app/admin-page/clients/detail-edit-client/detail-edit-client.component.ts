import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, Observable, of, startWith } from 'rxjs';
import { Entreprise } from '../../MODELS/entreprise-model';
import { ActivatedRoute, Router } from '@angular/router';
import imageCompression from 'browser-image-compression';
import { Clients } from '../../MODELS/clients-model';
import { ClientService } from '../../SERVICES/client-service';
import { EntrepriseService } from '../../SERVICES/entreprise-service';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-detail-edit-client',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CustomNumberPipe,
    MatTabsModule,
    MatExpansionModule, 
    MatFormFieldModule,
    MatIconModule,
    MatCardModule, MatTableModule, MatDividerModule
  ],
  templateUrl: './detail-edit-client.component.html',
  styleUrl: './detail-edit-client.component.scss'
})
export class DetailEditClientComponent {
  private imgUrl = environment.imgUrl
  clientId!: number;
  errorMessage: string = '';
  errorMessageApi: string = '';
  successMessage = '';
  modifierClientForm!: FormGroup;
  entrepriseForm!: FormGroup;
  isEntrepriseSelected = false;
  showPopup = false;
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  selectedFile: File | null | undefined = null;
  imageFile: File | null = null;
  control = new FormControl();
  filteredOptions: Observable<Entreprise[]> = of([]);
  loading = false;
  optionsEntreprise$ = new BehaviorSubject<Entreprise[]>([]);
  entrepriseRequiredError = false;
  indicatif: string = '';
  maxPhoneLength: number = 0;
  entrepriseIndicatif: string = '';
  entrepriseMaxPhoneLength: number = 0;

  facturesClient: any[] = [];
  loadingFactures = false;
  errorFactures = '';
  selectedFactureId: number | null = null;
  factureDetails: any = null;

  // @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  clientPhotoUrl: string | null = null;
  selectedImageFile: File | null = null;

  // Ajoutez ces propriétés dans la classe
  entrepriseNom: string = '';
  entrepriseSecteur: string = '';
  entrepriseEmail: string = '';
  entrepriseTelephone: string = '';
  entrepriseSiege: string = '';
  entrepriseLogo: string = '';
  entrepriseSiteWeb: string = '';
  entrepriseNina: string = '';
  entrepriseRccm: string = '';
  entrepriseNif: string = '';
  entrepriseBanque: string = '';
  entrepriseAdresse: string = '';
  entreprisePays: string = '';
  entrepriseSignataireNom: string = '';
  entrepriseSignataire: string = '';

  // Ajoutez cette propriété dans la classe
  isEditing = false;

  displayedColumns1 = ['numero', 'date', 'statut', 'montant'];

  // Définir les indicatifs par pays
  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
    'Mali': { indicatif: '+223', longueur: 8 },
    'Sénégal': { indicatif: '+221', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 }
  };



  ngOnInit() {
    this.getListEntreprise();
    this.initEntreprise();
    this.getClientForm();
    this.getEntrepriseForm();
    this.loadEntreprises();
    this.getRouteClient();
    this.modifierClientForm.disable();
    this.control.disable();
    this.loadEntrepriseInfo();
    
  }
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private factureService: FactureProFormaService,
  ) {}

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

  // Ajouter cette méthode pour charger les détails d'une facture
loadFactureDetails(factureId: number): void {
  this.factureService.getFactureProformaById(factureId).subscribe({
    next: (details: any) => {
      // Calculer le montant après remise
      const remiseValue = details.remise || 0;
      const totalApresRemise = details.totalHT - (details.totalHT * remiseValue / 100);
      
      // Calculer la TVA si nécessaire
      let montantTVA = 0;
      let tauxTva = 0;
      
      if (details.tva) {
        // Calcul: TTC = (HT - Remise) + TVA
        // => TVA = TTC - (HT - Remise)
        montantTVA = details.totalFacture - totalApresRemise;
        
        // Calculer le taux de TVA réel
        if (totalApresRemise > 0) {
          tauxTva = montantTVA / totalApresRemise;
        }
      }
      
      // Valider et corriger la remise
      let remiseCorrigee = remiseValue;
      if (remiseCorrigee > 100) {
        console.warn(`Remise invalide corrigée: ${remiseCorrigee}% -> 100%`);
        remiseCorrigee = 100;
      }
      
      this.factureDetails = {
        ...details,
        montantTVA,
        tauxTva,
        remise: remiseCorrigee
      };
    },
    error: (err) => {
      console.error('Erreur chargement détails facture', err);
    }
  });
}

onSelectFacture(facture: any): void {
  this.selectedFactureId = facture.id;
  this.loadFactureDetails(facture.id);
}

// Méthode pour charger les infos entreprise
loadEntrepriseInfo(): void {
  this.entrepriseService.getEntrepriseInfo().subscribe({
    next: (entreprise) => {
      this.entrepriseNom = entreprise.nom;
      this.entrepriseSecteur = entreprise.secteur;
      this.entrepriseEmail = entreprise.email;
      this.entrepriseTelephone = entreprise.telephone;
      this.entrepriseSiege = entreprise.siege;
      this.entrepriseLogo = entreprise.logo ? `${this.imgUrl}${entreprise.logo}` : '';
      this.entrepriseSiteWeb = entreprise.siteWeb;
      this.entrepriseNina = entreprise.nina;
      this.entrepriseRccm = entreprise.rccm;
      this.entrepriseNif = entreprise.nif;
      this.entrepriseBanque = entreprise.banque;
      this.entrepriseAdresse = entreprise.adresse;
      this.entreprisePays = entreprise.pays;
      this.entrepriseSignataireNom = entreprise.signataireNom;
      this.entrepriseSignataire = entreprise.signataire;
    },
    error: (err) => {
      console.error('Erreur chargement infos entreprise', err);
    }
  });
}

  // Calcul du total des factures
  // getTotalFactures(): number {
  //   return this.facturesClient.reduce((sum: number, facture: any) => 
  //     sum + facture.totalFacture, 0
  //   );
  // }

  getTotalFactures(): number {
    const total = this.facturesClient.reduce((sum: number, facture: any) => 
      sum + facture.totalFacture, 0
    );
    
    // Arrondir à l'entier le plus proche
    return Math.round(total);
  }

  // Méthode pour déclencher l'input file
  triggerFileInput(): void {
    if (!this.isEditing) return;
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
      // Vérification du format
      const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedFormats.includes(file.type)) {
        this.errorMessage = 'Seuls les formats JPG, PNG sont acceptés';
        return;
      }
      
      // Vérification de la taille (max 2MB)
      // if (file.size > 2 * 1024 * 1024) {
      //   this.errorMessage = 'La taille maximale est de 2MB';
      //   return;
      // }
      
      this.selectedImageFile = file;
      
      // Aperçu de l'image
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newPhotoUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  startEditing(): void {
    this.isEditing = true;
    this.modifierClientForm.enable(); // Active tous les champs du formulaire
  }

  // Ajoutez ces méthodes
  onPaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
  
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `; // Ajout d'un espace après l'indicatif
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
      this.modifierClientForm.get('telephone')?.enable();
  
      // Met à jour la valeur avec l'indicatif + espace
      const currentPhone = this.modifierClientForm.get('telephone')?.value || '';
      if (!currentPhone.startsWith(this.indicatif)) {
        this.modifierClientForm.get('telephone')?.setValue(this.indicatif);
      }
  
      this.updatePhoneValidator(paysInfo.longueur);
    } else {
      this.modifierClientForm.get('telephone')?.disable();
    }
  }

  // Modifiez la méthode updatePhoneValidator
  updatePhoneValidator(longueur: number): void {
    this.modifierClientForm.controls['telephone'].setValidators([
      Validators.pattern(`^\\${this.indicatif}\\d{${longueur}}$`)
    ]);
    this.modifierClientForm.controls['telephone'].updateValueAndValidity();
  }
  
  // Modifiez la méthode formatPhoneNumber
  formatPhoneNumber(): void {
    let valeur = this.modifierClientForm.get('telephone')?.value;
    
    // Garantit que l'indicatif avec espace est présent
    if (!valeur.startsWith(this.indicatif)) {
      this.modifierClientForm.get('telephone')?.setValue(this.indicatif);
      return;
    }

    // Garde uniquement les chiffres après l'indicatif
    const chiffres = valeur.replace(this.indicatif, '').replace(/\D/g, '');
    const numeroFormate = this.indicatif + chiffres;
    
    // Limite la longueur selon le pays
    const maxLength = this.indicatif.length + this.maxPhoneLength;
    this.modifierClientForm.get('telephone')?.setValue(numeroFormate.slice(0, maxLength));
  }

  goToStock() {
    this.router.navigate(['/clients']);
  }

  getRouteClient() {
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      this.loadClientData();
    });
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.modifierClientForm.disable();
    this.loadClientData(); // Recharge les données originales
  }

  private loadClientData() {
    this.clientService.getClientById(this.clientId).subscribe({
      next: (client) => {
        // Transformez l'URL de la photo
        this.clientPhotoUrl = client.photo 
        ? this.clientService.getFullImageUrl(client.photo)
        : 'assets/img/profil.png';
        
        this.populateForm(client);
        this.modifierClientForm.disable();
        this.handleEntreprise(client.entrepriseClient);
        this.loadFacturesClient();

        if (client.photo) {
          this.clientPhotoUrl = this.clientService.getFullImageUrl(client.photo);
        }
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors du chargement du client';
        console.error('Erreur:', error);
      }
    });
  }

// Dans loadFacturesClient, sélectionner la première facture par défaut
loadFacturesClient() {
  this.loadingFactures = true;
  this.factureService.getFacturesByClient(this.clientId).subscribe({
    next: (factures) => {
      this.facturesClient = factures;
      this.loadingFactures = false;
      
      // Sélectionner la première facture par défaut
      if (this.facturesClient.length > 0) {
        this.onSelectFacture(this.facturesClient[0]);
      }
    },
    error: (err) => {
      this.errorFactures = 'Erreur lors du chargement des factures';
      this.loadingFactures = false;
      console.error(err);
    }
  });
}

  // Modifiez la méthode populateForm pour initialiser l'indicatif
  private populateForm(client: Clients) {
    this.modifierClientForm.patchValue({
      nomComplet: client.nomComplet,
      email: client.email,
      telephone: client.telephone,
      adresse: client.adresse,
      poste: client.poste,
      pays: client.pays,
      ville: client.ville
    });

    // Initialiser l'indicatif si le pays est déjà défini
    if (client.telephone) {
      const phoneValue = client.telephone.replace(/(\+\d{3})(\d+)/, '$1 $2');
      this.modifierClientForm.patchValue({ telephone: phoneValue });
    }
  
    if (client.pays) {
      const paysInfo = this.paysIndicatifs[client.pays];
      if (paysInfo) {
        this.indicatif = `${paysInfo.indicatif} `; // Ajout de l'espace
        this.maxPhoneLength = paysInfo.longueur;
        this.updatePhoneValidator(paysInfo.longueur);
      }
    }
  }

  private handleEntreprise(entreprise: Entreprise | null) {
    this.isEntrepriseSelected = !!entreprise;
    this.control.setValue(entreprise);
    this.entrepriseRequiredError = false;
  }

  getClientForm() {
    this.modifierClientForm = this.fb.group({
      nomComplet: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      telephone: [''],
      adresse: [''],
      poste: [''],
      pays: [''],
      ville: ['']
    });
  }

  getEntrepriseForm() {
    this.entrepriseForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', Validators.email],
      telephone: [''],
      adresse: [''],
      siege: [''],
      secteur: [''],
      pays: ['']
    });
  }

  private loadEntreprises() {
    const token = localStorage.getItem('authToken') || '';
    if (!token) return;

    this.entrepriseService.getListEntreprise(token).subscribe(
        (list: Entreprise[]) => {
            this.optionsEntreprise$.next(list); // Mettre à jour le BehaviorSubject
            this.setupAutocomplete();
        },
        err => {
            console.error('Erreur lors de la récupération des entreprises :', err);
            this.errorMessage = err.error?.error || 'Erreur chargement entreprises';
        }
    );
  }

  // Ajouter une nouvelle méthode pour configurer l'autocomplete :
  private setupAutocomplete() {
    this.filteredOptions = combineLatest([
      this.control.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value?.nom)
      ),
      this.optionsEntreprise$
    ]).pipe(
      map(([name, entreprises]) => 
        name ? this._filter(name, entreprises) : entreprises
      )
    );
  }

  getListEntreprise() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.entrepriseService.getListEntreprise(token).subscribe(
        (entreprises) => {
          console.log('Entreprise reçues depuis l\'API :', entreprises);
          // Mettre à jour le BehaviorSubject
          this.optionsEntreprise$.next(entreprises); 
          this.filteredOptions = this.control.valueChanges.pipe(
            startWith<string | Entreprise>(''),
            map(value => (value ? (typeof value === 'string' ? value : value.nom) : '')),
            // Passer le tableau d'entreprises comme second paramètre
            map(name => (name ? this._filter(name, this.optionsEntreprise$.value) : this.optionsEntreprise$.value.slice()))
          );
        }, 
        (error) => {
          console.error('Erreur lors de la récupération des entreprises :', error);
        }
      ); 
    } else {
      console.error('Aucun token trouvé !');
    }
  }
  
  private _filter(name: string, entreprises: Entreprise[]): Entreprise[] {
    const filterValue = name.toLowerCase();
    return entreprises.filter(e =>
        e.nom.toLowerCase().includes(filterValue)
    );
  }

  displayFnEntreprise(e?: Entreprise): string {
    return e ? e.nom : '';
  }

    // Methode pour la selection d'un entreprise
  onEntrepriseSelected(event: any): void {
    // console.log("Entreprise selectionner :", event.entreprise.value);
    // if (event.entreprise && event.entreprise.value) {
    //   this.ajouteEntrepriseForm.get('entrepriseId')?.setValue(event.option.value.id);
    // } else {
    //   this.ajouteEntrepriseForm.get('entrepriseId')?.setValue(null);
    // }
  }

  // Ouvre/ferme le popup d’entreprise
  openPopup() {
    if (!this.isEditing) return;
    
    this.getEntrepriseForm();
    this.entrepriseForm.reset();
    
    // Initialiser avec le Mali par défaut
    this.entrepriseForm.patchValue({
      pays: 'Mali'
    });
    
    // Forcer l'initialisation de l'indicatif
    this.onEntreprisePaysChange({
      target: { 
        value: this.entrepriseForm.get('pays')?.value 
      }
    });
    
    this.showPopup = true;
  }
  closePopup() { this.showPopup = false; }
  
  initEntreprise() {
    this.entrepriseForm = this.fb.group({
      nom: ['', Validators.required],
      pays: [''],
      email: [''],
      telephone: [''],
      adresse: [''],
      siege: [''],
      secteur: [''],
    });
  }
  
ajouterEntreprise() {
    if (this.entrepriseForm.invalid) return;
  
    const newEntreprise: Entreprise = {
      nom: this.entrepriseForm.value.nom,
      pays: this.entrepriseForm.value.pays,
      email: this.entrepriseForm.value.email,
      telephone: this.entrepriseForm.value.telephone,
      adresse: this.entrepriseForm.value.adresse,
      siege: this.entrepriseForm.value.siege,
      secteur: this.entrepriseForm.value.secteur,
      logo : this.entrepriseForm.value.logo,
      nif: this.entrepriseForm.value.nif,
      nina: this.entrepriseForm.value.nina,
      banque: this.entrepriseForm.value.banque,
      rccm: this.entrepriseForm.value.rccm,
      siteWeb: this.entrepriseForm.value.siteWeb,
      signataire: this.entrepriseForm.value.signataire,
      signataireNom: this.entrepriseForm.value.signataireNom,
      prefixe: this.entrepriseForm.value.prefixe,
      suffixe: this.entrepriseForm.value.suffixe,
      tauxTva: this.entrepriseForm.value.tauxTva


    };
  
    this.entrepriseService.addEntreprise(newEntreprise).subscribe({
      next: (createdEntreprise) => {
        const current = this.optionsEntreprise$.value;
        this.optionsEntreprise$.next([createdEntreprise, ...current]); // Nouvelle entreprise en tête
        this.control.setValue(createdEntreprise);
        this.closePopup();
        this.entrepriseForm.reset();
      },
      error: (error) => {
        this.errorMessageApi = error.message || 'Erreur lors de la création';
      }
    });
  }

  // Soumission du formulaire client
  modifierClient() {
    // Marquer tous les champs comme touchés pour afficher les erreurs
    this.markFormGroupTouched(this.modifierClientForm);
  
    if (this.modifierClientForm.invalid) {
      this.errorMessage = 'Veuillez corriger les erreurs dans le formulaire.';
      return;
    }
  
    // Vérification de l'entreprise si le toggle est activé
    let entrepriseClient: Entreprise | null = null;
    if (this.isEntrepriseSelected) {
      entrepriseClient = this.control.value;
      if (!entrepriseClient) {
        this.entrepriseRequiredError = true;
        this.errorMessage = 'Veuillez sélectionner ou créer une entreprise.';
        return;
      }
    }
  
    // Construction de l'objet client
    // const clientData: any = {
    //   ...this.modifierClientForm.value,
    //   id: this.clientId
    // };

     // Construction de l'objet client avec photo optionnelle
    const clientData: any = {
      ...this.modifierClientForm.value,
      id: this.clientId,
      photo: this.clientPhotoUrl // Ajout de la propriété photo
    };

    if (this.isEntrepriseSelected && this.control.value?.id) {
      clientData.entrepriseClient = { id: this.control.value.id };
    } else {
      clientData.entrepriseClient = null;
    }

    const imageFile = this.selectedImageFile ?? undefined;
  
    // Appel au service
    this.clientService.updateClient(this.clientId, clientData, imageFile).subscribe({
      next: (updatedClient) => {
        this.successMessage = 'Client modifié avec succès !';
        this.errorMessage = '';
        setTimeout(() => this.router.navigate(['/clients']), 2000);
        if (updatedClient.photo) {
          this.clientPhotoUrl = this.clientService.getFullImageUrl(updatedClient.photo);
        }
        this.newPhotoUrl = null;
        this.selectedImageFile = null;
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.errorMessage = error.error?.message || 'Erreur lors de la modification du client ';
        this.successMessage = '';
      }
    });
  }
  
  // Méthode utilitaire pour marquer tous les champs comme touchés
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
  
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    
    if (this.isEditing) {
      this.control.enable(); // Activer le contrôle
      this.modifierClientForm.enable();
    } else {
      this.control.disable(); // Désactiver le contrôle
      this.modifierClientForm.disable();
      this.loadClientData();
    }
  }

  // Annuler et revenir à la liste
  goToClients() {
    if (this.isEditing) {
      this.cancelEditing();
    } else {
      this.router.navigate(['/clients']);
    }
  }

  formatEntreprisePhoneNumber(): void {
    let valeur = this.entrepriseForm.get('telephone')?.value;
    
    // Garantir que l'indicatif est présent
    if (!valeur.startsWith(this.entrepriseIndicatif)) {
      this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      return;
    }
    
    // Nettoyer et formater les chiffres
    const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    const numeroFormate = this.entrepriseIndicatif + chiffres;
    
    // Limiter la longueur
    const maxLength = this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength;
    this.entrepriseForm.get('telephone')?.setValue(numeroFormate.slice(0, maxLength));
  }

  onEntreprisePaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    
    if (paysInfo) {
      // Mettre à jour l'indicatif et la longueur max
      this.entrepriseIndicatif = `${paysInfo.indicatif} `;
      this.entrepriseMaxPhoneLength = paysInfo.longueur;
      
      // Mettre à jour la valeur du téléphone
      const currentPhone = this.entrepriseForm.get('telephone')?.value || '';
      if (!currentPhone.startsWith(this.entrepriseIndicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      }
      
      // Mettre à jour les validateurs
      this.updateEntreprisePhoneValidator(paysInfo.longueur);
    }
  }

  updateEntreprisePhoneValidator(longueur: number): void {
    this.entrepriseForm.controls['telephone'].setValidators([
      Validators.pattern(`^\\${this.entrepriseIndicatif}\\d{${longueur}}$`)
    ]);
    this.entrepriseForm.controls['telephone'].updateValueAndValidity();
  }

  
}
