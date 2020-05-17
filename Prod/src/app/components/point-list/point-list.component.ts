import {Component, OnInit} from '@angular/core';
import {PointsService} from '../../services/points/points.service';
import {faTree} from '@fortawesome/free-solid-svg-icons/faTree';

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
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < categSelected.length; i ++) {
      if (categSelected[i].checked) {
        this.categListSelected.push(categSelected[i].value);
        this.pointsService.recupPointsByCategorie(categSelected[i].value).subscribe( data => {
          this.pointListSelected = data;
        });
      }
    }
    if (this.categListSelected.length === 0) {
      this.categListSelected = [...this.categList];
    }
  }
}
