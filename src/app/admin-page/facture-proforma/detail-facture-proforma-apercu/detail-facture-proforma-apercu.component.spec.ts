import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFactureProformaApercuComponent } from './detail-facture-proforma-apercu.component';

describe('DetailFactureProformaApercuComponent', () => {
  let component: DetailFactureProformaApercuComponent;
  let fixture: ComponentFixture<DetailFactureProformaApercuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFactureProformaApercuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFactureProformaApercuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
