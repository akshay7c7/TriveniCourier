import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      this.http.get('http://track.delhivery.com/api/v1/packages/json/?token=15ebdf87efc5aa3fd0771d148dee0a2b3f8785db&ref_nos='+orderId)
      .subscribe(
        data => {
          console.log(data['ShipmentData'][0]['Shipment']['Origin']);
          console.log(data['ShipmentData'][0]['Shipment']['Status']);
          console.log(data['ShipmentData'][0]['Shipment']['Destination']);
          
          this.OriginCity = data['ShipmentData'][0]['Shipment']['Origin'];
          this.DestinationCity = data['ShipmentData'][0]['Shipment']['Destination'];
          this.status = data['ShipmentData'][0]['Shipment']['Status'];
        },

      )
  }

}
