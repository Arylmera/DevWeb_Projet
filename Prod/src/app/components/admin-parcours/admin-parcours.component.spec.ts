import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParcoursComponent } from './admin-parcours.component';

describe('AdminParcoursComponent', () => {
  let component: AdminParcoursComponent;
  let fixture: ComponentFixture<AdminParcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
