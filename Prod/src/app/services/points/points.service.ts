import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Point {
  idPoint: number;
  namePoint: string;
  vernaculairePoint: string;
  descriptionPoint: string;
  latitudePoint: any;
  longitudePoint: any;
  disponiblePoint: any;
}

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  private key = 'ytdNQFB@Duca*o-aMoh7zMWU3Q.FbVuX';

  constructor(private http: HttpClient) { }


  /******************************************************
   * Fonctions récupérations depuis la Base de données
   ******************************************************/

  /**
   * récupération de l'ensemble de la liste des points
   */
  recupPoints() {
    return this.http.get('https://www.wt1-2.ephec-ti.be:3000/api/Points?key=' + this.key);
  }

  /**
   * récupération de l'ensemble de la liste des catégories
   */
  recupCategories() {
    return this.http.get('https://www.wt1-2.ephec-ti.be:3000/api/Categories?key=' + this.key);
  }

  /**
   * récupération de l'ensemble de la liste des parcours
   */
  recupParcours() {
    return this.http.get('https://www.wt1-2.ephec-ti.be:3000/api/Parcours?key=' + this.key);
  }

  /**
   * récupération de la liste des points d'un parcours
   * @param id
   */
  recupParcoursPointsById(id: number) {
    return this.http.get('https://www.wt1-2.ephec-ti.be:3000/api/ParcoursPoints?idParcours=' + id + '&key=' + this.key);
  }

  /**
   * récupération des info d'un parcours par sont id
   * @param id
   */
  recupParcoursById(id: number) {
    return this.http.get('https://www.wt1-2.ephec-ti.be:3000/api/Parcours?idParcours=' + id + '&key=' + this.key);
  }

  /**
   * récupération des info d'un point par sont id
   * @param id
   */
  recupPointById(id: number) {
    return this.http.get('https://www.wt1-2.ephec-ti.be:3000/api/Points?idPoint=' + id + '&key=' + this.key);
  }

  /**
   * récupération des points par leurs categories
   * @param categ
   */
  recupPointsByCategorie(categ: string) {
    return this.http.get('https://www.wt1-2.ephec-ti.be:3000/api/Points/Categories?idCategorie=' + categ + '&key=' + this.key);
  }

  /**
   * récupération d'une catégorie sur base de sont id
   * @param id
   */
  recupCategoriesById(id: number) {
    return this.http.get('https://www.wt1-2.ephec-ti.be:3000/api/Categories?idCategorie=' + id + '&key=' + this.key);
  }

  /**
   * mise a jour d'un point dans la base de donnée
   * @param id
   * @param body
   */
  updatePoint(id, body) {
    return this.http.put('https://www.wt1-2.ephec-ti.be:3000/api/Points?idPoint=' + id + '&key=' + this.key, JSON.parse(body));
  }

  /**
   * suppression d'un point dans la base de donnée
   * @param id
   */
  deletePoint(id) {
    return this.http.delete('https://www.wt1-2.ephec-ti.be:3000/api/Points?idPoint=' + id + '&key=' + this.key);
  }

}
