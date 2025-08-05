import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosPaiementComponent } from './pos-paiement.component';

describe('PosPaiementComponent', () => {
  let component: PosPaiementComponent;
  let fixture: ComponentFixture<PosPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosPaiementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
