import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Point {
  idPoint: number;
  namePoint: string;
  vernaculairePoint: string;
  descriptionPoint: string;
  latitudePoint: any;
  longitudePoint: any;
  disponiblePoint: any;
}

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent {
  constructor(public dialogRef: MatDialogRef<AdminDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Point) {
  }
}
