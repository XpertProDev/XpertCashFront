import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleFactureComponent } from './style-facture.component';

describe('StyleFactureComponent', () => {
  let component: StyleFactureComponent;
  let fixture: ComponentFixture<StyleFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleFactureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
