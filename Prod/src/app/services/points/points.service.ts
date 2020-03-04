import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(private http: HttpClient) { }

  /**
   * récupération de l'ensemble de la liste des points
   */
  getPoints(){
    return this.http.get('localhost/api/');
  }

  /**
   * récupération des info d'un point par sont id
   * @param id
   */
  getPointById(id: number){
    return this.http.get('localhost/api/');
  }

  /**
   * récupération de la lsite des points basé sur la liste de leurs id
   * @param id list
   */
  getPointList(id: number[]){
    return this.http.get('localhost/api/');
  }

  /**
   * récupération de l'ensemble de la liste des catégories
   */
  getCategories(){
    return this.http.get('localhost/api/');
  }

  /**
   * récupération d'une catégorie sur base de sont id
   * @param id
   */
  getCategorieById(id: number){
    return this.http.get('localhost/api/');
  }

  /**
   * récupération de la liste des points par leurs id
   * @param id list
   */
  getCategorieList(id: number[]){
    return this.http.get('localhost/api/');
  }
}
