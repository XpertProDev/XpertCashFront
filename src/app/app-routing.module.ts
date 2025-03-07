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
        path: 'revenue',
        loadComponent: () => import('./admin-page/revenue/revenue.component').then(m => m.RevenueComponent),
        canActivate: [authGuard]

      },

      // La routing de Facture
      {
        path: 'facture',
        loadComponent: () => import('./admin-page/facture/facture.component').then(m => m.FactureComponent),
        canActivate: [authGuard]

      },

      // La routing de Compte
      {
        path: 'compte',
        loadComponent: () => import('./admin-page/compte/compte.component').then(m => m.CompteComponent),
        canActivate: [authGuard]
      },

      // La routing de Compte
      {
        path: 'profil',
        loadComponent: () => import('./admin-page/profil/profil.component').then(m => m.ProfilComponent),
        canActivate: [authGuard]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
