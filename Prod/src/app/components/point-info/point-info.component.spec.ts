import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { PointInfoComponent } from './point-info.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {By} from "@angular/platform-browser";

describe('PointInfoComponent', () => {
  let component: PointInfoComponent;
  let fixture: ComponentFixture<PointInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PointInfoComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [PointInfoComponent, {
        provide: ActivatedRoute,
        useValue: {snapshot: {params: {'id': 1}}}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should parse name if description Wiki called', () =>{
    const spy = spyOn(component, "nameParser");
    component.getDescriptionWiki('test');
    expect(spy).toHaveBeenCalled();
  });

});
