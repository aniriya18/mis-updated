import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  public doughnutChartLabels:string[] = ['MedHealth Cards', 'Health Packages'];
  public doughnutChartData:number[] = [350, 450];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  moveToProduct() {
    this._router.navigate(['/dashboard/product']);
  }
}
