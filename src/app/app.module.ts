import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from '../component/table/table.component';
import { UploadCompoent } from '../component/upload/upload.component';
import { CalendarComponent } from '../component/calendar/calendar.component';
import { TreeCompoent } from '../component/tree/tree.component';
import { ChildComponent } from '../component/child/child.component';
import { VersionParentComponent } from '../component/ngOnChanges/version-parent.component';
import { VersionChildComponent } from '../component/ngOnChanges/version-child.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { TranslationService } from 'src/service/translation.service';
import { TranslationPipe } from 'src/pipe/translation.pipe';
import { DragDirective } from 'src/directive/drag.directive';
import { LoginComponent } from 'src/component/login/login.component';
import { HomeComponent } from 'src/component/home/home.component';
import { RouteguardService } from 'src/service/routeguard.service';
import { Routeguard1Service } from 'src/service/routeguard02.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UploadCompoent,
    CalendarComponent,
    TranslationPipe,
    TreeCompoent,
    ChildComponent,
    DragDirective,
    VersionParentComponent,
    VersionChildComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [TranslationService,RouteguardService,Routeguard1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
