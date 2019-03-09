import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  

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

  ngOnInit() {
    // this.initTableParam();
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
