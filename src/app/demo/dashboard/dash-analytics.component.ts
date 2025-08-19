// angular import
import { Component, viewChild } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ProductSaleComponent } from './product-sale/product-sale.component';

// 3rd party import

import { ApexOptions, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from 'src/app/admin-page/SERVICES/produit.service';
import { UserRequest } from 'src/app/admin-page/MODELS/user-request';
import { tap } from 'rxjs';
import { VenteService } from 'src/app/admin-page/SERVICES/VenteService/vente-service';
@Component({
  selector: 'app-dash-analytics',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, ProductSaleComponent],
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export default class DashAnalyticsComponent {
  // public props
  chart = viewChild<ChartComponent>('chart');
  customerChart = viewChild<ChartComponent>('customerChart');
  chartOptions!: Partial<ApexOptions>;
  chartOptions_1!: Partial<ApexOptions>;
  chartOptions_2!: Partial<ApexOptions>;
  chartOptions_3!: Partial<ApexOptions>;
  boutiqueName: string = '';
  userEmail: string = '';

  // constructor
  constructor(private userService: UsersService,
    private http: HttpClient, 
    private produitService: ProduitService, 
    private usersService: UsersService,
    private venteService: VenteService
  ) {
    this.chartOptions = {
      chart: {
        height: 205,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Arts',
          data: [20, 50, 30, 60, 30, 50]
        },
        {
          name: 'Commerce',
          data: [60, 30, 65, 45, 67, 35]
        }
      ],
      legend: {
        position: 'top'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: true,
        min: 10,
        max: 70
      },
      colors: ['#73b4ff', '#59e0c5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#2ed8b6'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      grid: {
        borderColor: '#cccccc3b'
      }
    };
    this.chartOptions_1 = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [39, 10],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#4680ff', '#2ed8b6'],
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      }
    };
    this.chartOptions_2 = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [20, 15],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#fff', '#2ed8b6'],
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      }
    };
    this.chartOptions_3 = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ff5370'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#ff869a'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          data: [45, 35, 60, 50, 85, 70]
        }
      ],
      yaxis: {
        min: 5,
        max: 90
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
  }
  cards: any[] = [];
  carde2: any[] = [];


  ngOnInit() {
    this.updateTotalProduits();
    this.getBoutiqueInfo();
    this.getBoutiqueName();
    // this.checkAccountStatus();


    
  }


  updateTotalProduits() {
    // Initialisation des cartes pour éviter les erreurs
    this.carde2 = [
      {
        background: 'bg-c-blue',
        title: 'Produits en Totals',
        icon: 'icon-shopping-cart',
        text: 'Produits non Stock',
        number: '0',
        no: ''
      },
      {
        background: 'bg-c-blue',
        title: 'Total des Produits',
        icon: 'icon-shopping-cart',
        text: 'XpertCash',
        number: '0',  
        no: '0'
      }
    ];
  
    // Récupérer d'abord les informations utilisateur
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        console.log(userInfo);
  
        // Vérifiez si l'utilisateur a des boutiques
        if (userInfo.boutiques && userInfo.boutiques.length > 0) {
          const boutiqueId = userInfo.boutiques[0].id;
  
          if (!boutiqueId) {
            console.error("L'ID de la boutique est introuvable");
            return;
          }
  
          // Si l'ID de la boutique est trouvé, on peut appeler l'API pour les totaux
          this.produitService.getProduitBoutique(boutiqueId).subscribe(
            (totaux: any) => {
              console.log(totaux);
  
              const totalEnStock = totaux.totalEnStock || 0; 
              const totalNonEnStock = totaux.totalNonEnStock || 0; 
  
              const totalProduits = totalEnStock + totalNonEnStock;
  
              this.carde2 = [
                {
                  background: 'bg-c-blue',
                  title: 'Produits en Totals',
                  icon: 'icon-shopping-cart',
                  text: 'Produits non Stock',
                  number: totalProduits.toString(),
                  no: ''
                },
                {
                  background: 'bg-c-blue',
                  title: 'Total des Produits',
                  icon: 'icon-shopping-cart',
                  text: 'XpertCash',
                  number: totaux.totalEnStock.toString(),  
                  no: totalNonEnStock.toString()
                },
              ];
  
              // Configuration du graphique (apx-chart)
              this.chartOptions_1 = {
                chart: {
                  height: 150,
                  type: 'donut'
                },
                dataLabels: {
                  enabled: false
                },
                plotOptions: {
                  pie: {
                    donut: {
                      size: '75%'
                    }
                  }
                },
                labels: ['Produits en Stock', 'Produits Non en Stock'],
                series: [totalEnStock, totalNonEnStock], 
                legend: {
                  show: false
                },
                tooltip: {
                  theme: 'dark'
                },
                grid: {
                  padding: {
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0
                  }
                },
                colors: ['#4680ff', '#2ed8b6'],
                fill: {
                  opacity: [1, 1]
                },
                stroke: {
                  width: 0
                }
              };
            },
            (error) => {
              console.error('Erreur lors de la récupération des totaux des produits', error);
            }
          );
        } else {
          console.error('Aucune boutique trouvée pour cet utilisateur');
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    );
  }
  

getBoutiqueInfo() {
  this.cards= [
    {
      background: 'bg-c-blue',
      title: 'Produits en Totals',
      icon: 'icon-shopping-cart',
      text: 'Produits non Stock',
      number: '0',
      no: ''
    },
    {
      background: 'bg-c-blue',
      title: 'Total des Produits',
      icon: 'icon-shopping-cart',
      text: 'XpertCash',
      number: '0',  
      no: '0'
    }
  ];
  this.userService.getUserInfo().subscribe(
    (userInfo) => {
      console.log(userInfo);  // Affichez la réponse complète dans la console pour vérifier sa structure

      // Vérifiez si l'utilisateur a des boutiques
      if (userInfo.boutiques && userInfo.boutiques.length > 0) {
        const boutiqueId = userInfo.boutiques[0].id;

        if (!boutiqueId) {
          console.error('L\'ID de la boutique est introuvable');
          return; 
        }

        // Si l'ID de la boutique est trouvé, on peut appeler l'API pour les totaux
        this.produitService.getProduitBoutique(boutiqueId).subscribe(
          (totaux: any) => {
            console.log(totaux);

           
            const totalEnStock = totaux.totalEnStock || 0; 
            const totalNonEnStock = totaux.totalNonEnStock || 0; 

            const totalProduits = totalEnStock + totalNonEnStock;
            const montantTotal = totaux.montantTotal || 0; // Assurez-vous que cette propriété existe dans la réponse
            

            // Mise à jour des cartes avec les totaux des produits
            this.cards = [
              {
                background: 'bg-c-blue',
                title: 'Total des Produits',
                icon: 'icon-shopping-cart',
                text: this.boutiqueName,
                number: totalProduits.toString(),  
                no: ""
              },
              {
                background: 'bg-c-green',
                title: 'Vente du jour',
                icon: 'icon-tag',
                text: 'du mois',
                number: montantTotal.toString(),
                no: '213'
              },
              {
                background: 'bg-c-yellow',
                title: 'Revenue du jour',
                icon: 'icon-repeat',
                text: 'du mois',
                number: '42,56',
                no: '5,032'
              },
              {
                background: 'bg-c-red',
                title: 'Total Profit',
                icon: 'icon-shopping-cart',
                text: 'du mois',
                number: '9,562', 
                no: '542'
              },
             
            ];

            // Configuration du graphique (apx-chart)
            this.chartOptions_1 = {
              chart: {
                height: 150,
                type: 'donut'
              },
              dataLabels: {
                enabled: false
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '75%'
                  }
                }
              },
              labels: ['Produits en Stock', 'Produits Non en Stock'],
              series: [totalEnStock, totalNonEnStock], 
              legend: {
                show: false
              },
              tooltip: {
                theme: 'dark'
              },
              grid: {
                padding: {
                  top: 20,
                  right: 0,
                  bottom: 0,
                  left: 0
                }
              },
              colors: ['#4680ff', '#2ed8b6'],
              fill: {
                opacity: [1, 1]
              },
              stroke: {
                width: 0
              }
            };
          },
          (error) => {
            console.error('Erreur lors de la récupération des totaux des produits', error);
          }
        );
      } else {
        console.error('Aucune boutique trouvée pour cet utilisateur');
      }
      this.venteService.getMontantTotalEntreprise().subscribe(
        (montantTotal: number) => {
          console.log('Montant total de l\'entreprise:', montantTotal);
          this.cards[1].number = montantTotal.toString(); // Exemple de mise à jour
        },
        (error) => {
          console.error('Erreur lors de la récupération du montant total de l\'entreprise', error);
        }
      );
    },
    (error) => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    }
  );
}

getBoutiqueName() {
  this.usersService.getUserInfo().subscribe(
    (userInfo) => {
      console.log(userInfo);
      if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
        console.log(userInfo.boutiques[0]);

        this.boutiqueName = userInfo.boutiques[0].nomBoutique || 'Nom de la boutique non trouvée';
      } else {
        console.error('Aucune boutique trouvée pour cet utilisateur');
        this.boutiqueName = 'Aucune boutique';
      }
    },
    (error) => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    }
  );
}

  images = [
    {
      src: 'assets/images/gallery-grid/img-grd-gal-1.jpg',
      title: 'Old Scooter',
      size: 'PNG-100KB'
    },
    {
      src: 'assets/images/gallery-grid/img-grd-gal-2.jpg',
      title: 'Wall Art',
      size: 'PNG-150KB'
    },
    {
      src: 'assets/images/gallery-grid/img-grd-gal-3.jpg',
      title: 'Microphone',
      size: 'PNG-150KB'
    }
  ];


//   showBlockedPopup: boolean = false;
//   isAdmin: boolean = false;

//  onLogout(): void {
//     this.userService.logoutUser();
//   }
 
  
// private checkAccountStatus(): void {
//   this.userService.getUserInfo()
//     .pipe(tap(user => console.log('[checkAccountStatus] user:', user)))
//     .subscribe((user: UserRequest) => {
//       this.userEmail = user.email;
//       this.isAdmin = user.roleType?.toUpperCase() === 'ADMIN';
//       const now = Date.now();

//       const createdAt = this.isAdmin
//         ? user.createdAt
//         : user.adminCreatedAt;

//       const parsedCreatedAt = createdAt ? Date.parse(createdAt) : null;
//       const diffInHours = parsedCreatedAt ? (now - parsedCreatedAt) / (1000 * 60 * 60) : 0;

//       const adminActivated = this.isAdmin
//         ? user.adminActivated
//         : user.adminActivated;

//       console.log(`[${this.isAdmin ? 'Admin' : 'User'}] adminActivated=${adminActivated}, hours since admin creation=${diffInHours}`);

//       this.showBlockedPopup = adminActivated === false && diffInHours > 24;

//       console.log('=> showBlockedPopup =', this.showBlockedPopup);
//     });
// }

 






}
