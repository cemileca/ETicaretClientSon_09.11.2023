import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardAdminComponent } from './admin/components/dashboard-admin/dashboard-admin.component';
import { HomeUiComponent } from './ui/components/home-ui/home-ui.component';

const routes: Routes = [
  {
    path: "admin",component:LayoutComponent,  children: [
      {path:"",component:DashboardAdminComponent},
      { path: "customers", loadChildren: () => import("./admin/components/customers-admin/customers-admin.module").then(module => module.CustomersAdminModule) },
      { path: "orders", loadChildren: () => import("./admin/components/orders-admin/orders-admin.module").then(modul => modul.OrdersAdminModule) },
      { path: "products", loadChildren: () => import("./admin/components/products-admin/products-admin.module").then(module => module.ProductsAdminModule) }
    ]
  },
  { path: "", component: HomeUiComponent },
  { path: "basket", loadChildren: () => import("./ui/components/baskets-ui/baskets-ui.module").then(modul => modul.BasketsUiModule) },
  { path: "products", loadChildren: () => import("./ui/components/products-ui/products-ui.module").then(module => module.ProductsUiModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
