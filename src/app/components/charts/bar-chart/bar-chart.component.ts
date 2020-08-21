import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

    myColors: any = [
      { name: 'workDay', value: '#11ECE5' },
      { name: 'weekend', value: '#11ECE5' }
    ]; // TODO need diferent colors for value

    data: any[];
    showXAxis = false;
    showYAxis = false;
    gradient = true;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';

    colorScheme = {
      domain: ['#11ECE5']
    };

  constructor(private http: HttpService) {
    this.data = this.http.data;
    this.getDataAndFill(this.http.data);
  }

  ngOnInit(): void {
  }

  getDataAndFill(data) {
    Object.assign(this, { data });
  }

}
