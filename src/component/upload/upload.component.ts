import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadCompoent implements OnInit {

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

  uploadClick() {
    if(this.buttonValue === '上传') {
      $('#uploadId').click();
    } else {
      this.file = undefined;
      this.fileName = '';
      this.buttonValue = '上传';
    }
  }

  inputChange(event:any) {
    this.file = event.currentTarget.files[0];
    this.buttonValue = '删除';
    this.fileName = this.file.name;
    //大小 字节 
    var fileSize = this.file.size;
    console.log(fileSize);//350061
    //类型 
    var fileType = this.file.type;
    console.log(fileType);//350061
  }

  upload() {
    var formData = new FormData();
    // formData.append("author", "hooyes"); 
    formData.append("file", this.file);  
    // formData.append("myfile", document.getElementById("file1").files[0]);   
    $.ajax({
        url: "http://localhost:8080/users",
        type: "POST",
        dataType: "json",
        data: formData,
        /**
        *必须false才会自动加上正确的Content-Type
        */
        contentType: false,
        /**
        * 必须false才会避开jQuery对 formdata 的默认处理
        * XMLHttpRequest会对 formdata 进行正确的处理
        */
        processData: false,
        success: function (data) {
            if (data.code == "200") {
                alert("上传成功！");
            } else {
                alert("服务端错误！");
            }
        },
        error: function (data) {
            alert("上传失败！" + data.status);
        }
    });
  }

  ngOnDestroy() {
    console.log("this is upload!!")
  }

}
