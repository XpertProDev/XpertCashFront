import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCaisseComponent } from './pos-caisse.component';

describe('PosCaisseComponent', () => {
  let component: PosCaisseComponent;
  let fixture: ComponentFixture<PosCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosCaisseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
