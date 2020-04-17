import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss']
})
export class CamComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }

  handleQr(site: string) {
    alert('Attention vous allez être redirigé vers: ' + site);
    window.open(site);
  }
}
