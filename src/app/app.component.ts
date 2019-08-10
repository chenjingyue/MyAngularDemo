import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import{ DomSanitizer }from'@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit,OnDestroy {

  constructor(
      private sanitizer: DomSanitizer
  ){}
  childData:number = 1;
  child:number = 2;
  add () {
    this.child ++;
  }

  tableNames:any;
  tableValues:any;
  tableStyle:any;


  percent:number = 5;
  t1:any;
  circleProgress:boolean = true;

  list:any = [];
  flag:boolean = false;

  buttonList:any = [
    {
      key:"table",
      value:"tableComponent",
      index:1
    },
    {
      key:"calendar",
      value:"calendarComponent",
      index:2
    },
    {
      key:"upload",
      value:"uploadComponent",
      index:3
    }
  ];
  buttonStatus:any = {
    table:{
      view:true
    },
    calendar:{
      view:true
    },
    upload:{
      view:true
    }
  };

  outputEvent(event){
    console.log("app:"+JSON.stringify(this.treelists));
  }

  treelists = [{
    "id":0,
    "parent": -1,
    "name": "A公司",
    "open": true,
    "deep": 0,
    "select":false,
    "children": [
      {
        "id":0,
        "parent": 0,
        "name": "售前部",
        "open": true,
        "deep": 1,
        "select":false,
        "children": [
          {
            "id":0,
            "parent": 0,
            "name": "售前组",
            "open": true,
            "deep": 2,
            "select":false,
            "children": []
          }
        ]
      },
      {
        "id":1,
        "parent": 0,
        "name": "销售部",
        "open": true,
        "deep": 1,
        "select":false,
        "children": [
          {
            "id":0,
            "parent": 1,
            "name": "销售总监",
            "open": true,
            "deep": 2,
            "select":false,
            "children": []
          }
        ]
      },
      {
        "id":2,
        "parent": 0,
        "name": "安全事业部",
        "open": true,
        "deep": 1,
        "select":false,
        "children": [
          {
            "id":0,
            "parent": 2,
            "name": "安全总监",
            "open": true,
            "deep": 2,
            "select":false,
            "children": []
          }
        ]
      },
      {
        "id":3,
        "parent": 0,
        "name": "系统部",
        "open": true,
        "deep": 1,
        "select":false,
        "children": [
          {
            "id":0,
            "parent": 3,
            "name": "安全总监",
            "open": true,
            "deep": 2,
            "select":false,
            "children": []
          }
        ]
      },
      {
        "id":4,
        "parent": 0,
        "name": "开发部",
        "open": true,
        "deep": 1,
        "select":false,
        "children": [
          {
            "id":0,
            "parent": 4,
            "name": "项目组",
            "open": true,
            "deep": 2,
            "select":false,
            "children": []
          },
          {
            "id":1,
            "parent": 4,
            "name": "产品组",
            "open": true,
            "deep": 2,
            "select":false,
            "children": []
          }
        ]
      }
    ]
  }];
 
  ngOnInit() {
    this.list = [
      "aaaa",
      "bbbb",
      "cccc"
    ]
    this.initTableParam();

    // this.t1=window.setInterval(refreshCount, 200);
    // var bThis = this;
    // function refreshCount() {
    //   bThis.percent = bThis.percent + 0.5;

    //   console.log("ready" + bThis.percent);
    //   if (bThis.percent === 50) {
    //     bThis.percent =90;
    //     window.clearInterval(bThis.t1);
    //   }
    // }
    //去掉定时器的方法  
    // window.clearInterval(t1);
  }

  buttonClick(index:number) {
    let key = this.buttonList[index]['key'];
    let flag = this.buttonStatus[key]['view'];
    this.buttonStatus[key]['view'] = !flag;
  }

  ngOnDestroy() {
    // window.clearInterval(this.t1);
  }

  circleProgressIf() {
    this.circleProgress = !this.circleProgress;
  }

  initTableParam() {
    this.tableNames = [
      "id",
      "name",
      "age",
      "class",
      "sex",
      "Hobby"
    ];
    this.tableValues = [];
    for (let index = 1; index < 11; index++) {
      let object = {
        'id': index,
        'name': `name+ ${index}`,
        'age': `age+ ${index}`,
        'class': `class+ ${index}`,
        'sex': `sex+ ${index}`,
        'Hobby': `'Hobby'+ ${index}`
      }
      this.tableValues.push(object);
    }
    
    this.tableStyle = [
      { key:'',
        minWidth:40,
        width:40,
        imgWidth: 20,
        imgHeight: 20,
        type:'button',
        isView:false
      },
      { key:'id',
        minWidth:100,
        width:100,
        type:'text'
      },
      { key:'name',
        minWidth:100,
        width:100,
        type:'text'
      },
      { key:'age',
        minWidth:100,
        width:100,
        type:'text'
      },
      { key:'class',
        minWidth: 100,
        width:100,
        type:'text'
      },
      { key:'sex',
        minWidth:100,
        width:100,
        type:'text'
      },
      { key:'Hobby',
        minWidth:100,
        width:100,
        type:'text'
      },
      {
        key:'operate',
        minWidth:120,
        width:120,
        type:'operate',
        val:[
          {
            name:'编辑',
            type:'edit'
          },
          {
            name:'删除',
            type:'delete'
          }
        ]
      }
    ];
  }

}
