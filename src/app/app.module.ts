import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';

import {FormsModule} from '@angular/forms';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddUniversityComponent } from './add-university/add-university.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    RequestDetailComponent,
    AddSubjectComponent,
    AddUniversityComponent
  ],
  imports: [
	FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
