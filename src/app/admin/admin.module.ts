import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material/material.module';
import { FormsModule } from '@angular/forms';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { TransactionmodalComponent } from './transactionmodal/transactionmodal.component';
import { ApplicationsComponent } from './applications/applications.component';
import { FunctionsComponent } from './functions/functions.component';
import { LoanhistoryComponent } from './loanhistory/loanhistory.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [AdminNavComponent, AdminDashboardComponent, AdminlayoutComponent,
     TransactionmodalComponent, ApplicationsComponent, FunctionsComponent, LoanhistoryComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule { }
