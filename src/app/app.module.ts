import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BarChartComponent } from  './components/charts/bar-chart/bar-chart.component';
import { HttpService } from './services/http.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material-module';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimeService } from 'src/app/services/time.service';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BarChartComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot()
  ],
  providers: [
    HttpService,
    TimeService
  ],
  entryComponents: [
    SearchComponentComponent
  ],
  bootstrap: [
    AppComponent,
    // SearchComponentComponent //DOTO not sure
  ]
})
export class AppModule { }
