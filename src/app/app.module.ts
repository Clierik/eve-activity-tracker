import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { ChartistModule } from 'ng-chartist';
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
    AppRoutingModule,
    ChartistModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
