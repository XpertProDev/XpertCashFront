import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facture-reel-details',
  imports: [],
  templateUrl: './facture-reel-details.component.html',
  styleUrl: './facture-reel-details.component.scss'
})
export class FactureReelDetailsComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(
    private router: Router,
  ){}


  navigateBack() {
    this.router.navigate(['/facture-reel']);
  }

}
