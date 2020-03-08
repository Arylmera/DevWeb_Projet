import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Point {
  id: number;
  name: string;
  description: string;
  long: number;
  lat: number;
  caract: number[];

  constructor(id: number, name: string, description: string, long: number, lat: number, caract: number[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.long = long;
    this.lat = lat;
    this.caract = caract;
  }

}
class Caract {
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
  private caractList: Caract[] = []; // liste total des caractérisitques

  constructor(private http: HttpClient) { }


  /******************************************************
   * Fonctions récupérations depuis la Base de donnée
   ******************************************************/

  /**
   * récupération de l'ensemble de la liste des points
   */
  recupPoints() {
    return this.http.get('http://localhost:8080/api/point');
  }

  /**
   * récupération des info d'un point par sont id
   * @param id
   */
  recupPointById(id: number) {
    return this.http.get('http://localhost:8080/api/point/id/' + id);
  }

  /**
   * récupération des points par leurs categories
   * @param categ
   */
  recupPointsByCateg(categ: string) {
    return this.http.get('http://localhost:8080/api/point/categorie/' + categ );
  }

  /**
   * récupération de l'ensemble de la liste des catégories
   */
  recupCategories() {
    return this.http.get('http://localhost:8080/api/caracteristique');
  }

  /**
   * récupération d'une catégorie sur base de sont id
   * @param id
   */
  recupCategorieById(id: number){
    return this.http.get('http://localhost:8080/api/caracteristiques' + id);
  }

  /******************************************************
   * Fonctions de gestion des données
   ******************************************************/

  /**
   * récupération de la liste des points sur la base de donnée
   */
  refreshPointList() {
    this.recupPoints().subscribe(data => {
      for(const key in data) {
        const tmpPoint = new Point(data[key].idPoint, data[key].namePoint, data[key].descriptionPoint,
          data[key].latitudePoint, data[key].longitudePoint, [1]);
        this.pointList.push(tmpPoint);
      }
    });
  }

  /**
   * récupération des catégories sur la base de données
   */
  refreshCaractList() {
    this.recupCategories().subscribe( data => {
      for(const key in data) {
        const tmpCaract = new Caract(data[key].idCaracteristique, data[key].nameCaracteristique);
        this.caractList.push(tmpCaract);
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
   * fonction accès a la liste des catégories
   */
  getCaratList() {
    this.refreshCaractList();
    return this.caractList;
  }

}
