import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './demo/pages/authentication/login/inscription/inscription.component';
import { CustomNumberPipe } from './admin-page/MODELS/customNumberPipe';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';
import { AuthInterceptor } from './admin-page/SERVICES/auth.interceptor';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatInputModule }           from '@angular/material/input';
import { MatSlideToggleModule }     from '@angular/material/slide-toggle';
import { MatDialogModule }          from '@angular/material/dialog';
import { MatButtonModule }          from '@angular/material/button';
import { CodeInputModule }          from 'angular-code-input';
import { DragDropModule }           from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { ProduitFormComponent } from './admin-page/produits/produit-form/produit-form.component';
import { AddfactureProformaComponent } from './admin-page/facture-proforma/addfacture-proforma/addfacture-proforma.component';
import { ClientFormComponent } from './admin-page/clients/client-form/client-form.component';
import { EntrepriseFormComponent } from './admin-page/clients/entreprise-form/entreprise-form.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { RouterModule } from '@angular/router';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    CustomNumberPipe,
    UnlockDialogComponent,
    ProduitFormComponent,
    AddfactureProformaComponent,
    ClientFormComponent,
    EntrepriseFormComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    CodeInputModule,
    DragDropModule,
    MatSelectModule,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    RouterModule
  ],
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
