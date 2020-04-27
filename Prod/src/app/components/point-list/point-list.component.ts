import {Component, HostListener, OnInit} from '@angular/core';
import {PointsService} from '../../services/points/points.service';
import {faTree} from "@fortawesome/free-solid-svg-icons/faTree";
import * as $ from 'jquery';

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.scss']
})

export class PointListComponent implements OnInit {

  constructor(private pointsService: PointsService) {
  }

  faTree = faTree;
  pointList: any;
  pointListSelected: any;
  categList: any;
  categListSelected: any;

  ngOnInit(): void {
    // récupération des points du serveur
    this.pointsService.recupCategories().subscribe( data => {
      this.categList = data;
    });
    // récupération des caractéristiques du serveur
    this.pointsService.recupPoints().subscribe( data => {
      this.pointList = data;
    });
  }

  /**
   * affichage des points en fonction de la catégorie sélectionnée dans les checkbox
   */
  selectPointsFromCategorie() {
    this.categListSelected = [];
    this.pointListSelected = [];
    const categSelected = document.getElementsByName('categList') as any;
    for ( let i = 0; i < categSelected.length; i ++) {
      if (categSelected[i].checked) {
        this.categListSelected.push(categSelected[i].value);
        this.pointsService.recupPointsByCategorie(categSelected[i].value).subscribe( data => {
          this.pointListSelected = data;
          console.log(this.pointListSelected[0]);
        })
      }
    }
    if (this.categListSelected.length === 0) {
      this.categListSelected = [...this.categList];
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
