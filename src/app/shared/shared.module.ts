import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularExemplifyModule } from "../../../angular-exemplify/lib/angular-exemplify.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularExemplifyModule
  ],
  exports: [
    AngularExemplifyModule
  ]
})
export class SharedModule { }
