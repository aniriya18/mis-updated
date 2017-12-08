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
  _dChart = [];
  temArr = [];

  constructor(
    private _router: Router,
    private _charts: ProductsService,
    // @Inject(APP_CONFIG) private config: AppConfig 
  ) {
    //console.log("myvalue", this._charts.abc);
   }

  ngOnInit() {
    //alert("hello");
    this.getCharts();
    this.dChart();
  }
  public doughnutChartLabels:string[] = [];
  //public doughnutChartLabels = [];
  public doughnutChartData:number[] = [];
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
      .subscribe(data => {
        console.log("d", data.data);
        for(var i = 0; i < data.data.length; i++){
          var mytemVal = data.data[i]['opinionOptType'];
          this.temArr.push()
        }
      })
     
   }

  moveToProduct() {
    this._router.navigate(['/dashboard/product']);
  }

  dChart() {
   this._dChart = [
      {
        productName: ["product-1", "product-2","product-3"],
        counts: [20, 30, 45]
      }
    ]
    this.doughnutChartLabels = this._dChart[0]['productName'];
    this.doughnutChartData = this._dChart[0]['counts'];
    console.log("chart", this._dChart);
  }

  
}


// var doughnut = [
//   {
//     productName: ["product-1", "product-2","product-3"],
//     counts: [20, 30, 45, 50]
//   }
// ]

// var barChart = [
//   {
//     periods: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
//     amount: [
//       {data: [28, 65, 45, 12, 43, 98], label: 'Series B'},
//       {data: [65, 45, 12, 43, 98, 67], label: 'Series A'}
//     ]
//   }
// ]

