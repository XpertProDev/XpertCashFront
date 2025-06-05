import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEditEntrepriseComponent } from './detail-edit-entreprise.component';

describe('DetailEditEntrepriseComponent', () => {
  let component: DetailEditEntrepriseComponent;
  let fixture: ComponentFixture<DetailEditEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEditEntrepriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEditEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
