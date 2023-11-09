import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path:"",component:DashboardAdminComponent}
    ])
  ]
})
export class DashboardAdminModule { }
