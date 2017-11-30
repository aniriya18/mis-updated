import { Component, OnInit } from '@angular/core';
//import { ProductComponent } from './../../../products/components/product/product.component';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public doughnutChartLabels:string[] = ['MedHealth Cards', 'Health Packages', 'Preventive Programs'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  moveToProduct(){
    // this._router.navigate(['/dashboard/product']);
    alert(0);
  }
}

