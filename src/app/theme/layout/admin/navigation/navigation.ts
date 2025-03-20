export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/analytics',
        icon: 'feather icon-home'
      }
    ]
  },

  {
    id: 'page',
    title: 'Page',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'produit',
        title: 'Ventes',
        type: 'item',
        url: '/vente',
        classes: 'nav-item',
        icon: 'feather icon-shopping-cart'
      },
      {
        id: 'produit',
        title: 'Produits',
        type: 'item',
        url: '/produit',
        icon: 'feather icon-tag'
        //classes: 'nav-item',
      },
      {
        id: 'stock',
        title: 'Mes Stocks',
        type: 'item',
        url: '/stocks',
        classes: 'nav-item',
        icon: 'feather icon-clipboard'
      },
      {
        id: 'clients',
        title: 'Clients',
        type: 'item',
        url: '/clients',
        classes: 'nav-item',
        icon: 'feather icon-users'
      },
      {
        id: 'fournisseurs',
        title: 'Fournisseurs',
        type: 'item',
        url: '/fournisseurs',
        classes: 'nav-item',
        icon: 'feather icon-briefcase'
      },
      {
        id: 'facture',
        title: 'Factures',
        type: 'item',
        url: '/facture',
        classes: 'nav-item',
        icon: 'feather icon-file'
      },

      // Pour les compte
      /*{
        id: 'compte',
        title: 'Comptes',
        type: 'item',
        url: '/compte',
        classes: 'nav-item',
        icon: 'feather icon-bell'
      },*/
    ]
  },

  // Produit et entrer 
  /*
  {
    id: 'produitentrer',
    title: 'produitentrer',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'basic',
        title: 'Produit & Entrer',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'produit',
            title: 'Produits',
            type: 'item',
            url: '/produit',
            //classes: 'nav-item',
          },
          // {
          //   id: 'addProduit',
          //   title: 'Ajouter produit',
          //   type: 'item',
          //   url: '/addProduit',
          //   //classes: 'nav-item',
          // },
          {
            id: 'entrer',
            title: 'Entrer',
            type: 'item',
            url: '/entrer',
            //classes: 'nav-item',
          },
        ]
      }
    ]
  },
  */



  // COMPTE 
  {
    id: 'Comptes',
    title: 'Comptes',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'basic',
        title: 'Parametres',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          // {
          //   id: 'compte',
          //   title: 'Comptes',
          //   type: 'item',
          //   url: '/compte',
          //   //classes: 'nav-item',
          // },
          // {
          //   id: 'profil',
          //   title: 'Profil',
          //   type: 'item',
          //   url: '/profil',
          //   //classes: 'nav-item',
          // },
        ]
      }
    ]
  },


  // FIN 
  /*
  {
    id: 'ui-component',
    title: 'Ui Component',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'basic',
        title: 'Component',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/component/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/component/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumb & Pagination',
            type: 'item',
            url: '/component/breadcrumb-paging'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/component/collapse'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/component/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/component/typography'
          }
        ]
      }
    ]
  },
  {
    id: 'Authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'accueil',
        title: 'Accueil',
        type: 'item',
        url: '/auth/login/loginPage',
        icon: 'feather icon-at-sign',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'inscription',
        title: 'Inscription',
        type: 'item',
        url: '/auth/inscription',
        icon: 'feather icon-at-sign',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'connexion',
        title: 'Connection',
        type: 'item',
        url: '/auth/connexion',
        icon: 'feather icon-at-sign',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'signup',
        title: 'Sign up',
        type: 'item',
        url: '/auth/signup',
        icon: 'feather icon-at-sign',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'signin',
        title: 'Sign in',
        type: 'item',
        url: '/auth/signin',
        icon: 'feather icon-log-in',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'chart',
    title: 'Chart',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'apexchart',
        title: 'ApexChart',
        type: 'item',
        url: '/chart',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
  },
  {
    id: 'forms & tables',
    title: 'Forms & Tables',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms',
        title: 'Basic Forms',
        type: 'item',
        url: '/forms',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'tables',
        title: 'tables',
        type: 'item',
        url: '/tables',
        classes: 'nav-item',
        icon: 'feather icon-server'
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'menu-level',
        title: 'Menu Levels',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Menu Level 2.1',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'menu-level-2.2',
            title: 'Menu Level 2.2',
            type: 'collapse',
            children: [
              {
                id: 'menu-level-2.2.1',
                title: 'Menu Level 2.2.1',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-2.2.2',
                title: 'Menu Level 2.2.2',
                type: 'item',
                url: 'javascript:',
                external: true
              }
            ]
          }
        ]
      }
    ]
  }
    */
];
