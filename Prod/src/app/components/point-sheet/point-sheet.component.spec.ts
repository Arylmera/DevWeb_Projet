import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PointSheetComponent } from './point-sheet.component';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('PointSheetComponent', () => {
  let component: PointSheetComponent;
  let fixture: ComponentFixture<PointSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSheetComponent ],
      imports: [MatBottomSheetModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MatBottomSheet, useValue: {} },
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
