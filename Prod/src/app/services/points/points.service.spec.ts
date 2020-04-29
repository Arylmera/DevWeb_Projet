import { TestBed } from '@angular/core/testing';
import { PointsService } from './points.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PointsService', () => {
  let service: PointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(PointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('to return Points from API', () => {
    service.recupPoints().subscribe( (data) => {
      expect(data).toBeTruthy();
    });
  });

  it('to return Categ from API', () => {
    service.recupCategories().subscribe( (data) => {
      expect(data).toBeTruthy();
    });
  });

  it('to return first 5 Points from API', () => {
    service.recupParcoursPointsById(1).subscribe( (data) => {
      expect(data).toBeTruthy();
    });
    service.recupParcoursPointsById(2).subscribe( (data) => {
      expect(data).toBeTruthy();
    });
    service.recupParcoursPointsById(3).subscribe( (data) => {
      expect(data).toBeTruthy();
    });
    service.recupParcoursPointsById(4).subscribe( (data) => {
      expect(data).toBeTruthy();
    });
    service.recupParcoursPointsById(5).subscribe( (data) => {
      expect(data).toBeTruthy();
    });
  });

  it('to return Parcours from API', () => {
    service.recupParcours().subscribe( (data) => {
      expect(data).toBeTruthy();
    });
  });

  it('to return the 2 first Parcours from API', () => {
    service.recupParcoursById(1).subscribe( (data) => {
      expect(data).toBeTruthy();
    });
    service.recupParcoursById(2).subscribe( (data) => {
      expect(data).toBeTruthy();
    });
  });
});
