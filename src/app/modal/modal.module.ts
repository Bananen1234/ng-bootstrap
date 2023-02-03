import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import {SharedModule} from "../shared/shared.module";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import { AngularExemplifyModule } from 'angular-exemplify/lib/angular-exemplify.module';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModalModule,
    ModalRoutingModule
  ]
})
export class ModalModule { }
