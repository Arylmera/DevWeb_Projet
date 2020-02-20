import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthOFourthComponent } from './fourth-o-fourth.component';

describe('FourthOFourthComponent', () => {
  let component: FourthOFourthComponent;
  let fixture: ComponentFixture<FourthOFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthOFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthOFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
