
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

{ path: 'admin', component: AdminlayoutComponent, children: [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboardComponent },
] },




  { path: 'login',
   component: LoginComponent,
  canActivate: [AuthGuardService] },
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
