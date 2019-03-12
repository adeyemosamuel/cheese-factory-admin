import { MaterialModule } from './../../../material/material/material.module';
import { UsermodalComponent } from '../component/usermodal/usermodal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhonemodalComponent } from './phonemodal/phonemodal.component';


@NgModule({
  declarations: [UsermodalComponent, PhonemodalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UsermodalComponent,
    PhonemodalComponent
  ]
})
export class ComponentModule { }
