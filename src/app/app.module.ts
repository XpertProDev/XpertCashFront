import { LOCALE_ID, NgModule } from '@angular/core';
import {CommonModule, registerLocaleData } from '@angular/common';

// importation de DATE
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { VenteComponent } from './admin-page/vente/vente.component';
import { InscriptionComponent } from './demo/pages/authentication/login/inscription/inscription.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthInterceptor } from './admin-page/SERVICES/auth.interceptor';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [InscriptionComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppComponent, 
    // VenteComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
  ],
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr-FR',  },
    // provideCharts(withDefaultRegisterables())
  ],
})
export class AppModule { 
  // CommandeTableComponent: any
  constructor() {
    registerLocaleData(fr.default);
  }
}
