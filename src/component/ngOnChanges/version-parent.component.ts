import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import {Observable, of} from 'rxjs';

// 创建一个可观察者对象-Observable，发射三个数据1、2、3
const myObservable = of(1, 2, 3);

// 创建一个观察者对象-Observer(处理next、error、complete回调)
const myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

// 通过Observable的subscribe函数，观察者去订阅可观察者的消息
myObservable.subscribe(myObserver);

// 可观察者构造函数的参数
// function sequenceSubscriber(observer) {
//     // 发射三个值
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.complete();

//     return {
//         unsubscribe() {
//         }
//     };
// }

// // 通过构造函数来创建一个可观察者
// const sequence = new Observable(sequenceSubscriber);

// // 订阅
// sequence.subscribe({
//     next(num) {
//         console.log(num);
//     },
//     complete() {
//         console.log('Finished sequence');
//     }
// });

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
})
export class VersionParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
    

    this.childEvent.emit(this.minor);
    this.childEvent.emit(this.minor-1);
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }


  
  childEvent = new EventEmitter();
  ngOnInit() {
    this.childEvent.subscribe(value=>{
      console.log("value:"+value)
    });
  }

  
}