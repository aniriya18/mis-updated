import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-corporates',
  templateUrl: './corporates.component.html',
  styleUrls: ['./corporates.component.scss']
})
export class CorporatesComponent implements OnInit {

  constructor(private _router: Router) { }

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

  moveToCorporates() {
    this._router.navigate(['/dashboard/corporate']);
  }
}
