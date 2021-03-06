import {Component, OnInit} from '@angular/core';
import {PointsService} from '../../services/points/points.service';
import {MatTableDataSource} from '@angular/material/table';
import {AdminDialogComponent} from '../admin-dialog/admin-dialog.component';
import {MatDialog} from '@angular/material/dialog';

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

  supprimerPoint(id: number, index: any): void {
    console.log( "vous venez de supprimer le point :" + id + " a l'index " + index);
    if (confirm('Voulez-vous vraiment supprimer le point ' + id + ' ?')) {
      this.pointsService.deletePoint(id).subscribe((res) => {
        if (Object.keys(res).includes('status')) {
          console.log(res);
        } else {
          this.pointsList.data.splice(index, 1);
          this.pointsList._updateChangeSubscription();
        }
      });
    }
  }

  }
