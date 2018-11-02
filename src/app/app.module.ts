import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentMarksService } from './services/student-marks.service';
import { HttpClient } from 'selenium-webdriver/http';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewAdmissionComponent,
    StudentMarksComponent,
    SortPipe
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StudentMarksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
