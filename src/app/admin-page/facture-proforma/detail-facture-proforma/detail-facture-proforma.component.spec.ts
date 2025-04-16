import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFactureProformaComponent } from './detail-facture-proforma.component';

describe('DetailFactureProformaComponent', () => {
  let component: DetailFactureProformaComponent;
  let fixture: ComponentFixture<DetailFactureProformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFactureProformaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFactureProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
