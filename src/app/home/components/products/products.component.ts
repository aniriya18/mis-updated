import { Component, OnInit, Inject } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from "./../../../services/products/products.service";
// import { APP_CONFIG, AppConfig} from "./../../../global/global.module";
// import { JwtHelper } from "angular2-jwt";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  chart : Object = {};

  constructor(
    private _router: Router,
    private _charts: ProductsService,
    // @Inject(APP_CONFIG) private config: AppConfig 
  ) { }

  ngOnInit() {
    //alert("hello");
    this.getCharts();
  }
  public doughnutChartLabels:string[] = ['MedHealth Cards', 'Health Packages'];
  public doughnutChartData:number[] = [350, 450];
  public doughnutChartType:string = 'doughnut';
 
  // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
  getCharts(){
    this._charts.getProductInfo()
      // .subscribe(data => {
      //   console.log("my data", data.data);
      // })
    // .subscribe(data => {
    //   this.chart = data.data;
    //   // this.chart['qid'] = Number(data.data['qid']);
    //   console.log("test", data.data);
    //   // let _dob = data.data['dob'];
      
    //   //  this.chart['dob'] = new Date(_dob);
    // });
   //alert("0");
   console.log("testing");
   }
  moveToProduct() {
    this._router.navigate(['/dashboard/product']);
  }

}
