import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStockComponent } from './detail-stock.component';

describe('DetailStockComponent', () => {
  let component: DetailStockComponent;
  let fixture: ComponentFixture<DetailStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
