import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-my-observables',
  templateUrl: './my-observables.component.html',
  styleUrls: ['./my-observables.component.css']
})
export class MyObservablesComponent implements OnInit {

  constructor() { 
    // this.observableDemo();
  }

  ngOnInit() {
    this.observableDemo1();
    this.observableDemo2();
  }

  observableDemo1() {
    function subscriber(observer) {      //as observable will need a subscriber which take observer.In this,we will define the work the observable will perform.In this case, getting the keycode of pressed keywords.
      const handler = (e) => observer.next(e.keyCode);
      document.addEventListener('keyup', handler);
      return () => {
        document.removeEventListener('keyup',handler);   //provides a unsubscribe method (along with observable when we will subscribe to it) in its return object  whom we can access if we want after subscription to observable.
      }
    }

    let observableName = new Observable(subscriber);    //observable need a subscriber we have created above. we can also use this inline.

    let observer = {                              //now we need a observer which we need to pass while subscribing to observable.it has mainly 3 parts namely next, err & complete.
      next: (data) => { console.log(data); },    //mandatory. use to get data from observable
      err: (error) => { console.log(error); },     //optional, for viewing errors 
      complete: () => { console.log('completed'); }  // optional. indicates interaction with observable completes.
    } 

    let forUnsubscribeWork = observableName.subscribe( observer );   // need to pass observer(we created above) while subscribing to observables. can be used inline also.
    //forUnsubscribeWork -> as unsubscribe method is returned along with observable

    setTimeout(function() {
      forUnsubscribeWork.unsubscribe();
    }, 8000 );       //unsubscribing after 8 seconds.
  }

  observableDemo2() {
    const observableName = of(7,1,1,9,4,2,1,0,4);

    let observer = {
      next: (nextdata) => {console.log('observer got a next value:' + nextdata)},
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    //executing with observer object
    observableName.subscribe( observer );
  }

}
