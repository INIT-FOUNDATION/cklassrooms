import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplyDialogComponent } from '../apply-dialog/apply-dialog.component';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.scss'],
})
export class ApplyButtonComponent implements OnInit {
  @Input() additionalClasses: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(ApplyDialogComponent, {
      width: 'clamp(20rem, 60vw, 35rem)',
    });
  }

  openGoogleForm() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSctm8H7yKqLHWyCKGrLFW5GnWcMAWGlvSOgqHM3ruTiAjapDw/viewform?usp=sf_link',
      '_blank'
    );
  }
}
