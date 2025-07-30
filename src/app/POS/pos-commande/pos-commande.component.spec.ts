import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCommandeComponent } from './pos-commande.component';

describe('PosCommandeComponent', () => {
  let component: PosCommandeComponent;
  let fixture: ComponentFixture<PosCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosCommandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
