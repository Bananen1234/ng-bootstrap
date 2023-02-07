import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';
import { SharedModule } from "../shared/shared.module";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    SharedModule,
      NgbAccordionModule,
    AccordionRoutingModule
  ]
})
export class AccordionModule { }
