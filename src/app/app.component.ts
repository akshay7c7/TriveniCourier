import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  ngOnInit(): void {
    
  }
  constructor(private http : HttpClient) {
    
  }
shipmentData : any ;


  getOrderDetails()
  {
      this.http.get('https://track.delhivery.com/api/v1/packages/json/?token=15ebdf87efc5aa3fd0771d148dee0a2b3f8785db&ref_nos=043')
      .subscribe(
        data => {this.shipmentData = data; console.log(this.shipmentData)},

      )
  }
}
