import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonarchsComponent } from './monarchs/monarchs.component';
import { MonarchDetailComponent } from './monarch-detail/monarch-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MonarchsComponent,
    MonarchDetailComponent
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
