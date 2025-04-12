import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEditEntrepriseClientComponent } from './detail-edit-entreprise-client.component';

describe('DetailEditEntrepriseClientComponent', () => {
  let component: DetailEditEntrepriseClientComponent;
  let fixture: ComponentFixture<DetailEditEntrepriseClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEditEntrepriseClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEditEntrepriseClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
