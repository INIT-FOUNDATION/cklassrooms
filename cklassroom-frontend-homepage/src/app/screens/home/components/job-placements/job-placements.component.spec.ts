import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPlacementsComponent } from './job-placements.component';

describe('JobPlacementsComponent', () => {
  let component: JobPlacementsComponent;
  let fixture: ComponentFixture<JobPlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPlacementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
