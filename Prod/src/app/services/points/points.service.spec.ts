import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { PointsService } from './points.service';

describe('PointsService', () => {
  let service: PointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations : [PointsService],
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(PointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
