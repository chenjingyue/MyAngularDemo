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
  sumWidth:number = 0;
  sumMinWidth:number = 0;

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

  
  tableNameID1:string = "tableNameID1";
  
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    let bThis = this;
    $("#"+this.tableNameID1).bind("mousemove",function(e3){
      bThis.mousemove(e3);
    })
  }
  ngOnInit() {
    this.initParam();
    // let bThis = this;
    // var aa = $('#ccc');
    // var bb = document.getElementById(this.tableNameID1);
    // $("#"+this.tableNameID1).bind("mousemove",function(e3){
    //   bThis.mousemove(e3);
    // })
    // this.initTableParam();
    // this.tableNamesd = this.tableNames;
    console.log("table ngOnInit");

  }
  initParam(){
    
    for (let index = 0; index < this.tableStyle.length; index++) {
      let width = this.tableStyle[index]['width'];
      let minWidth = this.tableStyle[index]['minWidth'];
      this.sumWidth += width;
      this.sumMinWidth += minWidth;
    }
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
  movedTableIndex:number = -1;
  cursorStyle:boolean = false;
  space:number = 3;
  isMousedown:boolean = false;
  tableNameID:string = "tableNameID";
  tableValueID:string = "talbeValueID";
  moving:boolean = false;
  // index:number = -1;
  mousemove(event:any){
    event.preventDefault();
    this.x = event.pageX;
    this.y = event.pageY; 
    this.leftSpace();
    let element = $("#"+this.tableValueID);
    let scrollLeft = 0;
    if (this.hasScrolled(element[0],"horizontal")){
      scrollLeft = element[0].scrollLeft;
    }
    if(this.nowTableIndex > 0 && this.x+scrollLeft-this.leftX <= this.space) {
      this.cursorStyle = true;
      this.tableIndex = this.nowTableIndex-1;
      this.movedTableIndex = this.tableIndex;
      // document.getElementById(this.tableNameId + this.nowTableIndex).style.cursor="col-resize"; 
    } else if (this.rightX-this.x-scrollLeft <= this.space) {
      // this.isMousedown = false;
      this.cursorStyle = true;
      this.tableIndex = this.nowTableIndex;
      this.movedTableIndex = this.tableIndex;
    } else {
      // this.cursorStyle = true;
      this.cursorStyle = false;
      this.tableIndex = this.nowTableIndex;
      console.log('mousemove');
    }
  }
  leftSpace() {
    let div = document.getElementById(this.tableNameId + this.nowTableIndex);
    this.leftX = div.offsetLeft;  //当前div左边两个的点的x值
    this.rightX = this.leftX + div.offsetWidth;  //当前div右边两个点的x的值 
  }
  mouseover(event:any,index:number){
    this.nowTableIndex = index;
    if(this.moving) {
      return;
    }
    this.movedTableIndex = index;
    let div = document.getElementById(this.tableNameId + index);
    this.leftX = div.offsetLeft;  //当前div左边两个的点的x值
    this.rightX = this.leftX + div.offsetWidth;  //当前div右边两个点的x的值  
    console.log('mouseover');
  }
  mouseout(){
    if(this.moving) {
      return;
    }
    this.tableIndex = -1;
    this.cursorStyle = false;
    console.log('mouseleave');
  }

  mousedown(event:any){
    event.preventDefault();// 防止默认事件
    this.isMousedown = true;
    // window.getSelection().empty();
    let bThis = this;
    if(bThis.cursorStyle) {
      bThis.moving = true;
      $("#"+bThis.tableNameID1).unbind("mousemove");
      $(document).bind("mousemove",function(e1){
        // e1.preventDefault();
        bThis.tableIndex = bThis.movedTableIndex;
        $("html").css("cursor","col-resize");
        console.log('e1');
        let offset = e1.pageX - bThis.x;
        bThis.x = e1.pageX;
        bThis.y = e1.pageY; 
        let minWidth = bThis.tableStyle[bThis.movedTableIndex]['minWidth'];
        let width = bThis.tableStyle[bThis.movedTableIndex]['width'];
        let newWidth = width + offset;
        if(newWidth < minWidth) {
          return;
        }
        bThis.sumWidth = Math.max(bThis.sumMinWidth, bThis.sumWidth+offset);
        bThis.tableStyle[bThis.movedTableIndex]['width'] = Math.max(newWidth,minWidth);
          
      }).bind("mouseup",function(e2){
        // e2.preventDefault();
        $(document).unbind("mousemove");
        bThis.moving = false;
        $("html").css("cursor","auto");
        // $("#"+bThis.tableNameId+bThis.nowTableIndex).css('cursor','pointer');
        bThis.cursorStyle = false;
        // bThis.mouseout();
        console.log("e2");
        $("#"+bThis.tableNameID1).bind("mousemove",function(e3){
          console.log('wwwwwwwwwww:');
          bThis.mousemove(e3);
        });
        $(document).unbind("mouseup");
      });
    }
  }
  
  onscroll(event:any) {
    let target = event.target.scrollLeft;
    // var t = $("#"+this.tableNameID);
    $("#"+this.tableNameID).scrollLeft(target);
    // document.getElementById(this.tableNameID).scrollLeft = target;
  }
  // 判断是否存在滚动条
  hasScrolled(element,direction){
    if(direction==='vertical'){
        return element.scrollHeight>element.clientHeight;
    }else if(direction==='horizontal'){
        return element.scrollWidth>element.clientWidth;
    }
  }



  ngOnDestroy() {
    console.log("this is table!!")
  }

}
