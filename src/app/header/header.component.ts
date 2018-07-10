import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string ;
  currency : number;
  constructor() { }

  ngOnInit() {
     this.title = "Supergirl's App";
     this.currency = 9900;
  }

}
