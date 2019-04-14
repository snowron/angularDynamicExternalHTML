import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  DynamicHTMLModule,DynamicComponentModule } from 'ng-dynamic';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ShowComponent
  ],
  imports: [
    HttpClientModule,BrowserModule,DynamicHTMLModule.forRoot({
      components: [
        
      ]
    }),DynamicComponentModule.forRoot({ imports: []}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
DynamicHTMLModule.forRoot({
      components: [
        { component: MyButtonComponent, selector: 'app-my-button' },
      ]
    }),DynamicComponentModule.forRoot({ imports: [SharedModule]}),
  
  */