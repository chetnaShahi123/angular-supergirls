import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-accessible-pipes',
  templateUrl: './my-accessible-pipes.component.html',
  styleUrls: ['./my-accessible-pipes.component.css']
})
export class MyAccessiblePipesComponent implements OnInit {
  power: number;
  factor: string;

  constructor() { }

  ngOnInit() {
    this.power = 3;
    this.factor = '2';
  }

}
