import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/component/login/login.component';
import { HomeComponent } from 'src/component/home/home.component';
import { RouteguardService } from 'src/service/routeguard.service';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',   // 初始路由重定向[写在第一个]
    redirectTo: 'login',
    pathMatch: 'full'  // 必须要设置
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouteguardService]
  },
  {
    path: '**',   // 错误路由重定向[写在最后一个]
    redirectTo: 'home',
    pathMatch: 'full'  // 必须要设置
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
