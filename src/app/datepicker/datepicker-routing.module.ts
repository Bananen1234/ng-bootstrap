import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatepickerComponent } from './datepicker.component';

const routes: Routes = [{ path: '', component: DatepickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatepickerRoutingModule { }
