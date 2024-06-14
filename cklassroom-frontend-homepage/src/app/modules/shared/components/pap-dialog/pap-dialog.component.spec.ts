import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapDialogComponent } from './pap-dialog.component';

describe('PapDialogComponent', () => {
  let component: PapDialogComponent;
  let fixture: ComponentFixture<PapDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
