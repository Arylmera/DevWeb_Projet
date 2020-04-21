import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamComponent } from './cam.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CamComponent', () => {
  let component: CamComponent;
  let fixture: ComponentFixture<CamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamComponent ],
      imports : [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
