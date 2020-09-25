import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShipmentDataService } from './ShipmentData.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProgressComponent } from './progress/progress.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  ngOnInit(): void {
    
  }
  constructor(private shipService : ShipmentDataService, private dialog : MatDialog) {
    
  }

 orderId : number;
 OriginCity;string;
 DestinationCity:string;
 status:any;


  getOrderDetails()
  {const dialogCongif = new MatDialogConfig();
    dialogCongif.autoFocus = true;
    dialogCongif.width = "400px";
    dialogCongif.height = "400px";
    //dialogCongif.data = element.id;
    this.dialog.open(ProgressComponent, dialogCongif);
      return this.shipService.getOrderDetails(this.orderId)
      .subscribe(
        data => {
          console.log(data['ShipmentData'][0]['Shipment']['Origin']);
          console.log(data['ShipmentData'][0]['Shipment']['Status']);
          console.log(data['ShipmentData'][0]['Shipment']['Destination']);
          
          this.OriginCity = data['ShipmentData'][0]['Shipment']['Origin'];
          this.DestinationCity = data['ShipmentData'][0]['Shipment']['Destination'];
          this.status = data['ShipmentData'][0]['Shipment']['Status']['StatusLocation'];
        }
      )
  }
}
