import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPointsParcoursComponent } from './admin-points-parcours.component';

describe('AdminPointsParcoursComponent', () => {
  let component: AdminPointsParcoursComponent;
  let fixture: ComponentFixture<AdminPointsParcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPointsParcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPointsParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
