import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent implements OnInit {
  payout: any;
  constructor(private detail: DetailService) { }

  ngOnInit(): void {
    this.detail.payout().subscribe((res) => {
      this.payout = res;

    },
      err => {
        console.log(err);

      })
  }


  response(event: any, id: String,amount:Number) {
     const response ={
       response:event.target.value,
       amount:amount
     }  
    this.detail.sendResponse(id,response).subscribe(res => {
      console.log(res);

    },
      err => {
        console.log(err);

      })

  }
}
