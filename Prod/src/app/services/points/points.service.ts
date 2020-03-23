import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Point {
  id: number;
  name: string;
  description: string;
  long: number;
  lat: number;
  categ: number[];

  constructor(id: number, name: string, description: string, long: number, lat: number, categ: number[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.long = long;
    this.lat = lat;
    this.categ = categ;
  }

}
class Categ {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}


@Injectable({
  providedIn: 'root'
})

export class PointsService {

  private pointList: Point[] = []; // liste total des points depuis la db
  private categList: Categ[] = []; // liste total des catégories
  public point: Point;

  constructor(private http: HttpClient) { }


  /******************************************************
   * Fonctions récupérations depuis la Base de donnée
   ******************************************************/

  /**
   * récupération de l'ensemble de la liste des points
   */
  recupPoints() {
    return this.http.get('http://localhost:3000/api/Points');
  }

  /**
   * récupération des info d'un point par sont id
   * @param id
   */
  recupPointById(id: number) {
    return this.http.get('http://localhost:3000/api/Points?idPoint=' + id);
  }

  /**
   * récupération des points par leurs categories
   * @param categ
   */
  recupPointsByCategorie(categ: string) {
    return this.http.get('http://localhost:3000/api/Points/Categories?idCategorie=' + categ );
  }

  /**
   * récupération de l'ensemble de la liste des catégories
   */
  recupCaracteristiques() {
    return this.http.get('http://localhost:3000/api/Categories');
  }

  /**
   * récupération d'une catégorie sur base de sont id
   * @param id
   */
  recupCategoriesById(id: number) {
    return this.http.get('http://localhost:3000/api/Categories?idCategorie=' + id);
  }

  /******************************************************
   * Fonctions de gestion des données
   ******************************************************/

  /**
   * récupération de la liste des points sur la base de données
   */
  refreshPointList() {
    this.pointList = [];
    this.recupPoints().subscribe(data => {
      for (const key in data) {
        if (data[key]) {
          const tmpPoint = new Point(data[key].idPoint, data[key].namePoint, data[key].descriptionPoint,
            data[key].latitudePoint, data[key].longitudePoint, [1]);
          this.pointList.push(tmpPoint);

        }
      }
    });
  }

  /**
   * récupération d'un point sur la base de données en fonction de son id
   */
   refreshPointId(id) {
    this.pointList = [];
    this.recupPointById(id).subscribe(data => {
      return new Point(data[0].idPoint, data[0].namePoint, data[0].descriptionPoint,
          data[0].latitudePoint, data[0].longitudePoint, [1]);
    });
  }

  /**
   * récupération de la liste des points d'une catégorie sur la base de données
   */
  refreshPointCategorie(categorie) {
    this.pointList = [];
    this.recupPointsByCategorie(categorie).subscribe(data => {
      for (const key in data) {
        if (data[key]) {
          const tmpPoint = new Point(data[key].idPoint, data[key].namePoint, data[key].descriptionPoint,
            data[key].latitudePoint, data[key].longitudePoint, [1]);
          this.pointList.push(tmpPoint);
        }
      }
    });
  }

  /**
   * récupération des catégories sur la base de données
   */
  refreshCategorieList() {
    this.recupCaracteristiques().subscribe( data => {
      for (const key in data) {
        if (data[key]) {
          const tmpCaract = new Categ(data[key].idCategorie, data[key].nameCategorie);
          this.categList.push(tmpCaract);
        }
      }
    });
  }

  /**
   * fonction accès a la liste des points
   */
  getPointsList() {
    this.refreshPointList();
    return this.pointList;
  }

  /**
   * fonction accès a la liste des points d'une catégorie
   */
  getPointsCategorieList(categorie) {
    this.refreshPointCategorie(categorie);
    return this.pointList;
  }

  /**
   * fonction accès a la liste des catégories
   */
  getCaratList() {
    this.refreshCategorieList();
    return this.categList;
  }

}
