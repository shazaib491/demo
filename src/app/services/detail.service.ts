import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { FetchService } from './fetch.service';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})


export class DetailService {

  constructor(private fetch: FetchService) { }

  getallUser() {
    return this.fetch.get('all-user').pipe(
      map((data: any) => data),
      catchError(error => {
        return throwError('Its a Trap!')
      })
    )
  }

  bankDetail() {
    return this.fetch.get('bank-detail').pipe(
      map((data: any) => data),
      catchError(error => {
        return throwError(error)
      })
    )
  }


  payout() {
    return this.fetch.get('payouts').pipe(
      map((data: any) => data),
      catchError(error => {
        return throwError(error)
      })
    )
  }

  sendResponse(id:String,response:any){
    return this.fetch.put("updatebyUserId",id,response);
  }

  addEnvelop(payload:object){
    return this.fetch.post("addEnvelop",payload);
  }
}
