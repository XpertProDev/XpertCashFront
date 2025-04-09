
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import imageCompression from 'browser-image-compression';
import { Observable, startWith, map, of } from 'rxjs';
import { Clients } from 'src/app/admin-page/MODELS/clients-model';
import { Entreprise } from 'src/app/admin-page/MODELS/entreprise-model';
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
  showPopup = false;
  entrepriseForm: FormGroup = new FormGroup({});
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  selectedFile: File | null | undefined = null;
  imageFile: File | null = null;
  // Focul controle entreprise // Auto complet
  control = new FormControl();
  filteredOptions: Observable<Entreprise[]> = of([]);
  optionsEntreprise: Entreprise[] = [];
  // Select pour voir entreprise
  isEntrepriseSelected: boolean = true;
  loading = false;


  constructor(
    private router: Router,
    private entrepriseService: EntrepriseService,
    private fb: FormBuilder,
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
          console.error('Erreur lors de la récupération des catégories :', error);
        }
      ); 
    } else {
      console.error('Aucun token trouvé !');
    }
  }

  private _filter(name: string): Entreprise[] {
    const filterValue = name.toLowerCase();
    return this.optionsEntreprise.filter(entreprise => 
      entreprise.nom?.toLowerCase().includes(filterValue));
  }

  displayFnEntreprise(entreprise?: Entreprise): string {
    return entreprise ? entreprise.nom : '';
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

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
  
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

}
