import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeCompoent implements OnInit {


  @Input() set Treelists(treelists: any) {
    this.treelists = treelists;
  }
  treelists: any;
  selectImgs: any = {
    select: "/assets/image/selected.png",
    default: "/assets/image/selectDefault.png"
  }
  openImgs: any = {
    down: "/assets/image/DownArrow.png",
    right: "/assets/image/rightArrow.png"
  }



  @Output() output = new EventEmitter();

  ngOnInit() {

    // this.init();
    // console.log("tree");

  }
  outputEvent(event: number) {
    let tree = this.treelists[event['parent']];
    let select = event['select'];
    if (select) {// 需要选中节点
      tree['select'] = select;
      this.output.emit({ "parent": tree['parent'], "select": tree['select'] });
    } else {// 取消节点
      let tempFlag = true;
      let children = tree['children'];
      for (const iterator of children) {
        if (iterator["select"] == !select) {
          console.log("outputEvent:return!!" + tree['name']);
          tempFlag = false;
        }
      }
      if (tempFlag) {
        tree['select'] = select;
      }
      this.output.emit({ "parent": tree['parent'], "select": select });
    }
  }

  select(item, index) {
    let tree = this.treelists[index];
    if (tree['select']) {
      this.selectSun(item, false);
    } else {
      this.selectSun(item, true);
    }
    this.output.emit({ "parent": tree['parent'], "select": tree['select'] });

  }
  selectSun(item, flag) {// 选择节点下的所有内容
    item['select'] = flag;
    if (item['children'].length > 0) {
      for (const iterator of item['children']) {
        this.selectSun(iterator, flag);
      }
    }
  }


  open(item, index) {
    let open = this.treelists[index]['open'];
    if (open) {
      this.openSun(this.treelists[index], !open);
      this.treelists[index]['open'] = !open;
    } else {
      this.treelists[index]['open'] = !open;
    }
  }
  openSun(item, flag) {
    item['open'] = flag;
    if (item['children'].length > 0) {
      for (const iterator of item['children']) {
        this.openSun(iterator, !open)
      }
    }
  }


  init() {
    this.treelists = [{
      "id": "d001",
      "name": "A公司",
      "open": true,
      "deep": 0,
      "children": [
        {
          "id": "d002",
          "name": "售前部",
          "open": true,
          "deep": 1,
          "children": []
        },
        {
          "id": "d003",
          "name": "销售部",
          "open": true,
          "deep": 1,
          "children": [
            {
              "id": "d003001",
              "name": "销售总监",
              "open": true,
              "deep": 2,
              "children": []
            }
          ]
        },
        {
          "id": "d004",
          "name": "安全事业部",
          "open": true,
          "deep": 1,
          "children": []
        },
        {
          "id": "d005",
          "name": "系统部",
          "open": true,
          "deep": 1,
          "children": []
        },
        {
          "id": "d009",
          "name": "开发部",
          "open": true,
          "deep": 1,
          "children": [
            {
              "id": "d009001",
              "name": "项目组",
              "open": true,
              "deep": 2,
              "children": []
            },
            {
              "id": "d009002",
              "name": "产品组",
              "open": true,
              "deep": 2,
              "children": []
            }
          ]
        }
      ]
    }];
  }



  ngOnDestroy() {
    console.log("this is tree!!")
  }

}
