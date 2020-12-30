import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  get(url:String){
    return this.http.get(`${environment.url}/${url}`);
  }

  post(url:String,data:object,){
    console.log(data);
    
    return this.http.post(`${environment.url}/${url}`,data)
  }

  put(url:String,id:String,response:String){
    return this.http.patch(`${environment.url}/${url}/${id}`,response)
  }

}
