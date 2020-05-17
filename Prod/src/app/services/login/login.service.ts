import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>; // Objet contenant l'utilisateur actuellement connecté

  // Le constructeur regarde s'il y a déjà un utilisateur de sauvegardé dans le cache de l'utilisateur
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Retourne l'utilisateur actuel
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // Requete de login à l'api
  // Par sécurité, l'api renvoie juste l'id du user et son username
  login(username, password) {
    return this.http.post<any>(`https://www.wt1-2.ephec-ti.be:3000/api/utilisateurs/login`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user)); // Sauvegarde la reponse dans la memoire cache
        this.currentUserSubject.next(user); // Met à jour l'utilisateur actuel
        return user; // Renvoie le user récupéré
      }));
  }

  // Fonction de logout
  logout() {
    localStorage.removeItem('currentUser'); // Supprime l'utilisateur du cache
    this.currentUserSubject.next(null); // Met l'objet currentuser a null
  }
}
