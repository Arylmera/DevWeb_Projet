import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGoogleMapComponent } from './nav-google-map.component';

describe('NavGoogleMapComponent', () => {
  let component: NavGoogleMapComponent;
  let fixture: ComponentFixture<NavGoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavGoogleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
