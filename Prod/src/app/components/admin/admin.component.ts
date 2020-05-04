import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
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
=======
}
>>>>>>> Stashed changes
