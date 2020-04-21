import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDialogComponent } from './admin-dialog.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDialogRef} from "@angular/material/dialog";

describe('AdminDialogComponent', () => {
  let component: AdminDialogComponent;
  let fixture: ComponentFixture<AdminDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDialogComponent ],
      imports: [HttpClientTestingModule, MatDialogRef]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
