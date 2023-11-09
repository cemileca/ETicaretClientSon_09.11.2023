import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersAdminComponent } from './orders-admin.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    OrdersAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: OrdersAdminComponent }
    ]),
    MatPaginatorModule
  ]
})
export class OrdersAdminModule { }
