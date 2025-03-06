import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockAjustementComponent } from './add-stock-ajustement.component';

describe('AddStockAjustementComponent', () => {
  let component: AddStockAjustementComponent;
  let fixture: ComponentFixture<AddStockAjustementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStockAjustementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStockAjustementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
