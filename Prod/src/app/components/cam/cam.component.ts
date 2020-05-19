import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../services/alert/alert.service';


@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss']
})
export class CamComponent implements OnInit {

  scanned = false;
  site: string;

  constructor(
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.alertService.clear();
  }

  // Si le scan est réussi
  handleQr(qrRes: string) {
    this.site = qrRes;
    this.alertService.success('Scan réussi.', true);
    this.scanned = true;
  }

  open() {
    window.open(this.site);
  }

  // Si il y a une erreur durant le scan
  errorQr() {
    this.alertService.error('Une erreur est survenue, \n veuillez réessayer.', true);
  }

  // Si le qr ne correspond à rien
  failureQr() {
    this.alertService.error('Aucun résultat trouvé, \n veuillez réessayer.', true);
  }

  // Si aucune caméra n'est trouvée
  cameraNotFound() {
    this.alertService.error('Aucune caméra trouvée.', true);
  }
}
