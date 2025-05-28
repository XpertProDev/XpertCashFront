// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { authGuard } from './admin-page/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil',
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
  {
    path: '',
    component: AdminComponent,
    children: [
      /*{
        path: '',
        redirectTo: '/loginPage',
        pathMatch: 'full'
      },*/

      // La routing de loginPage
      {
        path: 'loginPage',
        loadComponent: () => import('./demo/pages/authentication/login/login-page/login-page.component').then(m => m.LoginPageComponent)
      },

      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics.component'),
        canActivate: [authGuard]
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule),
        canActivate: [authGuard]
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart-maps/core-apex.component'),
        canActivate: [authGuard]
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms/form-elements/form-elements.component'),
        canActivate: [authGuard]
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/tables/tbl-bootstrap/tbl-bootstrap.component'),
        canActivate: [authGuard]
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component'),
        canActivate: [authGuard]
      },

      // Ce que j'ai commencer a faire
      // La routing de produits
      {
        path: 'produit',
        loadComponent: () => import('./admin-page/produits/produits.component').then(m => m.ProduitsComponent),
        canActivate: [authGuard]

      },
      {
        path: 'addProduit',
        loadComponent: () => import('./admin-page/produits/add-produit/add-produit.component').then(m => m.AddProduitComponent),
        canActivate: [authGuard]

      },
      {
        path: 'detail-produit/:id',
        loadComponent: () => import('./admin-page/produits/list-produit/list-produit.component').then(m => m.ListProduitComponent),
        canActivate: [authGuard]

      },
      {
        path: 'detail-stock/:id',
        loadComponent: () => import('./admin-page/detail-stock/detail-stock.component').then(m => m.DetailStockComponent),
        canActivate: [authGuard]

      },

      // La routing de entrer
      {
        path: 'entrer',
        loadComponent: () => import('./admin-page/entrer/entrer.component').then(m => m.EntrerComponent),
        canActivate: [authGuard]

      },

      // La routing de produits 
      {
        path: 'vente',
        loadComponent: () => import('./admin-page/vente/vente.component').then(m => m.VenteComponent),
        canActivate: [authGuard]

      },

      // La routing de stocks
      {
        path: 'stocks',
        loadComponent: () => import('./admin-page/stocks/stocks.component').then(m => m.StocksComponent),
        canActivate: [authGuard]

      },

      // La routing de add stocks ajustement
      {
        path: 'stock_ajustement',
        loadComponent: () => import('./admin-page/add-stock-ajustement/add-stock-ajustement.component').then(m => m.AddStockAjustementComponent),
        canActivate: [authGuard]

      },

      // La routing de Revenue
      {
        path: 'clients',
        loadComponent: () => import('./admin-page/clients/clients.component').then(m => m.ClientsComponent),
        canActivate: [authGuard]

      },

      // La routing de Facture
      {
        path: 'fournisseurs',
        loadComponent: () => import('./admin-page/fournisseurs/fournisseurs.component').then(m => m.FournisseursComponent),
        canActivate: [authGuard]

      },

      // La routing de Facture
      {
        path: 'facture',
        loadComponent: () => import('./admin-page/facture/facture.component').then(m => m.FactureComponent),
        canActivate: [authGuard]

      },

      // La routing de utilisateur
      {
        path: 'utilisateur',
        loadComponent: () => import('./admin-page/compte/compte.component').then(m => m.CompteComponent),
        canActivate: [authGuard]
      },

      // La routing de Profil
      {
        path: 'profil',
        loadComponent: () => import('./admin-page/profil/profil.component').then(m => m.ProfilComponent),
        canActivate: [authGuard]
      },

      // La routing de userPermission
      {
        path: 'userPermission/:userId',
        loadComponent: () => import('./admin-page/permission/permission.component').then(m => m.PermissionComponent),
        canActivate: [authGuard]
      },

      // La routing de Boutique
      {
        path: 'boutique',
        loadComponent: () => import('./admin-page/boutique/boutique.component').then(m => m.BoutiqueComponent),
        canActivate: [authGuard]
      },

      // La routing de Compte
      {
        path: 'detail-boutique/:id',
        loadComponent: () => import('./admin-page/detail-boutique/detail-boutique.component').then(m => m.DetailBoutiqueComponent),
        canActivate: [authGuard]
      },

      // La routing de Comptabilite
      {
        path: 'comptabilite',
        loadComponent: () => import('./admin-page/comptabilite/comptabilite.component').then(m => m.ComptabiliteComponent),
        canActivate: [authGuard]
      },

      // La routing de Add client
      {
        path: 'ajouter-client',
        loadComponent: () => import('./admin-page/clients/addClient/add-clients/add-clients.component').then(m => m.AddClientsComponent),
        canActivate: [authGuard]
      },

      // La routing de Add emtreprise client
      {
        path: 'ajouter-entreprise-client',
        loadComponent: () => import('./admin-page/clients/add-entreprise-client/add-entreprise-client.component').then(m => m.AddEntrepriseClientComponent),
        canActivate: [authGuard]
      },

      // Routing detail et edit client
      {
        path: 'detail-client/:id',
        loadComponent: () => import('./admin-page/clients/detail-edit-client/detail-edit-client.component').then(m => m.DetailEditClientComponent),
        canActivate: [authGuard]

      },

      // Routing detail et edit entreprise client
      {
        path: 'detail-entreprise/:id',
        loadComponent: () => import('./admin-page/clients/detail-edit-entreprise-client/detail-edit-entreprise-client.component').then(m => m.DetailEditEntrepriseClientComponent),
        canActivate: [authGuard]

      },

      //Routing Facture proforma
      {
        path: 'facture-proforma',
        loadComponent: () => import('./admin-page/facture-proforma/facture-proforma.component').then(m => m.FactureProformaComponent),
        canActivate: [authGuard]
      },

      {
        path: 'facture-reel',
        loadComponent: () => import('./admin-page/facture-reel/facture-reel.component').then(m => m.FactureReelComponent),
        canActivate: [authGuard]
      },

      {
        path: 'addfacture-proforma',
        loadComponent: () => import('./admin-page/facture-proforma/addfacture-proforma/addfacture-proforma.component').then(m => m.AddfactureProformaComponent),
        canActivate: [authGuard]

      },

      // La routing de facture proforma
      {
        path: 'facture-proforma-details/:id',
        loadComponent: () => import('./admin-page/facture-proforma/detail-facture-proforma/detail-facture-proforma.component').then(m => m.DetailFactureProformaComponent),
        canActivate: [authGuard]
      },

      // La routing de ajouter fournisseur
      {
        path: 'ajouter-fournisseur',
        loadComponent: () => import('./admin-page/fournisseurs/add-fournisseur/add-fournisseur.component').then(m => m.AddFournisseurComponent),
        canActivate: [authGuard]
      },

      // La routing de detail fournisseur
      {
        path: 'detail-fournisseur/:id',
        loadComponent: () => import('./admin-page/fournisseurs/detail-edit-fournisseur/detail-edit-fournisseur.component').then(m => m.DetailEditFournisseurComponent),
        canActivate: [authGuard]
      },

      // Ajouter cette route pour l'aperçu sans ID
      {
        path: 'facture-proforma-apercu',
        loadComponent: () => import('./admin-page/facture-proforma/facture-proforma-apercu/facture-proforma-apercu.component').then(m => m.FactureProformaApercuComponent),
        canActivate: [authGuard]
      },

      // Ajouter cette route pour l'aperçu sans ID
      {
        path: 'detail-facture-proforma-apercu',
        loadComponent: () => import('./admin-page/facture-proforma/detail-facture-proforma-apercu/detail-facture-proforma-apercu.component').then(m => m.DetailFactureProformaApercuComponent),
        canActivate: [authGuard]
      },

      // Conserver la route existante pour les factures existantes
      {
        path: 'facture-proforma-apercu/:id',
        loadComponent: () => import('./admin-page/facture-proforma/facture-proforma-apercu/facture-proforma-apercu.component').then(m => m.FactureProformaApercuComponent),
        canActivate: [authGuard]
      },
      // Facture reel detail
      {
        path: 'facture-reel-details/:id',
        loadComponent: () => import('./admin-page/facture-reel/facture-reel-details/facture-reel-details.component').then(m => m.FactureReelDetailsComponent),
        canActivate: [authGuard]
      },
      // Facture account settings
      {
        path: 'account-settings',
        loadComponent: () => import('./admin-page/account-settings/account-settings.component').then(m => m.AccountSettingsComponent),
        canActivate: [authGuard]
      },
      // Facture style
      {
        path: 'style-facture',
        loadComponent: () => import('./admin-page/facture-proforma/style-facture/style-facture.component').then(m => m.StyleFactureComponent),
        canActivate: [authGuard]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
