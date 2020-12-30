import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';
interface envelop {
  coin: any,
  _userId: String
}
@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {

  id: any;
  parameterValue: any;
  envelop: envelop = {
    coin: 1,
    _userId: ''
  }
  constructor(
    private route: ActivatedRoute,
    private detail: DetailService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('_id');


  }

  submit() {
    this.envelop._userId = this.id;
    this.detail.addEnvelop(this.envelop).subscribe((res) => {
      
      
    },
      err => {
        console.log(err);

      })


  }
}
