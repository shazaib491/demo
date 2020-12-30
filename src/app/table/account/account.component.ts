import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private detail: DetailService) { }
  bankdetail: any;
  ngOnInit(): void {
    this.detail.bankDetail().subscribe((res) => {
      this.bankdetail = res;
      
    },
      err => {
        console.log(err);

      })
  }

}
