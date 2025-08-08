import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosJournalCaisseComponent } from './pos-journal-caisse.component';

describe('PosJournalCaisseComponent', () => {
  let component: PosJournalCaisseComponent;
  let fixture: ComponentFixture<PosJournalCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosJournalCaisseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosJournalCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
