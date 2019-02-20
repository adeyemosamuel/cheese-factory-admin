import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material/material.module';
import { FormsModule } from '@angular/forms';

import { CheckerlayoutComponent } from './checkerlayout/checkerlayout.component';
import { FooterComponent } from './footer/footer.component';
import { CheckerdashboardComponent } from './checkerdashboard/checkerdashboard.component';
import { CheckerNavComponent } from './checker-nav/checker-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [CheckerlayoutComponent, FooterComponent, CheckerdashboardComponent, CheckerNavComponent, MessageComponent],
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
    FooterComponent,
    CheckerlayoutComponent,
    CheckerdashboardComponent
],
})
export class CheckerModule { }
