import { Component, ViewChild } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { TableAdminProductsComponent } from '../table-admin-products/table-admin-products.component';

@Component({
  selector: 'app-sidebar-admin-products',
  templateUrl: './sidebar-admin-products.component.html',
  styleUrls: ['./sidebar-admin-products.component.scss']
})
export class SidebarAdminProductsComponent {

  @ViewChild(TableAdminProductsComponent) listComponent: TableAdminProductsComponent;

  createdProduct(createdProducts: Create_Product) {
    this.listComponent.getProducts();
  }
}
