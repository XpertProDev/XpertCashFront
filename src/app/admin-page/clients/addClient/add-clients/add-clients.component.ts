import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import imageCompression from 'browser-image-compression';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-add-clients',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule, 
    AsyncPipe,
  ],
  templateUrl: './add-clients.component.html',
  styleUrl: './add-clients.component.scss'
})
export class AddClientsComponent implements OnInit {


  errorMessage: string = '';
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  selectedFile: File | null | undefined = null;
  imageFile: File | null = null;

  constructor(
    private router: Router,
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

  // Auto complet
  control = new FormControl('');
  streets: string[] = ['Entreprise 1', 'Entreprise 2', 'Entreprise 3'];
  filteredStreets: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
