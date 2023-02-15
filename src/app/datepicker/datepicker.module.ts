import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';
import { NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { DatepickerSimpleComponent} from "./datepicker-simple/datepicker-simple.component";
import { DatepickerInputComponent} from "./datepicker-input/datepicker-input.component";
import { SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [DatepickerComponent, DatepickerSimpleComponent, DatepickerInputComponent],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    SharedModule,
    DatepickerRoutingModule
  ]
})
export class DatepickerModule { }
