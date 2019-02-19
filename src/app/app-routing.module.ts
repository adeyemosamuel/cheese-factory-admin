import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    LoginComponent,
 ]
})
export class AppRoutingModule { }
