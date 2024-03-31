import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprtsTeamComponent } from './exprts-team.component';

describe('ExprtsTeamComponent', () => {
  let component: ExprtsTeamComponent;
  let fixture: ComponentFixture<ExprtsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExprtsTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExprtsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
