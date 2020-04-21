import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PointSheetComponent } from './point-sheet.component';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";

describe('PointSheetComponent', () => {
  let component: PointSheetComponent;
  let fixture: ComponentFixture<PointSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSheetComponent ],
      imports: [MatBottomSheetModule]
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
