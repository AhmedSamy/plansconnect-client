import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule, MdIconRegistry} from '@angular/material';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PlanBuilderComponent, ConfirmDialog} from "./plan/builder.component";
import {WorkoutDialog} from "./plan/workout.dialog";
import {WorkoutService} from "./workout/workout.service";
import {UserManager} from "./user/user.manager";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    PlanBuilderComponent,
    ConfirmDialog,
    WorkoutDialog
  ],
  entryComponents: [
    ConfirmDialog,
    WorkoutDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [WorkoutService, UserManager, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
