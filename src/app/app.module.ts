import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from '../component/table/table.component';
import { UploadCompoent } from '../component/upload/upload.component';
import { CalendarComponent } from '../component/calendar/calendar.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { TranslationService } from 'src/service/translation.service';
import { TranslationPipe } from 'src/pipe/translation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UploadCompoent,
    CalendarComponent,
    TranslationPipe
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
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
