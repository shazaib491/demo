import { Component, OnInit } from '@angular/core';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private detail: DetailService) { }

  ngOnInit(): void {

  }

}
