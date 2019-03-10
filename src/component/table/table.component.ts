import { Component, OnInit,OnDestroy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tableList',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  tableNames:any;
  tableValues:any;
  tableStyle:any;

  // @Input("tableNames") tableNames: any;
  // @Input("tableValues") tableValues: any;
  // @Input("tableStyle") tableStyle: any;

  @Input() set TableNames(tableNames:any){
    this.tableNames = tableNames;
  }

  @Input() set TableValues(tableValues:any){
    this.tableValues = tableValues;
  }

  @Input() set TableStyle(tableStyle:any){
    this.tableStyle = tableStyle;
  }

  @Output() output = new EventEmitter();

  ngOnInit() {

    // this.initTableParam();
    // this.tableNamesd = this.tableNames;
    console.log("table");

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
    for (let index = 0; index < 10; index++) {
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
  ngOnDestroy() {
    console.log("this is table!!")
  }

}