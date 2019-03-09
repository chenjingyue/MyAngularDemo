import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from '../component/table/table.component';
import { UploadCompoent } from '../component/upload/upload.component';
import { CalendarComponent } from '../component/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UploadCompoent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
