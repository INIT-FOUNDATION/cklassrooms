import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-testimonial-dialog',
  templateUrl: './testimonial-dialog.component.html',
  styleUrls: ['./testimonial-dialog.component.scss'],
})
export class TestimonialDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.dialog.closeAll();
  }
}
