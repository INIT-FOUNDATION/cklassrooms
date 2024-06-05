import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAfterPlacementComponent } from './pay-after-placement.component';

describe('PayAfterPlacementComponent', () => {
  let component: PayAfterPlacementComponent;
  let fixture: ComponentFixture<PayAfterPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayAfterPlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAfterPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
