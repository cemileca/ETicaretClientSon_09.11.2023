import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminModule } from './products-admin/products-admin.module';
import { CustomersAdminModule } from './customers-admin/customers-admin.module';
import { OrdersAdminModule } from './orders-admin/orders-admin.module';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
import { ProductsAdminComponent } from './products-admin/products-admin.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersAdminModule,
    OrdersAdminModule,
    DashboardAdminModule,
    ProductsAdminModule,

  ],
  exports: [
    ProductsAdminModule,
    ProductsAdminComponent
  ]
})
export class ComponentsModule { }
