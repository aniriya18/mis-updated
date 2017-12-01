import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-health-packages',
  templateUrl: './health-packages.component.html',
  styleUrls: ['./health-packages.component.scss']
})
export class HealthPackagesComponent implements OnInit {
  @ViewChild('myTable') myTable: any;
  
    rows = []; 
    // expanded: any = {};
    columns = [];
    temp = [];
    pageSize = 1;

  constructor() { }

  ngOnInit() {
    this.rows = [
      { east: 'Kolkata', west: 'Jaipur', north: 'Delhi', south: 'Bangalore' },
      { east: 'Assam', west: 'Gujarat', north: 'Gurgaon', south: 'Mysore' },
      { east: 'Tripura', west: 'Mumbai', north: 'Lucknow', south: 'Chennai' },
      { east: 'Nagaland', west: 'Gandhinagar', north: 'Shimla', south: 'Kerela' },
     
    ];
    this.columns = [
      { prop: 'name' },
      { name: 'east' },
      { name: 'west' },
      { name: 'north' },
      { name: 'south' }
    ];
  }
  updateFilter(eve) {
    const val = eve.target.value.toLowerCase();

     // filter our data
    const temp = this.temp.filter(function(d) {
      return d.prop.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // udpate rows
    this.rows = temp;    
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
