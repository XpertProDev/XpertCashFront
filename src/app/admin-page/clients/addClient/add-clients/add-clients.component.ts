
import { CommonModule } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import imageCompression from 'browser-image-compression';
import { Observable, startWith, map, of } from 'rxjs';
import { Clients } from 'src/app/admin-page/MODELS/clients-model';
import { Entreprise } from 'src/app/admin-page/MODELS/entreprise-model';
import { ClientService } from 'src/app/admin-page/SERVICES/client-service';
import { EntrepriseService } from 'src/app/admin-page/SERVICES/entreprise-service';

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
  // entrepriseForm: FormGroup = new FormGroup({});
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  selectedFile: File | null | undefined = null;
  imageFile: File | null = null;
  // Focul controle entreprise // Auto complet
  control = new FormControl();
  filteredOptions: Observable<Entreprise[]> = of([]);
  optionsEntreprise: Entreprise[] = [];
  // Select pour voir entreprise
  // isEntrepriseSelected: boolean = true;
  loading = false;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService,
    private clientService: ClientService,
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
    this.getEntrepriseForm();
    this.loadEntreprises();
  }

  getClientForm() {
    this.clientForm = this.fb.group({
      nomComplet: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      telephone: [''],
      adresse: ['']
    });
  }

  getEntrepriseForm() {
    this.entrepriseForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', Validators.email],
      telephone: [''],
      adresse: ['']
    });
  }

  private loadEntreprises() {
    const token = localStorage.getItem('authToken') || '';
    if (!token) {
      console.error('Aucun token trouvé pour récupérer les entreprises');
      return;
    }
  
    this.entrepriseService.getListEntreprise(token).subscribe(
      (list: Entreprise[]) => {
        this.optionsEntreprise = list;
        this.filteredOptions = this.control.valueChanges.pipe(
          startWith<string | Entreprise>(''),
          map(value => typeof value === 'string' ? value : value.nom),
          map(name => name ? this._filter(name) : this.optionsEntreprise.slice())
        );
      },
      err => {
        console.error('Erreur lors de la récupération des entreprises :', err);
        this.errorMessage = err.error?.error || 'Erreur chargement entreprises';
      }
    );
  }

  getListEntreprise() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.entrepriseService.getListEntreprise(token).subscribe(
        (entreprises) => {
          console.log('Entreprise reçues depuis l\'API :', entreprises);
          this.optionsEntreprise = entreprises;
          this.filteredOptions = this.control.valueChanges.pipe(
            startWith<string | Entreprise>(''),
            map(value => (value ? (typeof value === 'string' ? value : value.nom) : '')),
            map(name => (name ? this._filter(name) : this.optionsEntreprise.slice()))
          );
        }, 
        (error) => {
          console.error('Erreur lors de la récupération des entreporises :', error);
        }
      ); 
    } else {
      console.error('Aucun token trouvé !');
    }
  }

  private _filter(name: string): Entreprise[] {
    const filterValue = name.toLowerCase();
    return this.optionsEntreprise.filter(e =>
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
      email: [''],
      telephone: [''],
      adresse: ['']
    });
  }

  ajouterEntreprise() {
    if (this.entrepriseForm.invalid) return;
  
    // this.loading = true;
    this.errorMessageApi = ''; // Réinitialiser le message d'erreur

    const newEntreprise: Entreprise = {
      nom: this.entrepriseForm.value.nom,
      email: this.entrepriseForm.value.email,
      telephone: this.entrepriseForm.value.telephone,
      adresse: this.entrepriseForm.value.adresse
    };
  
    this.entrepriseService.addEntreprise(newEntreprise).subscribe({
      next: (createdEntreprise) => {
        // Mettre à jour la liste
        this.optionsEntreprise = [...this.optionsEntreprise, createdEntreprise];
        this.control.setValue(createdEntreprise);
        this.closePopup();
        // this.loading = false;
        this.entrepriseForm.reset();
      },
      error: (error) => {
        // this.loading = false;
      // Récupérer le message d'erreur proprement
      this.errorMessageApi = error.message || 'Erreur lors de la création';
      setTimeout(() => this.errorMessageApi = '', 5000);
      }
    });
  }

  // Soumission du formulaire client
  ajouterClient() {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.clientForm.invalid) {
      this.errorMessage = 'Veuillez corriger les erreurs du formulaire.';
      return;
    }

    const client: Clients = this.clientForm.value;
    if (this.isEntrepriseSelected) {
      const selected = this.control.value as Entreprise;
      if (selected && selected.id) {
        client.entrepriseClient = { id: selected.id } as Entreprise;
      } else {
        // nouvelle entreprise créée via popup
        client.entrepriseClient = this.control.value;
      }
    }

    this.clientService.addClient(client).subscribe({
      next: res => {
        this.successMessage = res.message;
        // reset + navigation si besoin
        this.clientForm.reset();
        this.isEntrepriseSelected = false;
        this.goToClients();
      },
      error: err => {
        this.errorMessage = err.error?.error || 'Erreur lors de la création';
      }
    });
  }

  // Annuler et revenir à la liste
  goToClients() {
    this.router.navigate(['/clients']);
  }

}
