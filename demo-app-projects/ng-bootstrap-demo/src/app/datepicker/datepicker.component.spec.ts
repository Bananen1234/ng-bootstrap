import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {DatepickerRoutingModule} from './datepicker-routing.module';
import {DatepickerInputComponent} from './datepicker-input/datepicker-input.component';
import {DatepickerSimpleComponent} from './datepicker-simple/datepicker-simple.component';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerComponent, DatepickerInputComponent, DatepickerSimpleComponent],
      imports: [
        CommonModule,
        SharedModule,
        RouterTestingModule,
        NgbDatepickerModule,
        DatepickerRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
