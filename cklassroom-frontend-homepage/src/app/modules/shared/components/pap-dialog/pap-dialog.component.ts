import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pap-dialog',
  templateUrl: './pap-dialog.component.html',
  styleUrls: ['./pap-dialog.component.scss'],
})
export class PapDialogComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  closeModal() {
    this.dialog.closeAll();
  }

  knowMore(){
    window.open(`/pay-after-placement`);
  }
}
