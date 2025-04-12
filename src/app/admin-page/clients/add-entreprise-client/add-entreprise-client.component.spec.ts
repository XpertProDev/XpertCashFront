import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntrepriseClientComponent } from './add-entreprise-client.component';

describe('AddEntrepriseClientComponent', () => {
  let component: AddEntrepriseClientComponent;
  let fixture: ComponentFixture<AddEntrepriseClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEntrepriseClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntrepriseClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
