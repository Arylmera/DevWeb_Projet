import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursSelectComponent } from './parcours-select.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ParcoursSelectComponent', () => {
  let component: ParcoursSelectComponent;
  let fixture: ComponentFixture<ParcoursSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursSelectComponent ],
      imports : [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
