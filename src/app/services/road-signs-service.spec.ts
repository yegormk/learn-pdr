import { TestBed } from '@angular/core/testing';

import { RoadSignsService } from './road-signs-service';

describe('RoadSignsService', () => {
  let service: RoadSignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadSignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
