import { LoanhistoryComponent } from './admin/loanhistory/loanhistory.component';
import { FunctionsComponent } from './admin/functions/functions.component';
import { ApplicationsComponent } from './admin/applications/applications.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { MessageComponent } from './checker/message/message.component';
import { CheckerdashboardComponent } from './checker/checkerdashboard/checkerdashboard.component';
import { CheckerlayoutComponent } from './checker/checkerlayout/checkerlayout.component';
import { DashboardComponent } from './maker/dashboard/dashboard.component';
import { MakerlayoutComponent } from './maker/makerlayout/makerlayout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionmodalComponent } from './admin/transactionmodal/transactionmodal.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'inputter', component: MakerlayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent }
  ] },

  { path: 'authorizer', component: CheckerlayoutComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: CheckerdashboardComponent },
    { path: 'message', component: MessageComponent }
] },

{ path: 'admin', component: AdminlayoutComponent, children: [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'users', component: ApplicationsComponent },
  { path: 'applications', component: TransactionmodalComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'loanhistory', component: LoanhistoryComponent },
  { path: 'loanhistory/:phoneNumber', component: LoanhistoryComponent }
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
