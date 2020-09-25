import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShipmentDataService } from '../ShipmentData.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor(private shipService : ShipmentDataService) { }

  origin:string;
  destination :string;
  
  ngOnInit() {

  this.origin = this.shipService.OriginCity;
  this.destination = this.shipService.DestinationCity;

  }

}
