import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {

  rili:any = [];
  riliObjectList:any;
  year:number;
  month:number;
  weeks:any = ['日','一','二','三','四','五','六'];
  currentDate:any
  currentDateStr:string = '';
  selectedDateStr:string = '';
  selectedDate:any;
  x:number;
  y:number;

  
  ngOnInit() {
    this.currentDate = new Date();
    this.currentDateStr = this.dateFormat(this.currentDate);
    this.initRiliParam(this.currentDate);
    this.tableInit();
  }
  
  tableInit() {
    this.rili = [];
    for (let row = 0; row < 6; row++) {
      this.rili[row] = [];
      for (let column = 0; column < 7; column++) {
        let num = row*7 + column;
        let object = this.riliObjectList[num];
        if(this.selectedDateStr === object.dateStr) {
          this.x = row;
          this.y = column;
          object['isSelected'] = true;
          // object['classStyle'] = 'element';
          this.selectedDateStr = object['dateStr'];
        }
        if(object['isCurrentMonth']) {
          if (this.currentDateStr===object.dateStr) {
            object['classStyle'] = object.isSelected ? 'element currentDateSelected':'element currentDate';
          } else if (column === 0 || column === 6) {
            object['classStyle'] = object.isSelected ? 'element weekDate selected':'element weekDate';
          } else {
            object['classStyle'] = object.isSelected ? 'element selected':'element';
          }
        } else {
          object['classStyle'] = object.isSelected ? 'element notCurrentDate selected':'element notCurrentDate';
        }
        this.rili[row][column] = object;
      }
      
    }
  };


  initRiliParam(date:Date) {
    this.riliObjectList = [];
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    let day = date.getDate();
    let weak = date.getDay();//获取当前星期X(0-6,0代表星期天)
    this.selectedDate = date;
    this.selectedDateStr = this.dateFormat(date);
    let date1 = this.getFirstDayDateNowMonth(date); // 获取当前月第一天日期
    let lastDay = this.getMaxDayOfDate(date); // 获取传入日期当前月最后一天日期
    let lastDay1 = this.getLastDayOfLastMonth(date);    // 获取上一月最后一天日期
    let weak1 = date1.getDay();
    if (weak1 !== 0) {
      let maxDay = lastDay1.getDate();
      for (let index = 0; index < weak1; index++) {
        let dateTemp = new Date(Date.parse(lastDay1.toLocaleDateString()) - (86400000 * (weak1-index-1)));
        let object = {
          val: maxDay-weak1+index+1 ,
          date: dateTemp,
          dateStr: this.dateFormat(dateTemp) ,
          isCurrentMonth: false,
          isSelected: false
        };
        this.riliObjectList.push(object);
      }
    }
    for (let index = 0; index < lastDay.getDate(); index++) {
      let dateTemp = new Date(Date.parse(date1.toLocaleDateString()) + (86400000 * index));
      let object = {
        val: index+1,
        date: dateTemp,
        dateStr: this.dateFormat(dateTemp) ,
        isCurrentMonth: true,
        isSelected: false
      };
      this.riliObjectList.push(object);
    }
    let length = this.riliObjectList.length;
    for (let index = 1; index <= 42 - length; index++) {
      let dateTemp = new Date(Date.parse(lastDay.toLocaleDateString()) + (86400000 * index));
      let object = {
        val: index,
        date: dateTemp,
        dateStr: this.dateFormat(dateTemp) ,
        isCurrentMonth: false,
        isSelected: false
      };
      this.riliObjectList.push(object);
    }
  }
  //获取当前月第一天日期
  getFirstDayDateNowMonth(date: Date) {
    let dateStr = date.toLocaleDateString();
    let dateStr1 = dateStr.substr(0, dateStr.lastIndexOf('/')+1) + '1';
    return new Date(Date.parse(dateStr1));
  }
  //获取上一月最后一天日期
  getLastDayOfLastMonth(date:Date) {
    return new Date(date.getFullYear(), (date.getMonth()), 0);
  }

  // 日期计算
  dateSubtract =  function(date, strInterval, Number) {
    let dtTmp:any = new Date(date.valueOf()) ;   
    // var dtTmp = date;  
    switch (strInterval) {   
        case 's' :return new Date(Date.parse(dtTmp) - (1000 * Number));  
        case 'n' :return new Date(Date.parse(dtTmp) - (60000 * Number));  
        case 'h' :return new Date(Date.parse(dtTmp) - (3600000 * Number));  
        case 'd' :return new Date(Date.parse(dtTmp) - (86400000 * Number));  
        case 'w' :return new Date(Date.parse(dtTmp) - ((86400000 * 7) * Number));  
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) - Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'm' :return new Date(dtTmp.setMonth(dtTmp.getMonth() - 1));  
        case 'y' :return new Date((dtTmp.getFullYear() - Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
    }  
  }
  dateAdd=  function(date, strInterval, Number) {  
    let dtTmp:any = new Date(date.valueOf()) ;
    // var dtTmp = date;  
    switch (strInterval) {   
        case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number));  
        case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number));  
        case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number));  
        case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number));  
        case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));  
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'm' :return new Date(dtTmp.setMonth(dtTmp.getMonth() + 1));  
        case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
    }  
  }
  //日期格式化  yyyy-MM-dd
  dateFormat(date: Date) {
    let year = date.getFullYear();
    let month:any = date.getMonth() + 1;
    month = month < 10 ? '0'+ month : month;
    let day:any = date.getDate();
    day = day < 10 ? '0'+day : day;
    return year+'-'+month+'-'+day; 
  }

  //取得传入日期所在月的最后一天日期 
  getMaxDayOfDate = function(date:Date) { 
    return new Date(date.getFullYear(),date.getMonth()+1,0); 
  }
  // 日期选择
  dateClick(x:number,y:number) {
    let selectedObjcet = this.rili[x][y];
    this.selectedDate = selectedObjcet['date'];
    // if(selectedObjcet['isCurrentMonth']) {
      // this.rili[this.x][this.y]['isSelected'] = false;
      // this.x = x;
      // this.y = y;
      // this.selectedDateStr = this.rili[x][y]['dateStr'];
      // this.rili[x][y]['isSelected'] = true;
      this.initRiliParam(this.selectedDate);
      this.tableInit();
    // } else {
      // this.initRiliParam(this.selectedDate);
      // this.tableInit();
    // }

    // this.currentDateStr = '';
    // this.currentDateStr = this.rili[x][y]['dateStr'];
  }

  //今天点击事件
  todayClick() {
    this.initRiliParam(this.currentDate);
    this.tableInit();
  }
  //年减
  yearSubtract(){
    let firstDate = new Date(this.selectedDate.getFullYear()-1, this.selectedDate.getMonth(), 1);
    this.initRiliParam(firstDate);
    this.tableInit();
  }
  //年加
  yearAdd(){
    let firstDate = new Date(this.selectedDate.getFullYear()+1, this.selectedDate.getMonth(), 1);
    this.initRiliParam(firstDate);
    this.tableInit();
  }
  //月减
  monthSubtract(){
    let firstDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth()-1, 1);
    this.initRiliParam(firstDate);
    this.tableInit();
  }
  //月加
  monthAdd(){
    let firstDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth()+1, 1);
    this.initRiliParam(firstDate);
    this.tableInit();
  }

}
