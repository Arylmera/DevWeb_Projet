import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(private http: HttpClient) { }

  /**
   * récupération de l'ensemble de la liste des points
   */
  getPoints() {
    return this.http.get('http://localhost:8080/api/points');
  }

  /**
   * récupération des info d'un point par sont id
   * @param id
   */
  getPointById(id: number) {
    return this.http.get('http://localhost:8080/api/points/' + id);
  }

  /**
   * récupération des points par leurs categories
   * @param categ
   */
  getPointsByCateg(categ: string) {
    return this.http.get('http://localhost:8080/api/points/' + categ );
  }

  /**
   * récupération de l'ensemble de la liste des catégories
   */
  getCategories() {
    return this.http.get('http://localhost:8080/api/caracteristiques');
  }

  /**
   * récupération d'une catégorie sur base de sont id
   * @param id
   */
  getCategorieById(id: number){
    return this.http.get('http://localhost:8080/api/caracteristiques' + id);
  }

}
