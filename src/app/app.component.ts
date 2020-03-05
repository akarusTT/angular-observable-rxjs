import { Component, OnInit, AfterViewInit } from '@angular/core';
import { timer, of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-observable-rxjs';

  myObservable = of('apple', 'orange', 'grappe');
  myObserver = {
    next: (x: string) => console.log('Observer got a next value: ' + x),
    error: (err: string) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification')
  };

  constructor() {
    this.myObservable.subscribe(this.myObserver);
  }

  sequenceSubscriber(observer) {
    observer.next('Apple');
    observer.next('Orange');
    observer.next('Grappe');
    observer.complete();

    return { unsubscribe() {} };
  }

  timer() {
    const source = timer(1000, 2000);
    const subscribe = source.subscribe(val => console.log(val));
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 10000);
  }

  fromEvent(target: HTMLInputElement, eventName: string) {
    return new Observable(observer => {
      const handler = (e: unknown) => observer.next(e);

      // target.addEventListener(eventName, handler);

      return () => {
        target.removeEventListener(eventName, handler);
      };
    });
  }

  ngOnInit() {
    this.timer();
    const sequence = new Observable(this.sequenceSubscriber);
    sequence.subscribe({
      next(msg) {
        console.log(msg);
      },
      complete() {
        console.log('Finished sequence');
      }
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
