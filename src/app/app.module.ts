import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentListComponent } from 'src/StudentList/studentlist.component';
import{FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighLightDirective } from 'src/Highlightdirective/highlight.directive';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { NameServices } from './Services/service';

@NgModule({
  declarations: [
    AppComponent,StudentListComponent,HighLightDirective, Component1Component, Component2Component, Component3Component, Component4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NameServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
