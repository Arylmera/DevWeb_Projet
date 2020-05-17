import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>(); // Message
  private keepAfterRouteChange = false; // boolean pour keep ou non si changement de route

  // Constructeur de l'alert
  constructor(private router: Router) {
    // Clean ou non le component d'alert apres un changement de route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // Repasse a false pour le clean si de nouveau changement de route
          this.keepAfterRouteChange = false;
        } else {
          // Clean le component
          this.clear();
        }
      }
    });
  }

  // Observable qui retourne une alert
  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  // Fonction d'affichage des alrts succes
  success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message });
  }

  // Fonction d'affichage des alert error
  error(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message });
  }

  // Fonction de clean du component alert
  clear() {
    // Nettoie en appelant le subject.next sans aucun parametre
    this.subject.next();
  }

}
