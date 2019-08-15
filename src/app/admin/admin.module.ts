import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule } from '@angular/forms';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';


@NgModule({
  declarations: [AdminNavComponent, AdminDashboardComponent, AdminlayoutComponent],
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
