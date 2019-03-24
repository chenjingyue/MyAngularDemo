import { Component, OnInit,OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import * as $ from 'jquery';

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
  x:number = 0;
  y:number = 0;
  leftX:number = 0;
  rightX:number = 0;
  tableNameId:string = 'tableNameId_';
  nowTableIndex:number = -1;
  tableIndex:number = -1;
  cursorStyle:boolean = false;
  space:number = 5;
  isMousedown:boolean = false;
  // index:number = -1;
  mousemove(event:any){
    // this.tableIndex = -1;
    let offset = event.pageX - this.x;
    this.x = event.pageX;
    this.y = event.pageY; 
    if(this.isMousedown && this.cursorStyle) {
      let width = this.tableStyle[this.tableIndex]['width'];
      let width1 = width.substr(0, (width.length-2))/1;
      this.tableStyle[this.tableIndex]['width'] = (width1 + offset) + 'px';
      return ;
    }
    this.leftSpace();
    if(this.x-this.leftX <= this.space) {
      // this.isMousedown = false;
      this.cursorStyle = true;
      this.tableIndex = this.nowTableIndex-1;
      // document.getElementById(this.tableNameId + this.nowTableIndex).style.cursor="col-resize"; 
    } else if (this.rightX-this.x <= this.space) {
      // this.isMousedown = false;
      this.cursorStyle = true;
      this.tableIndex = this.nowTableIndex;
      // document.getElementById(this.tableNameId + this.nowTableIndex).style.cursor="col-resize"; 
    } else {
      this.cursorStyle = false;
      this.tableIndex = this.nowTableIndex;
    }
  }
  leftSpace() {
    let div = document.getElementById(this.tableNameId + this.nowTableIndex);
    this.leftX = div.offsetLeft;  //当前div左边两个的点的x值
    this.rightX = this.leftX + div.offsetWidth;  //当前div右边两个点的x的值 
  }
  mouseover(event:any,index:number){
    this.nowTableIndex = index;
    let div = document.getElementById(this.tableNameId + index);
    this.leftX = div.offsetLeft;  //当前div左边两个的点的x值
    this.rightX = this.leftX + div.offsetWidth;  //当前div右边两个点的x的值  
    
    // this.tableIndex = index;
    console.log('mouseover');
  }
  mouseout(){
    this.tableIndex = -1;
    this.cursorStyle = false;
    // this.isMousedown = false;
    console.log('mouseleave');
  }
  mouseleave2(event:any) {
    // $("body").css("cursor","auto");
    this.mouseout();
    this.mouseup(event);
  }

  mousedown(event:any){
    this.isMousedown = true;
    window.getSelection().empty();
  }
  mouseup(event:any){
    this.isMousedown = false;
    this.cursorStyle = false;
    // window.getSelection().empty();
  }
  click() {
    this.isMousedown = false;
    console.log('click');
  }

  // $(document).ready(function(){
  //   $("button").bind({
  //     click:function(){$("p").slideToggle();},
  //     mouseover:function(){$("body").css("background-color","red");},  
  //     mouseout:function(){$("body").css("background-color","#FFFFFF");}  
  //   });
  // });
 


  ngOnDestroy() {
    console.log("this is table!!")
  }

}
