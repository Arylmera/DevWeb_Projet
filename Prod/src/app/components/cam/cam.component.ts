import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss']
})
export class CamComponent implements OnInit {

  site: string;

  constructor() {}

  ngOnInit(): void {
  }

  handleQr(qrRes: string) {
    this.site = qrRes;
    document.getElementById('openButton').style.visibility = 'visible';
  }

  openSite() {
    window.open(this.site);
  }
}
