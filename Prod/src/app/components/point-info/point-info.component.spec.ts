import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { PointInfoComponent } from './point-info.component';
import {RouterModule} from "@angular/router";

describe('PointInfoComponent', () => {
  let component: PointInfoComponent;
  let fixture: ComponentFixture<PointInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointInfoComponent ],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
