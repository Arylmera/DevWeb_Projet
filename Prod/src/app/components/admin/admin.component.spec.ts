import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PointsService} from "../../services/points/points.service";
import {Inject} from "@angular/core";

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let pointService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports : [HttpClientTestingModule],
      providers : [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    pointService = TestBed.inject(PointsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load list Point', () => {
    expect(component.pointsList).not.toBeNull();
  });

  it('should make point 1 UnAccessible', () => {
    inject([PointsService], (pointService) => {
      component.toggleAccessibilite(1, 0);
      pointService.recupPointById(1).subscribe( (data) => {
        expect(data[0].disponiblePoint).toBeFalsy();
      },
        () => {},
        () =>{
        component.toggleAccessibilite(1, 1);
      });
    });
  });
});
