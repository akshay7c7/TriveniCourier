import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipmentDataService {

constructor(private http: HttpClient) { }

  status : any ;
  OriginCity : string;
  DestinationCity : string


  getOrderDetails(orderId : number)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});
      return this.http
      .get('https://track.delhivery.com/api/v1/packages/json/?token=15ebdf87efc5aa3fd0771d148dee0a2b3f8785db&ref_nos='+orderId, {responseType: 'text', headers});
  }

}
