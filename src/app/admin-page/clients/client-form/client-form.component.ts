import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import imageCompression from 'browser-image-compression';
import { Observable, of, BehaviorSubject, combineLatest, startWith, map } from 'rxjs';
import { Clients } from '../../MODELS/clients-model';
import { Entreprise } from '../../MODELS/entreprise-model';
import { ClientService } from '../../SERVICES/client-service';
import { EntrepriseService } from '../../SERVICES/entreprise-service';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule, 
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {
  @Output() clientAjoute = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  errorMessage: string = '';
  errorMessageApi: string = '';
  successMessage = '';
  clientForm!: FormGroup;
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
  isLoading: boolean = false;
  indicatif: string = '';
  maxPhoneLength: number = 0;
  entrepriseIndicatif: string = '';
  entrepriseMaxPhoneLength: number = 0;

  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
    'Mali': { indicatif: '+223', longueur: 8 },
    'Sénégal': { indicatif: '+221', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 }
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService,
    private clientService: ClientService,
  ) {}

  onPaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
  
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `;
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
  
      if (!this.clientForm.get('telephone')?.value.startsWith(this.indicatif)) {
        this.clientForm.get('telephone')?.setValue(this.indicatif);
      }
  
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }

  updatePhoneValidator(longueur: number): void {
    // on impose exactement {longueur} chiffres après l’indicatif
    const regex = new RegExp(`^\\${this.indicatif}\\d{${longueur}}$`);
    this.clientForm.controls['telephone'].setValidators([
      Validators.required,
      Validators.pattern(regex)
    ]);
    this.clientForm.controls['telephone'].updateValueAndValidity();
  }
  

  formatPhoneNumber(): void {
    let valeur = this.clientForm.get('telephone')?.value;
    
    if (!valeur.startsWith(this.indicatif)) {
      this.clientForm.get('telephone')?.setValue(this.indicatif);
      return;
    }
  
    const chiffres = valeur.replace(this.indicatif, '').replace(/\D/g, '');
    const numeroFormate = this.indicatif + chiffres;
    this.clientForm.get('telephone')?.setValue(numeroFormate.slice(0, this.indicatif.length + this.maxPhoneLength));
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

  goToStock() {
    this.router.navigate(['/clients']);
  }

  ngOnInit() {
    this.getListEntreprise();
    this.initEntreprise();
    this.getClientForm();
    // this.getEntrepriseForm();
    this.loadEntreprises();
  }

  getClientForm() {
    this.clientForm = this.fb.group({
      nomComplet: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      telephone: ['', Validators.required],
      adresse: [''],
      poste: [''],
      pays: [''],
      ville: ['']
    });
  }

  // getEntrepriseForm() {
  //   this.entrepriseForm = this.fb.group({
  //     nom: ['', Validators.required],
  //     email: ['', Validators.email],
  //     telephone: [''],
  //     adresse: ['']
  //   });
  // }

  onEntreprisePaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
  
    if (paysInfo) {
      this.entrepriseIndicatif = `${paysInfo.indicatif} `;
      this.entrepriseMaxPhoneLength = this.entrepriseIndicatif.length + paysInfo.longueur;
  
      if (!this.entrepriseForm.get('telephone')?.value.startsWith(this.entrepriseIndicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      }
  
      this.updateEntreprisePhoneValidator(paysInfo.longueur);
    }
  }

  updateEntreprisePhoneValidator(longueur: number): void {
    this.entrepriseForm.controls['telephone'].setValidators([
      Validators.pattern(`^\\${this.entrepriseIndicatif}\\d{${longueur}}$`)
    ]);
    this.entrepriseForm.controls['telephone'].updateValueAndValidity();
  }
  
  formatEntreprisePhoneNumber(): void {
    let valeur = this.entrepriseForm.get('telephone')?.value;
    
    if (!valeur.startsWith(this.entrepriseIndicatif)) {
      this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      return;
    }
  
    const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    const numeroFormate = this.entrepriseIndicatif + chiffres;
    this.entrepriseForm.get('telephone')?.setValue(numeroFormate.slice(0, this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength));
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
  openPopup() { this.showPopup = true; }
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
  ajouterClient() {
    this.errorMessage = '';
    this.successMessage = '';
    this.entrepriseRequiredError = false;

    // Vérification de la sélection d'entreprise
    if (this.isEntrepriseSelected) {
      const entrepriseSelectionnee = this.control.value;
      if (!entrepriseSelectionnee || !entrepriseSelectionnee.id) {
        this.entrepriseRequiredError = true;
        return;
      }
    }

    if (this.clientForm.invalid) {
      this.errorMessage = 'Veuillez corriger les erreurs du formulaire.';
      return;
    }

    this.isLoading = true; // Active le loading

    const client: Clients = this.clientForm.value;

    if (this.isEntrepriseSelected) {
      const selected = this.control.value as Entreprise;
      if (selected && selected.id) {
        client.entrepriseClient = { id: selected.id } as Entreprise;
      }
    }

    this.clientService.addClient(client).subscribe({
      next: (response: { message: string; clientId: string; createdAt: string }) => {
        this.isLoading = false;
        this.clientForm.reset();
        this.isEntrepriseSelected = false;

        // Convertir clientId en nombre
        const clientIdNum = parseInt(response.clientId, 10);

        // Vérifier si la conversion a réussi
        if (isNaN(clientIdNum)) {
          console.error('ID client invalide reçu :', response.clientId);
          this.errorMessage = 'Erreur : ID du client invalide';
          return;
        }

        // Créer un objet Clients avec l'ID converti
        const newClient: Clients = {
          id: clientIdNum, // Maintenant un nombre
          nomComplet: client.nomComplet,
          adresse: client.adresse,
          email: client.email,
          telephone: client.telephone,
          poste: client.poste,
          pays: client.pays,
          ville: client.ville,
          entrepriseClient: client.entrepriseClient,
        };

        // Émettre l'événement avec le nouveau client
        this.clientAjoute.emit(newClient);

        this.closeForm();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Erreur lors de la création';
      }
    });
  }

  // Annuler et revenir à la liste
  goToClients() {
    this.router.navigate(['/clients']);
  }

  closeForm(): void {
    this.close.emit();
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
}
