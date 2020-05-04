import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPointsComponent } from './admin-points.component';

describe('AdminPointsComponent', () => {
  let component: AdminPointsComponent;
  let fixture: ComponentFixture<AdminPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
