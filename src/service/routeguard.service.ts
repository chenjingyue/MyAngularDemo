import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
@Injectable()
export class RouteguardService implements CanActivate{

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log("canActivate");
    let username = localStorage.getItem("username");
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    // 当前路由名称
    var path = route.routeConfig.path;  
    // 当前路由是login时 
    if (path === 'login') {
      if (!username) {
        // 未登录，跳转到当前路由
        return true;
      }else{
        // 已登录，跳转到home
        this.router.navigate(['home']);
        return false;
      }
    }
    // nextRoute: 设置需要路由守卫的路由集合
    // const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
    // let isLogin = username;  // 是否登录
    // 当前路由是nextRoute指定页时
    // if (nextRoute.indexOf(path) >= 0) {
      if (!username) {
        // 未登录，跳转到login
        this.router.navigate(['login']);
        return false;
      }else{
        // 已登录，跳转到当前路由
        return true;
      }
    // }
    
  }

}