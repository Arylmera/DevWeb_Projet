import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSheetComponent } from './point-sheet.component';

describe('PointSheetComponent', () => {
  let component: PointSheetComponent;
  let fixture: ComponentFixture<PointSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSheetComponent ]
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
