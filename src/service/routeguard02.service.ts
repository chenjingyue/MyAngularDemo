import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import { HomeComponent } from 'src/component/home/home.component';
@Injectable()
export class Routeguard1Service implements CanDeactivate<any>{
  constructor(
    private router: Router
  ) { }

  // canDeactivate(component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
  //    nextState?: RouterStateSnapshot): 
  // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

  canDeactivate(component: any) {
    console.log("canDeactivate");
    return true;

  }

}