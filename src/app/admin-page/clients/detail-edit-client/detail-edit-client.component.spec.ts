import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEditClientComponent } from './detail-edit-client.component';

describe('DetailEditClientComponent', () => {
  let component: DetailEditClientComponent;
  let fixture: ComponentFixture<DetailEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEditClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
