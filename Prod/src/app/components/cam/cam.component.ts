import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert/alert.service";


@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss']
})
export class CamComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
  }

  handleQr(qrRes: string) {
    this.alertService.success('Scan réussi.', true);
    window.open(qrRes);
  }

  errorQr() {
    this.alertService.error('Une erreur est survenue, \n veuillez réessayer.', true);
  }

  failureQr() {
    this.alertService.error('Aucun résultat trouvé, \n veuillez réessayer.', true);
  }

  cameraNotFound() {
    this.alertService.error('Aucune caméra trouvée.', true);
  }
}
