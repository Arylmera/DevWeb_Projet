import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParcoursSelectComponent } from './parcours-select.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ParcoursSelectComponent', () => {
  let component: ParcoursSelectComponent;
  let fixture: ComponentFixture<ParcoursSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursSelectComponent ],
      imports : [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should load parcours', () => {
    expect(component.parcoursList).not.toBeNull();
  });

  it('should return 0 for number of point', () => {
    component.parcoursPointList = [];
    expect(component.numberOfPoints() == 0).toBeTruthy()
  });

  it('should return 1 for number of point', () => {
    component.parcoursPointList =
      [{"idPoint":1,"idParcours":1,"numeroParcours":1}];
    expect(component.numberOfPoints() == 1).toBeTruthy()
  });

  it('should return 6 for number of point', () => {
    component.parcoursPointList =
      [{"idPoint":1,"idParcours":1,"numeroParcours":1},
      {"idPoint":2,"idParcours":1,"numeroParcours":2},
      {"idPoint":3,"idParcours":1,"numeroParcours":3},
      {"idPoint":4,"idParcours":1,"numeroParcours":4},
      {"idPoint":5,"idParcours":1,"numeroParcours":5},
      {"idPoint":6,"idParcours":1,"numeroParcours":6}];
    expect(component.numberOfPoints() == 6).toBeTruthy()
  });

});
