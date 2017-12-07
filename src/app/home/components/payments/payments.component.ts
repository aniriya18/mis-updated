import { Component, OnInit, Inject } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PaymentsService } from "./../../../services/payments/payments.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [PaymentsService]
})
export class PaymentsComponent implements OnInit {
  graph : Object = {};
  _bChart = [];
  xyx = [];

  constructor(
    private _router: Router,
    private _graphs: PaymentsService,
  ) { }

  ngOnInit() {
    this.getPaymentChart();
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   public barChartLabels:string[] = [];
   //public barChartLabels:string[] = ['qid'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [];
 
  // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
 
  getGraph(){
    this._graphs.getPaymentInfo()
    .subscribe(data => {
      console.log(data.data);
      for(var i = 0; i < data.data.length; i++) {
       console.log(data.data[i]['question']);
       let x = String(data.data[i]['opinionType']);
       console.log(x);
       this.xyx.push(x);
       this.barChartLabels.push(String(data.data[i]['opinionType'])+",");
        //this.doughnutChartLabels[i].push(data.data[i]['opinionType']);
      }
    })
   //this.doughnutChartLabels.push("abc","xyz");
    console.log("ani", this.xyx);
  }

  moveToPayment() {
    this._router.navigate(['/dashboard/payment']);
    //alert("hello");
  }

  getPaymentChart() {
    this._bChart = [
      {
        periods: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        amount: [
          {data: [28, 65, 45, 12, 43, 98], label: 'Series B'},
          {data: [65, 45, 12, 43, 98, 67], label: 'Series A'}
        ]
      }
    ]
    this.barChartLabels = this._bChart[0]['periods'];
    this.barChartData = this._bChart[0]['amount'];
  }
}
