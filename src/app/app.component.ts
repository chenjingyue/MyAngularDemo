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
bgpictrue=this.sanitizer.bypassSecurityTrustStyle("url('"+"src\assets\image\radioDefault.png"+"')");

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
      { key:'',
        minWidth:40,
        width:40,
        imgWidth: 20,
        imgHeight: 20,
        type:'button'
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
