import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [GettingStartedComponent],
  imports: [
    CommonModule,
    SharedModule,
    GettingStartedRoutingModule
  ]
})
export class GettingStartedModule { }
