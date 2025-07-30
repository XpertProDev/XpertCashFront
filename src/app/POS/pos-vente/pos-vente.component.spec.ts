import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosVenteComponent } from './pos-vente.component';

describe('PosVenteComponent', () => {
  let component: PosVenteComponent;
  let fixture: ComponentFixture<PosVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosVenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
