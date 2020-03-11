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
  categList: any[] = []; // liste total des caractérisitques
  categListSelected: any[] = []; // liste des caractérisitues selectionnés

  ngOnInit(): void {
    // récupération des points du serveur
    // this.pointList = this.pointsService.getPointsList();
    // récupération des caractéristiques du serveur
    this.categList = this.pointsService.getCaratList();
    this.pointListSelected = this.pointsService.getPointsList();
  }

  /**
   * affichage des points en fonction de la catégorie sélectionnée dans les checkbox
   */
  selectPointsFromCategorie() {
    this.categListSelected = [];
    const categSelected = document.getElementsByName('categList') as any;
    for ( let i = 0; i < categSelected.length; i ++) {
      if (categSelected[i].checked) {
        this.categListSelected.push(categSelected[i].value);
      }
    }
    if (this.categListSelected.length === 0) {
      this.categListSelected = [...this.categList];
    }

    this.pointListSelected = [];

    for (let categorie of this.categListSelected) {
      this.pointListSelected = this.pointsService.getPointsCategorieList(categorie);
    }
  }

  /**
   * On renvoit un point par son id
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
