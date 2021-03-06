import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private key = 'ytdNQFB@Duca*o-aMoh7zMWU3Q.FbVuX';

  constructor(private http: HttpClient) {}

  // Requete à l'api pour inscrire un utilisateur
  register(user: User) {
    return this.http.post(`https://www.wt1-2.ephec-ti.be:3000/api/utilisateurs/register?key=` + this.key, user);
  }
}
