import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  hide: any;

  constructor() { }

  ngOnInit(): void {
  }

  register(form): void {
    console.log(form.value);
  }

}
