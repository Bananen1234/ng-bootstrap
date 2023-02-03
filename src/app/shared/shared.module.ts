import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularExemplifyModule } from "../../../angular-exemplify/lib/angular-exemplify.module";
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularExemplifyModule
  ],
  exports: [
    AngularExemplifyModule,
    FormsModule,
    ReactiveFormsModule,    
    CommonModule
  ],
  providers:[
    FormBuilder
  ]
})
export class SharedModule { }
