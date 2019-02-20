import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material/material.module';
import { FormsModule } from '@angular/forms';
import { MakerfooterComponent } from './makerfooter/makerfooter.component';
import { MakerlayoutComponent } from './makerlayout/makerlayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MakerNavComponent } from './maker-nav/maker-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [MakerfooterComponent, MakerlayoutComponent, DashboardComponent, MakerNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MakerfooterComponent,
    DashboardComponent
],
})
export class MakerModule { }
