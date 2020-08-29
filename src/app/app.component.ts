import { Component, OnInit, AfterViewInit } from '@angular/core';
import { timer, of, Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Router, Event, NavigationEnd, Scroll } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-observable-rxjs';

  myObservable = of('apple', 'orange', 'grappe');
  myObserver = {
    next: (x: string) => console.log('Observer got a next value: ' + x),
    error: (err: string) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  constructor(private router: Router) {
    this.myObservable.subscribe(this.myObserver);
  }

  sequenceSubscriber(observer) {
    observer.next('Apple');
    observer.next('Orange');
    observer.next('Grape');
    observer.complete();

    return { unsubscribe() {} };
  }

  timer() {
    const source = timer(1000, 2000);
    const subscribe = source.subscribe((val) => console.log(val));
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 10000);
  }

  fromEvent(target: HTMLInputElement, eventName: string) {
    return new Observable((observer) => {
      const handler = (e: unknown) => observer.next(e);

      target.addEventListener(eventName, handler);

      return () => {
        target.removeEventListener(eventName, handler);
      };
    });
  }

  filterEvenNumbers() {
    const source = from([5, 10, 15, 20]);
    const example = source.pipe(filter((num) => num % 2 === 0));
    const subscribe = example.subscribe((val) => console.log(val));
    return subscribe;
  }

  mapNamesAges() {
    const source = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 },
    ]);
    // grab each persons name, could also use pluck for this scenario
    const example = source.pipe(map((x) => x.name));
    // output: "Joe","Frank","Ryan"
    const subscribe = example.subscribe((val) => console.log(val));
  }

  ngOnInit() {
    this.timer();
    this.filterEvenNumbers();
    this.mapNamesAges();

    const sequence = new Observable(this.sequenceSubscriber);

    sequence.subscribe({
      next(msg) {
        console.log(msg);
      },
      complete() {
        console.log('Finished sequence');
      },
    });
  }

  ngAfterViewInit() {
    const ESC_KEY = 27;
    const nameInput = document.getElementById('yourname') as HTMLInputElement;
    this.fromEvent(nameInput, 'keydown').subscribe((e: KeyboardEvent) => {
      // tslint:disable-next-line: deprecation
      if (e.keyCode === ESC_KEY) {
        nameInput.value = '';
      }
    });
  }
}
