import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import { SharedModule } from '../shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [DropdownComponent, SelectComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    DropdownRoutingModule
  ]
})
export class DropdownModule { }
