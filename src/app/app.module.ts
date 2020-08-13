import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { HttpService } from './services/http.service';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
