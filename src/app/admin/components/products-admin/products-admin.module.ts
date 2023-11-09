import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarAdminProductsComponent } from './sidebar-admin-products/sidebar-admin-products.component';
import { FormFieldAdminProductsComponent } from './form-field-admin-products/form-field-admin-products.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableAdminProductsComponent } from './table-admin-products/table-admin-products.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogsModule } from 'src/app/dialogs/dialogs.module';




@NgModule({
  declarations: [
    ProductsAdminComponent,
    SidebarAdminProductsComponent,
    FormFieldAdminProductsComponent,
    TableAdminProductsComponent,
    DeleteDirective,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    FileUploadModule,
    DialogsModule,
    RouterModule.forChild([
      { path: "", component: ProductsAdminComponent }])

  ],
  exports: [
    ProductsAdminComponent,
    MatSidenavModule,
    SidebarAdminProductsComponent,
    MatFormFieldModule,
    MatPaginatorModule,
    TableAdminProductsComponent,

  ]
})
export class ProductsAdminModule { }
