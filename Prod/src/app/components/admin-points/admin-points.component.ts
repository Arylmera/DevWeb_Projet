import { Component, OnInit } from '@angular/core';
import {PointsService} from '../../services/points/points.service';
import {MatTableDataSource} from '@angular/material/table';
import {AdminDialogComponent} from '../admin-dialog/admin-dialog.component';
import {MatDialog} from '@angular/material/dialog';

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
  selector: 'app-admin-points',
  templateUrl: './admin-points.component.html',
  styleUrls: ['./admin-points.component.scss']
})

export class AdminPointsComponent implements OnInit {
  public recupData = [];
  public pointsList;
  public categories = [];
  public colonnesList: string[] = ['idPoint', 'namePoint', 'vernaculairePoint', 'categorie', 'disponiblePoint', 'buttons'];

  constructor(private pointsService: PointsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.actualiserListe();
  }

  actualiserListe(): void {
    this.pointsService.recupPoints().subscribe((data) => {
      Object.keys(data).forEach((e) => {
        this.recupData.push(data[e]);
      });
      this.pointsService.recupCategories().subscribe((categs) => {
        Object.keys(categs).forEach((e) => {
          this.categories[categs[e]['idCategorie']] = categs[e]['nameCategorie'];
        });

        this.pointsService.recupCategoriesPoints().subscribe((data) => {
          Object.keys(data).forEach((e) => {
            this.recupData[data[e]['idPoint'] -1].categorie = this.categories[data[e]['idCategorie']];
          });

        });
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
    console.log( 'vous venez de supprimer le point :' + id + ' a l\'index ' + index);
    /*
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
    */
  }

}
