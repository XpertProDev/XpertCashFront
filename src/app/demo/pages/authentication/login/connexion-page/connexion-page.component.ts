import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/admin-page/MODELS/utilisateur.model';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.scss'
})
export class ConnexionPageComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  // Propriétés pour la popup
  showPopup: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  popupImage: string = '';
  popupType: 'success' | 'error' = 'success';

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // Ouvre la popup avec titre, message et type (success ou error)
  openPopup(title: string, message: string, type: 'success' | 'error'): void {
    this.popupTitle = title;
    this.popupMessage = message;
    this.popupType = type;
    // Choix de l'image en fonction du type
    if (type === 'success') {
      this.popupImage = 'assets/img/succcccc.png'; // Remplacez par le chemin de votre image de succès
    } else {
      this.popupImage = 'assets/img/error.png'; // Remplacez par le chemin de votre image d'erreur
    }
    this.showPopup = true;
  }

  // Ferme la popup et redirige si l'inscription a réussi
  closePopup(): void {
    this.showPopup = false;
    if (this.popupType === 'success') {
      this.router.navigate(['/accueilll']);
    }
  }

  submitForm(): void {
    
  }

  // Getter pour faciliter l'accès aux contrôles dans le template
  get f() { return this.loginForm.controls; }
}
