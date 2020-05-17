import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    /*
    / Gestion des types d'alertes et attribustion d'une class en fonction du case succes-> vert, error->rouge
    / S'active quand on fait appel à AlertService grace à l'observable
    */
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert alert-success';
            break;
          case 'error':
            message.cssClass = 'alert alert-danger';
            break;
        }

        this.message = message;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
