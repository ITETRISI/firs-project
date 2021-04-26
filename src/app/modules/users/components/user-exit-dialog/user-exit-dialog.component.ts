import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  difference: Array<string>;
}

@Component({
  selector: 'app-user-exit-dialog',
  templateUrl: './user-exit-dialog.component.html',
  styleUrls: ['./user-exit-dialog.component.scss']
})
export class UserExitDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserExitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    
   }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
