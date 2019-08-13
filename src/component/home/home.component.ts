import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  uploadId:string = "uploadId";
  file:any;
  fileName:string;
  buttonValue:string = '上传';

  // @Input() setTableNames (tableNames:any){
  //   this.tableNames = tableNames;
  // }


  @Output() output = new EventEmitter();

  ngOnInit() {

    // this.initTableParam();
    // this.tableNamesd = this.tableNames;
    console.log("upload");

  }


  ngOnDestroy() {
    console.log("this is upload!!")
  }

}
