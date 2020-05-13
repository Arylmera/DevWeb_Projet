import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MapComponent } from './map.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterModule} from "@angular/router";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {By} from "@angular/platform-browser";

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports : [HttpClientTestingModule,  RouterModule.forRoot([])],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MatBottomSheet, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should render title', () => {
    component.loading = false;
    expect(fixture.nativeElement.querySelector('.mat-title').textContent).toBeTruthy();
  });

  it( 'should not render title', () => {
    component.loading = true;
    expect(fixture.nativeElement.querySelector('.mat-title').textContent).toBeTruthy();
  });

  it('should clear routingWaypoints', () => {
    component.routingWaypoints = [1,2,3,4];
    component.clearRoute();
    expect(component.routingWaypoints).toEqual([]);
  });

  it('should call showRoutingLegend', () => {
    component.loading = false;
    const spy = spyOn(component, "showRoutingLegend");
    component.showRoutingLegend();
    expect(spy).toHaveBeenCalled();
  });

  it('should change state of showRouting to true', () => {
    component.loading = false;
    component.showRouting = false
    component.showRoutingLegend();
    expect(component.showRouting).toBeTruthy();
  });

  it('should change state of showRouting to false', () => {
    component.loading = false;
    component.showRouting = true
    component.showRoutingLegend();
    expect(component.showRouting).toBeFalsy();
  });

  it('should call RoutingPoint', () => {
    component.loading = false;
    const spy = spyOn(component, 'addRoutingPoint');
    component.sidenavOpen();
    expect(spy).toHaveBeenCalled();
  });

  it( 'should pars latLong', () => {
    expect(component.parsPointXYLatLng([0,0])).toBeTruthy();
  });

});
