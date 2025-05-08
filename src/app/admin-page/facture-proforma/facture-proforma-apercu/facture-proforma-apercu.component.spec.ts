import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureProformaApercuComponent } from './facture-proforma-apercu.component';

describe('FactureProformaApercuComponent', () => {
  let component: FactureProformaApercuComponent;
  let fixture: ComponentFixture<FactureProformaApercuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureProformaApercuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureProformaApercuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
