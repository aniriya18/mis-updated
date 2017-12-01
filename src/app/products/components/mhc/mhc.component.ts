import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';


@Component({
  selector: 'app-mhc',
  templateUrl: './mhc.component.html',
  styleUrls: ['./mhc.component.scss']
})
export class MhcComponent implements OnInit {
  @ViewChild('myTable') myTable: any;
  
    rows = []; 
    // expanded: any = {};
    columns = [];
    temp = [];
    pageSize = 1;
    //pageSizeOptions = [5, 10, 25, 100];

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
  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();

  //   // filter our data
  //   const temp = this.temp.filter(function(d) {
  //     return d.name.toLowerCase().indexOf(val) !== -1 || !val;
  //   });

  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.myTable.offset = 0;
  // }
  updateFilter(eve) {
    const val = eve.target.value.toLowerCase();

     // filter our data
    const temp = this.temp.filter(function(d) {
      return d.prop.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // udpate rows
    this.rows = temp;    
  }
  public doughnutChartLabels:string[] = ['Silver', 'Gold', 'Platinum', 'Diamond'];
  public doughnutChartData:number[] = [350, 450, 100, 200];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
