import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEditFournisseurComponent } from './detail-edit-fournisseur.component';

describe('DetailEditFournisseurComponent', () => {
  let component: DetailEditFournisseurComponent;
  let fixture: ComponentFixture<DetailEditFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEditFournisseurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEditFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
