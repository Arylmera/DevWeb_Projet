import { Component, OnInit } from '@angular/core';
import {PointsService} from '../../services/points/points.service';
import {MatTableDataSource} from '@angular/material/table';
import {AdminDialogComponent} from '../admin-dialog/admin-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  public recupData = [];
  public pointsList;
  public colonnesList: string[] = [];

  constructor(private pointsService: PointsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.actualiserListe();
  }

  actualiserListe(): void {
    this.pointsService.recupPoints().subscribe((data) => {
      Object.keys(data[0]).forEach((e) => {
        this.colonnesList.push(e);
      });
      this.colonnesList.push('buttons');
      Object.keys(data).forEach((e) => {
        this.recupData.push(data[e]);
      });
      this.pointsList = new MatTableDataSource(this.recupData);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pointsList.filter = filterValue.trim().toLowerCase();
  }

  toggleAccessibilite(id, etat) {
    const body = '{"disponiblePoint" : ' + etat + '}';
    this.pointsService.updatePoint(id, body).subscribe((res) => console.log(res));
  }

  modifPointPopUp(point) {
    this.dialog.open(AdminDialogComponent, {
      data: point,
      width: '100%'
    });
  }

  }
