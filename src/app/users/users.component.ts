import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  //commented as havn't used any bootstrap speific sytling in users component

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  //for Animations (list of user's on the user's page to fade in when the component loads)
  animations: [
    trigger('listStagger', [    //start off by defining an animation by giving it a trigger with a name listStagger.
      transition('* <=> *', [    //ransition to define when the animations will take place, from one animation state to the other. 
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true            //At the end, we define an optional :leave animation.
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
  users$ : Object[];    //Using the dollar sign in the name of a variable that is an observable, is considered best practice. This way it’s easy to identify if your variable is an observable or not.
  simplearr = [];
  flag : boolean;
  birthday : Date;
  currency : number;
  decide = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
        data => this.users$ = data
    );

    this.simplearr = ['apple', 'mango', 'pineapple', 'banana'];
    this.flag = true;
    this.birthday = new Date(1994, 10, 7);    // Nov 7, 1994
    this.decide = ['users', 'fruits'];
  
  }

}
