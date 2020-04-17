import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private routingWaypointsList: any = [];
  private pointSheet: any;

  constructor() { }

  /**
   * ajout d'un point par sont id dans la liste des routes
   * @param id
   */
  addRoutingPoint(id: number) {
    this.routingWaypointsList.push(id);
    console.log(this.routingWaypointsList);
  }

  /**
   * renvois de la liste des points de route
   */
  getRoutingPoint() {
    return this.routingWaypointsList;
  }

  /**
   * suppression de l'ensemble des points de reoute
   */
  clearRoutingPoint(){
    this.routingWaypointsList = [];
  }

  /**
   * récupération de la sheet
   * @param sheet
   */
  getCurrentSheet(sheet){
    this.pointSheet = sheet;
  }

  /**
   * fermeture de la sheet actuelle
   */
  dismissSheet(){
    this.pointSheet.dismiss();
  }

}
