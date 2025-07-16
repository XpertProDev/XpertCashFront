
import { CommonModule } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import imageCompression from 'browser-image-compression';
import { Observable, startWith, map, of, BehaviorSubject, combineLatest, switchMap, throwError } from 'rxjs';
import { Clients } from 'src/app/admin-page/MODELS/clients-model';
import { Entreprise } from 'src/app/admin-page/MODELS/entreprise-model';
import { ClientService } from 'src/app/admin-page/SERVICES/client-service';
import { EntrepriseService } from 'src/app/admin-page/SERVICES/entreprise-service';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';

@Component({
  selector: 'app-add-clients',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule, 
  ],
  templateUrl: './add-clients.component.html',
  styleUrl: './add-clients.component.scss'
})
export class AddClientsComponent implements OnInit {
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
  'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 },
  'Burkina Faso': { indicatif: '+226', longueur: 8 },
  'Niger': { indicatif: '+227', longueur: 8 },
  'France': { indicatif: '+33', longueur: 9 },
  'Belgique': { indicatif: '+32', longueur: 9 },
  'Suisse': { indicatif: '+41', longueur: 9 },
  'Canada': { indicatif: '+1', longueur: 10 },
  'États-Unis': { indicatif: '+1', longueur: 10 },
  'Maroc': { indicatif: '+212', longueur: 9 },
  'Algérie': { indicatif: '+213', longueur: 9 },
  'Tunisie': { indicatif: '+216', longueur: 8 },
  'Togo': { indicatif: '+228', longueur: 8 },
  'Bénin': { indicatif: '+229', longueur: 8 },
  'Guinée': { indicatif: '+224', longueur: 9 },
  'Tchad': { indicatif: '+235', longueur: 8 },
  'Cameroun': { indicatif: '+237', longueur: 9 },
  'RDC': { indicatif: '+243', longueur: 9 },
  'Gabon': { indicatif: '+241', longueur: 9 },
  'Afrique du Sud': { indicatif: '+27', longueur: 9 },
  'Rwanda': { indicatif: '+250', longueur: 9 },
  'Kenya': { indicatif: '+254', longueur: 9 },
  'Nigéria': { indicatif: '+234', longueur: 10 },
  'Ghana': { indicatif: '+233', longueur: 9 },
  'Éthiopie': { indicatif: '+251', longueur: 9 },
  'Égypte': { indicatif: '+20', longueur: 10 },
  'Inde': { indicatif: '+91', longueur: 10 },
  'Chine': { indicatif: '+86', longueur: 11 },
  'Mexique': { indicatif: '+52', longueur: 10 },
  'Allemagne': { indicatif: '+49', longueur: 10 },
  'Espagne': { indicatif: '+34', longueur: 9 },
  'Italie': { indicatif: '+39', longueur: 10 },
  'Royaume-Uni': { indicatif: '+44', longueur: 10 },
  'Pays-Bas': { indicatif: '+31', longueur: 9 },
  'Portugal': { indicatif: '+351', longueur: 9 }
  };

  paysKeys: string[] = Object.keys(this.paysIndicatifs);

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService,
    private clientService: ClientService,
    private usersService: UsersService,
  ) {}

onPaysChange(event: any): void {
  const paysSelectionne = event.target.value;
  const paysInfo = this.paysIndicatifs[paysSelectionne];

  if (!paysInfo) return;

  this.indicatif = paysInfo.indicatif;
  this.maxPhoneLength = paysInfo.longueur;

  const ctrl = this.clientForm.get('telephone');
  let currentValue = ctrl?.value ?? '';

  const prefix = this.indicatif.replace(/\D/g, '');
  const valueNumerique = currentValue.replace(/\D/g, '');

  if (!valueNumerique.startsWith(prefix)) {
    ctrl?.setValue(this.indicatif);
  } else {
    const reste = valueNumerique.slice(prefix.length, prefix.length + this.maxPhoneLength);
    ctrl?.setValue(this.indicatif + reste);
  }

  this.updatePhoneValidator(paysInfo.longueur);
}



private updatePhoneValidator(longueur: number): void {
  const ctrl = this.clientForm.get('telephone');
  const regex = new RegExp(`^\\${this.indicatif}\\s?\\d{${longueur}}$`);
  ctrl?.setValidators([Validators.required, Validators.pattern(regex)]);
  ctrl?.updateValueAndValidity();
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
    const token = localStorage.getItem('accessToken') || '';
    if (!token) return;

    this.entrepriseService.getListEntreprise().subscribe(
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
  this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token valide trouvé !');
        return throwError(() => new Error('Aucun token trouvé'));
      }
      return this.entrepriseService.getListEntreprise();
    })
  ).subscribe({
    next: (entreprises) => {
      console.log('Entreprises reçues depuis l\'API :', entreprises);
      this.optionsEntreprise$.next(entreprises); 

      this.filteredOptions = this.control.valueChanges.pipe(
        startWith<string | Entreprise>(''),
        map(value => (value ? (typeof value === 'string' ? value : value.nom) : '')),
        map(name => (name ? this._filter(name, this.optionsEntreprise$.value) : this.optionsEntreprise$.value.slice()))
      );
    },
    error: (error) => {
      console.error('Erreur lors de la récupération des entreprises :', error);
    }
  });
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
      prefixe: this.entrepriseForm.value.prefixe,
      suffixe: this.entrepriseForm.value.suffixe,
      tauxTva: this.entrepriseForm.value.tauxTva,
      signaturNum: this.entrepriseForm.value.signaturNum,
      cachetNum: this.entrepriseForm.value.cachetNum




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
  
    // Simuler un délai (optionnel)
    setTimeout(() => {
      this.clientService.addClient(client).subscribe({
        next: res => {
          this.isLoading = false; // Désactive le loading
          this.successMessage = res.message;
          this.clientForm.reset();
          this.isEntrepriseSelected = false;
          this.goToClients();
        },
        error: err => {
          this.isLoading = false; // Désactive le loading en cas d'erreur
          this.errorMessage = err.error?.error || 'Erreur lors de la création';
        }
      });
    }, 2000); // Retirez le setTimeout si non nécessaire
  }

  // Annuler et revenir à la liste
  goToClients() {
    this.router.navigate(['/clients']);
  }

  navigateBack() {
    this.router.navigate(['/clients'])
  }

}
