/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShipmentDataService } from './ShipmentData.service';

describe('Service: ShipmentData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipmentDataService]
    });
  });

  it('should ...', inject([ShipmentDataService], (service: ShipmentDataService) => {
    expect(service).toBeTruthy();
  }));
});
