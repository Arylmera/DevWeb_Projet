import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PointsService {

  constructor(private http: HttpClient) { }


  /******************************************************
   * Fonctions récupérations depuis la Base de donnée
   ******************************************************/

  /**
   * récupération de l'ensemble de la liste des points
   */
  recupPoints() {
    return this.http.get('https://51.178.40.148:3000/api/Points');
  }

  /**
   * récupération de l'ensemble de la liste des catégories
   */
  recupCategories() {
    return this.http.get('https://51.178.40.148:3000/api/Categories');
  }

  /**
   * récupération de l'ensemble de la liste des parcours
   */
  recupParcours() {
    return this.http.get('https://51.178.40.148:3000/api/Parcours');
  }

  /**
   * récupération de la liste des points d'un parcours
   * @param id
   */
  recupParcoursPointsById(id: number) {
    return this.http.get('https://51.178.40.148:3000/api/ParcoursPoints?idParcours=' + id);
  }

  /**
   * récupération des info d'un parcours par sont id
   * @param id
   */
  recupParcoursById(id: number) {
    return this.http.get('https://51.178.40.148:3000/api/Parcours?idParcours=' + id);
  }

  /**
   * récupération des info d'un point par sont id
   * @param id
   */
  recupPointById(id: number) {
    return this.http.get('https://51.178.40.148:3000/api/Points?idPoint=' + id);
  }

  /**
   * récupération des points par leurs categories
   * @param categ
   */
  recupPointsByCategorie(categ: string) {
    return this.http.get('https://51.178.40.148:3000/api/Points/Categories?idCategorie=' + categ );
  }

  /**
   * récupération d'une catégorie sur base de sont id
   * @param id
   */
  recupCategoriesById(id: number) {
    return this.http.get('https://51.178.40.148:3000/api/Categories?idCategorie=' + id);
  }

  updatePoint(id, body) {
    return this.http.put('https://51.178.40.148:3000/api/Points?idPoint=' + id, JSON.parse(body));
  }

  deletePoint(id) {
    return this.http.delete('https://51.178.40.148:3000/api/Points?idPoint=' + id);
  }

}
