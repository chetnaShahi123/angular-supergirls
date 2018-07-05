import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  currentUrl : string;

  constructor(private router: Router) { 
    router.events.subscribe((_:NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
  }

}
