import {Injectable} from '@angular/core';
declare var require;

@Injectable()
export class TranslationService {

  language:string = "zh_cn";
  json:any ;


  constructor() {
    this.language = sessionStorage.language ? sessionStorage.language : "zh_cn";
    this.load(this.language);
  }

  translation(key:string):any {
    if(!key){
      return "";
    }
    return this.json[key] ?  this.json[key]:key;
  }

  load(language:string) {
    if("zh_cn"==language) {
      this.json = this.getZh();
    } else if ("en_us"==language) {
      let aa = this.getEn();
      this.json = JSON.parse(aa);
    } else {
      this.json = JSON.parse("{}");
    }
  }

  getEn(): any {
    return require("../assets/i18n/zh_cn.json");
  }

  getZh(): any {
    return require("../assets/i18n/zh_cn.json");
  }
}
