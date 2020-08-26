import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TriveniCourier';

  showTracking:boolean = false;
  TrackPackage()
  {
    this.showTracking=true;
  }
}
