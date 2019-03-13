import { MaterialModule } from './../../../material/material/material.module';
import { UsermodalComponent } from '../component/usermodal/usermodal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhonemodalComponent } from './phonemodal/phonemodal.component';
import { DetailsmodalComponent } from './detailsmodal/detailsmodal.component';


@NgModule({
  declarations: [UsermodalComponent, PhonemodalComponent, DetailsmodalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UsermodalComponent,
    PhonemodalComponent,
    DetailsmodalComponent
  ]
})
export class ComponentModule { }
