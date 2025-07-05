// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { authGuard } from './admin-page/guards/auth.guard';
import { guestGuard } from './admin-page/guards/guestGuard';
import { ModuleAccessGuard } from './admin-page/guards/ModuleAccessGuard';
import { PricingCardComponent } from './admin-page/pricing-card/pricing-card.component';
import { PaymentFormComponent } from './admin-page/payment-form/payment-form.component';


const routes: Routes = [
  // Routes publiques (non authentifiées)
  {
    path: '',
    component: GuestComponent,
    canActivate: [guestGuard], // Empêche l'accès si déjà connecté
    children: [
      {
        path: '',
        loadComponent: () => import('./demo/pages/authentication/login/login-page/login-page.component').then(m => m.LoginPageComponent)
      },
      {
        path: 'inscription',
        loadComponent: () => import('./demo/pages/authentication/login/inscription/inscription.component').then(m => m.InscriptionComponent)
      },
      {
        path: 'connexion',
        loadComponent: () => import('./demo/pages/authentication/login/connexion-page/connexion-page.component').then(m => m.ConnexionPageComponent)
      },
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/pages/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/pages/authentication/sign-in/sign-in.component')
      }
    ]
  },

  // Routes privées (authentifiées)
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGuard], // Protection globale
    children: [
      // Redirection par défaut
      {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
      },

      // Vos routes protégées
      {
        path: 'loginPage',
        loadComponent: () => import('./demo/pages/authentication/login/login-page/login-page.component').then(m => m.LoginPageComponent)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics.component')
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart-maps/core-apex.component')
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms/form-elements/form-elements.component')
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/tables/tbl-bootstrap/tbl-bootstrap.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      },
      {
        path: 'produit',
        loadComponent: () => import('./admin-page/produits/produits.component').then(m => m.ProduitsComponent)
      },
      {
        path: 'addProduit',
        loadComponent: () => import('./admin-page/produits/add-produit/add-produit.component').then(m => m.AddProduitComponent)
      },
      {
        path: 'detail-produit/:id',
        loadComponent: () => import('./admin-page/produits/list-produit/list-produit.component').then(m => m.ListProduitComponent)
      },
      {
        path: 'detail-stock/:id',
        loadComponent: () => import('./admin-page/detail-stock/detail-stock.component').then(m => m.DetailStockComponent)
      },
      {
        path: 'entrer',
        loadComponent: () => import('./admin-page/entrer/entrer.component').then(m => m.EntrerComponent)
      },
      {
        path: 'vente',
        loadComponent: () => import('./admin-page/vente/vente.component').then(m => m.VenteComponent)
      },
      {
        path: 'stocks',
        loadComponent: () => import('./admin-page/stocks/stocks.component').then(m => m.StocksComponent)
      },
      {
        path: 'stock_ajustement',
        loadComponent: () => import('./admin-page/add-stock-ajustement/add-stock-ajustement.component').then(m => m.AddStockAjustementComponent)
      },
      {
        path: 'clients',
        loadComponent: () => import('./admin-page/clients/clients.component').then(m => m.ClientsComponent)
      },
      {
        path: 'fournisseurs',
        loadComponent: () => import('./admin-page/fournisseurs/fournisseurs.component').then(m => m.FournisseursComponent)
      },
      {
        path: 'facture',
        loadComponent: () => import('./admin-page/facture/facture.component').then(m => m.FactureComponent)
      },
      {
        path: 'utilisateur',
        loadComponent: () => import('./admin-page/compte/compte.component').then(m => m.CompteComponent)
      },
      {
        path: 'profil',
        loadComponent: () => import('./admin-page/profil/profil.component').then(m => m.ProfilComponent)
      },
      {
        path: 'userPermission/:userId',
        loadComponent: () => import('./admin-page/permission/permission.component').then(m => m.PermissionComponent)
      },
      {
        path: 'boutique',
        loadComponent: () => import('./admin-page/boutique/boutique.component').then(m => m.BoutiqueComponent)
      },
      {
        path: 'detail-boutique/:id',
        loadComponent: () => import('./admin-page/detail-boutique/detail-boutique.component').then(m => m.DetailBoutiqueComponent)
      },
      {
        path: 'comptabilite',
        loadComponent: () => import('./admin-page/comptabilite/comptabilite.component').then(m => m.ComptabiliteComponent)
      },
      {
        path: 'ajouter-client',
        loadComponent: () => import('./admin-page/clients/addClient/add-clients/add-clients.component').then(m => m.AddClientsComponent)
      },
      {
        path: 'ajouter-entreprise-client',
        loadComponent: () => import('./admin-page/clients/add-entreprise-client/add-entreprise-client.component').then(m => m.AddEntrepriseClientComponent)
      },
      {
        path: 'detail-client/:id',
        loadComponent: () => import('./admin-page/clients/detail-edit-client/detail-edit-client.component').then(m => m.DetailEditClientComponent)
      },
      {
        path: 'detail-entreprise-client/:id',
        loadComponent: () => import('./admin-page/clients/detail-edit-entreprise-client/detail-edit-entreprise-client.component').then(m => m.DetailEditEntrepriseClientComponent)
      },
      {
        path: 'detail-entreprise/:id',
        loadComponent: () => import('./admin-page/clients/detail-edit-entreprise/detail-edit-entreprise.component').then(m => m.DetailEditEntrepriseComponent)
      },
      {
        path: 'facture-proforma',
        loadComponent: () => import('./admin-page/facture-proforma/facture-proforma.component').then(m => m.FactureProformaComponent)
      },
      {
        path: 'facture-reel',
        loadComponent: () => import('./admin-page/facture-reel/facture-reel.component').then(m => m.FactureReelComponent)
      },
      {
        path: 'addfacture-proforma',
        loadComponent: () => import('./admin-page/facture-proforma/addfacture-proforma/addfacture-proforma.component').then(m => m.AddfactureProformaComponent)
      },
      {
        path: 'facture-proforma-details/:id',
        loadComponent: () => import('./admin-page/facture-proforma/detail-facture-proforma/detail-facture-proforma.component').then(m => m.DetailFactureProformaComponent),
        canActivate: [ModuleAccessGuard],
        data: { codeModule: 'GESTION_FACTURATION' }
      },
      {
        path: 'ajouter-fournisseur',
        loadComponent: () => import('./admin-page/fournisseurs/add-fournisseur/add-fournisseur.component').then(m => m.AddFournisseurComponent)
      },
      {
        path: 'detail-fournisseur/:id',
        loadComponent: () => import('./admin-page/fournisseurs/detail-edit-fournisseur/detail-edit-fournisseur.component').then(m => m.DetailEditFournisseurComponent)
      },
      {
        path: 'facture-proforma-apercu',
        loadComponent: () => import('./admin-page/facture-proforma/facture-proforma-apercu/facture-proforma-apercu.component').then(m => m.FactureProformaApercuComponent)
      },
      {
        path: 'detail-facture-proforma-apercu',
        loadComponent: () => import('./admin-page/facture-proforma/detail-facture-proforma-apercu/detail-facture-proforma-apercu.component').then(m => m.DetailFactureProformaApercuComponent)
      },
      {
        path: 'facture-proforma-apercu/:id',
        loadComponent: () => import('./admin-page/facture-proforma/facture-proforma-apercu/facture-proforma-apercu.component').then(m => m.FactureProformaApercuComponent)
      },
      {
        path: 'facture-reel-details/:id',
        loadComponent: () => import('./admin-page/facture-reel/facture-reel-details/facture-reel-details.component').then(m => m.FactureReelDetailsComponent),
        canActivate: [ModuleAccessGuard],
        data: { codeModule: 'GESTION_FACTURATION' }
      },
      {
        path: 'account-settings',
        loadComponent: () => import('./admin-page/account-settings/account-settings.component').then(m => m.AccountSettingsComponent)
      },
      {
        path: 'style-facture',
        loadComponent: () => import('./admin-page/facture-proforma/style-facture/style-facture.component').then(m => m.StyleFactureComponent)
      },
      {
        path: 'pricing/:moduleCode', 
        component: PricingCardComponent 
      },
      // { 
      //   path: 'payment-form/:moduleCode', 
      //   loadComponent: () => import('./admin-page/payment-form/payment-form.component').then(m => m.PaymentFormComponent)
      // },
      {
        path: 'payment-form/:plan',
        component: PaymentFormComponent
      }
      // {
      //   path: 'payment-form',
      //   loadComponent: () => import('./admin-page/payment-form/payment-form.component').then(m => m.PaymentFormComponent)
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}