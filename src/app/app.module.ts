import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { BorrowerFormComponent } from './borrower-form/borrower-form.component';
import { CommentsComponent } from './comments/comments.component';
import { UploadSectionComponent } from './upload-section/upload-section.component';
import { PVSGridComponent } from './pvs-grid/pvs-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PropertyDetailsComponent,
    BorrowerFormComponent,
    CommentsComponent,
    UploadSectionComponent,
    PVSGridComponent,
    ToastNotificationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
