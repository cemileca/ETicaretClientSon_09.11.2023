import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersAdminComponent } from './customers-admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: "", component: CustomersAdminComponent }
    ]),
  ]
})
export class CustomersAdminModule { }
