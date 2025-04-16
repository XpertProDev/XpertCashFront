import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfactureProformaComponent } from './addfacture-proforma.component';

describe('AddfactureProformaComponent', () => {
  let component: AddfactureProformaComponent;
  let fixture: ComponentFixture<AddfactureProformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfactureProformaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfactureProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
