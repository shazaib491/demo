import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';
interface user {
  email: string,
  role: string,
  coins: number
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: user[] = [];
  constructor(private detail: DetailService) { }

  ngOnInit(): void {
    this.detail.getallUser().subscribe((res) => {
      this.user.push(res)
    },
      err => {
        console.log(err);
      }
    )
  }

}
