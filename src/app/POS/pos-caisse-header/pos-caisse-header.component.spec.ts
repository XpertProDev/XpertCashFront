import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCaisseHeaderComponent } from './pos-caisse-header.component';

describe('PosCaisseHeaderComponent', () => {
  let component: PosCaisseHeaderComponent;
  let fixture: ComponentFixture<PosCaisseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosCaisseHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosCaisseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
