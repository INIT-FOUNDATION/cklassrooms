import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNavBarOverlayComponent } from './courses-nav-bar-overlay.component';

describe('CoursesNavBarOverlayComponent', () => {
  let component: CoursesNavBarOverlayComponent;
  let fixture: ComponentFixture<CoursesNavBarOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesNavBarOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesNavBarOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
