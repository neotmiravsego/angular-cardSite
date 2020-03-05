import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTournamentComponent } from './info-tournament.component';

describe('InfoTournamentComponent', () => {
  let component: InfoTournamentComponent;
  let fixture: ComponentFixture<InfoTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
