import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursSelectComponent } from './parcours-select.component';

describe('ParcoursSelectComponent', () => {
  let component: ParcoursSelectComponent;
  let fixture: ComponentFixture<ParcoursSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursSelectComponent ]
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
