import { MaterialModule } from './../../../material/material/material.module';
import { UsermodalComponent } from '../component/usermodal/usermodal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsermodalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UsermodalComponent
  ]
})
export class ComponentModule { }
