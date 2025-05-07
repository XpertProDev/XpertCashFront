import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { UsersService } from '../../SERVICES/users.service';
import { ProduitService } from '../../SERVICES/produit.service';
import { Produit } from '../../MODELS/produit.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';

@Component({
  selector: 'app-facture-proforma-apercu',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomNumberPipe],
  templateUrl: './facture-proforma-apercu.component.html',
  styleUrls: ['./facture-proforma-apercu.component.scss']
})
export class FactureProformaApercuComponent implements OnInit {
  
  ngOnInit(): void {
    
  }
  
}