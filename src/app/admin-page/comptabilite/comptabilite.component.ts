import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/theme/shared/shared.module';

// 3rd party import

import {  NgApexchartsModule } from 'ng-apexcharts';
import { ProductSaleComponent } from '../produits/product-sale/product-sale.component';

@Component({
  selector: 'app-comptabilite',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './comptabilite.component.html',
  styleUrl: './comptabilite.component.scss'
})

export class ComptabiliteComponent implements OnInit {
  activeTab: string = 'ventes';


  constructor(
  
  ) {}

  ngOnInit(): void {
   
  }

  tabs = [
    { name: 'ventes', label: 'Ventes', icon: 'fas fa-shopping-cart' },
    { name: 'facturation', label: 'Facturation', icon: 'fas fa-file-invoice' },
    { name: 'depenses', label: 'Dépenses', icon: 'fas fa-money-bill-wave' },
    { name: 'clients', label: 'Clients', icon: 'fas fa-users' },
    { name: 'rapports', label: 'Rapports', icon: 'fas fa-chart-pie' }
  ];


}
