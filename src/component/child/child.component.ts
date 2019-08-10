import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChildComponent),
    multi: true
  }]
})
export class ChildComponent implements ControlValueAccessor  {

  constructor() { }
  _data: any;
  childData;
  add () {
    this.childData ++;
    this.change(this.childData);
  }
  change = (value: any) => {}; // 先定义一个方法，很重要，用于接收registerOnChange()方法里传递回来的方法，然后通过这个方法就能通知到外部组件数据更新。
  
 
  
  ngOnInit() {
    
  }
  
  writeValue(val): void { // 初始化时，获取并监听父组件通过ngModel传递进来的数据
    if (val) {
      this.childData = val;
    }
  }
  registerOnChange(fn: any): void { // 初始化后，执行该方法，并保存控件接收到 change 事件后，调用的函数
    this.change = fn;
  }
  registerOnTouched(fn: any): void {
  }

}
