import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementSupportComponent } from './placement-support.component';

describe('PlacementSupportComponent', () => {
  let component: PlacementSupportComponent;
  let fixture: ComponentFixture<PlacementSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
