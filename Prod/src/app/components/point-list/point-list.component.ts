import { Component, OnInit } from '@angular/core';
import {PointsService} from '../../services/points/points.service';

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.scss']
})

export class PointListComponent implements OnInit {

  constructor(private pointsService: PointsService) { }

  pointList: any[] = []; // liste total des points depuis la db
  pointListSelected: any[] = []; // liste des points selectionnés
  CategList: any[] = []; // liste total des caractérisitques
  CategListSelected: any[] = []; // liste des caractérisitues selectionnés

  ngOnInit(): void {
    // récupération des points du serveur
    this.pointList = this.pointsService.getPointsList();
    // récupération des caractéristiques du serveur
    this.CategList = this.pointsService.getCaratList();
  }

  /**
   * affichage des points en fonction de la catégorie sélectionnée dans les checkbox
   */
  selectPointsFromCaract() {
    this.CategListSelected = [];
    const categSelected = document.getElementsByName('categList') as any;
    for ( let i = 0; i < categSelected.length; i ++) {
      if (categSelected[i].checked) {
        this.CategListSelected.push(categSelected[i].value);
      }
    }
    if (this.CategListSelected.length === 0) {
      this.CategListSelected = [...this.CategList];
    }

    this.pointListSelected = [];
    for (let i = 0; i < this.pointList.length; i++) {
      for (let j = 0; j < this.pointList[i].categ.length; j++) {
        for (let x = 0; x < this.CategListSelected.length; x++) {
          if (this.pointList[i].categ[j] === Number(this.CategListSelected[x])) {
            this.pointListSelected.push(this.pointList[i]);
          }
        }
      }
    }
  }

  /**
   * renvois d'un point par sont id
   * @param id
   * @return point
   */
  getPointById(id: number) {
    for (let i = 0; i < this.pointList.length; i++) {
      if (this.pointList[i].id === id) {
        console.log('returned point :' + this.pointList[i]);
        return this.pointList[i];
      }
    }
  }
}
