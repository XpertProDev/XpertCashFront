import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureReelComponent } from './facture-reel.component';

describe('FactureReelComponent', () => {
  let component: FactureReelComponent;
  let fixture: ComponentFixture<FactureReelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureReelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
