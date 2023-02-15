import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';
import { SharedModule } from "../shared/shared.module";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    NgbTooltipModule,
    SharedModule,
    TooltipRoutingModule
  ]
})
export class TooltipModule { }
