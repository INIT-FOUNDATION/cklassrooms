import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsTeamComponent } from './experts-team.component';

describe('ExpertsTeamComponent', () => {
  let component: ExpertsTeamComponent;
  let fixture: ComponentFixture<ExpertsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpertsTeamComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
