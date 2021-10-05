import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderEntryComponent } from './order-entry/order-entry/order-entry.component';
import { FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabTestsComponent } from './lab-tests/lab-tests.component'

@NgModule({
  declarations: [
    AppComponent,
    OrderEntryComponent,
    LabTestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
