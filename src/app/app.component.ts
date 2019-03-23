import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit,OnDestroy {

  

  table:boolean = true;
  upload:boolean = true;
  uploadIf() {
    this.upload = !this.upload;
  }

  tableIf() {
    this.table = !this.table;
  }


  tableNames:any;
  tableValues:any;
  tableStyle:any;
  percent:number = 5;
  t1:any;
  circleProgress:boolean = true;

  ngOnInit() {
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

  ngOnDestroy() {
    window.clearInterval(this.t1);
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
      { key:'id',
        width:'100px',
        type:'text'
      },
      { key:'name',
        width:'100px',
        type:'text'
      },
      { key:'age',
        width:'100px',
        type:'text'
      },
      { key:'class',
        width:'100px',
        type:'text'
      },
      { key:'sex',
        width:'100px',
        type:'text'
      },
      { key:'Hobby',
        width:'100px',
        type:'text'
      },
      {
        key:'operate',
        width:'120px',
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
