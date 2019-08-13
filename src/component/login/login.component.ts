import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

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
    console.log("LoginComponent");

  }


  ngOnDestroy() {
    console.log("this is upload!!")
  }

}
