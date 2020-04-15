import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Conduciendo', 'Comiendo',
    'Tomando', 'Durmiendo', 'Diseñando', 'Codificando', 'Paseando', 'Corriendo'];

  public radarChartData: ChartDataSets[] = [
    { data: [22, 65, 59, 90, 81, 56, 55, 40], label: 'Ana' },
    { data: [34, 28, 48, 40, 19, 96, 27, 100], label: 'María' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
