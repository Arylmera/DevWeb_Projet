import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PointsService} from '../../services/points/points.service';

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
  constructor(public dialogRef: MatDialogRef<AdminDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Point, private pointsService: PointsService) { }

  clickValider(): void {
      this.pointsService.updatePoint(this.data.idPoint, JSON.stringify(this.data)).subscribe((res) => console.log(res));
      this.dialogRef.close();
  }
}
