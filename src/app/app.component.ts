import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatclient';

  constructor() {
    const observableOne = new Observable(observer => {
      observer.next(Math.random());
    });

    observableOne.subscribe(value => console.log('subscriber one A: ', value));
    observableOne.subscribe(value => console.log('subscriber one B: ', value));

    const observableTwo = new Observable(observer => {
      observer.next(Math.random());
    });

    const subject = new Subject();

    subject.subscribe(value => console.log('subscriber two A: ', value));
    subject.subscribe(value => console.log('subscriber two B: ', value));

    observableTwo.subscribe(subject);
  }
}
