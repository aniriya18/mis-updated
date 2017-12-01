import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporates',
  templateUrl: './corporates.component.html',
  styleUrls: ['./corporates.component.scss']
})
export class CorporatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public doughnutChartLabels:string[] = ['MedHealth Cards', 'Health Packages', 'Preventive PRograms'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
