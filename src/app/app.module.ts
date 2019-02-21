import { AuthGuardService } from './auth-guard.service';
import { ServerService } from './server.service';
import { AdminModule } from './admin/admin.module';
import { MakerModule } from './maker/maker.module';
import { CheckerModule } from './checker/checker.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    AdminModule,
    HttpClientModule,
    CheckerModule,
    MakerModule
  ],
  providers: [
    ServerService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
