import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAccueilComponent } from './pos-accueil.component';

describe('PosAccueilComponent', () => {
  let component: PosAccueilComponent;
  let fixture: ComponentFixture<PosAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosAccueilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
