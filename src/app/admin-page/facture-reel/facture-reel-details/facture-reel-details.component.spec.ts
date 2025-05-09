import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureReelDetailsComponent } from './facture-reel-details.component';

describe('FactureReelDetailsComponent', () => {
  let component: FactureReelDetailsComponent;
  let fixture: ComponentFixture<FactureReelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureReelDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureReelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
