import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class PersonPhoneService {
  
  constructor(private http:HttpClient, private shared:SharedService) { }
  getAll(data:any){
    return this.http.get(`${this.shared.baseUrl}/PersonPhone?PhoneNumberTypeID=${data.PhoneNumberTypeID}`,);
  }
  
  get(data:any){
  }

  add(data:any){
    return this.http.post(`${this.shared.baseUrl}/addPersonPhone`,data);
  }

  edit(data:any) {

  }
  delete(data:any) {
    return this.http.post(`${this.shared.baseUrl}/delPersonPhone`,data);
  }
}
