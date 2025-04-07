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
import { CodeInputModule } from 'angular-code-input';
import localeDe from '@angular/common/locales/de';
import { CustomNumberPipe } from './admin-page/MODELS/customNumberPipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';


registerLocaleData(localeDe);


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    CustomNumberPipe,
    UnlockDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    CodeInputModule,
  ], 
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr-FR',  },
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
