import { Component, OnInit, ViewChild } from '@angular/core';
import { List_Products } from 'src/app/contracts/List_products';
import {
  AlertifyService,
  MyMessagePositionAlertify,
  MyMessageTypeAlertify,
} from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';
import {
  MyColors,
  MyNgxSpinnerService,
  MySpinnerSize,
  MySpinnerType,
} from 'src/app/services/common/my-ngx-spinner.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
declare var $: any

@Component({
  selector: 'app-table-admin-products',
  templateUrl: './table-admin-products.component.html',
  styleUrls: ['./table-admin-products.component.scss'],
})
export class TableAdminProductsComponent implements OnInit {

  /**********************************************************************TANIMLAMALAR*/
  dataSource: MatTableDataSource<List_Products> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'name',
    'stock',
    'price',
    'createdDate',
    'updatedDate',
    'edit',
    'delete'
  ];
  /********************************************************************CONSTRUCTOR*/
  constructor(
    private spinner: MyNgxSpinnerService,
    private productService: ProductService,
    private alertifyy: AlertifyService
  ) { }
  /**********************************************************************METODLAR*/

  async getProducts() {
    /*********/
    this.spinner.ShowSpinner(MySpinnerType.BallBeat, {
      Size: MySpinnerSize.Default,
      Delay: 3000,
      Color: MyColors.Black

    });
    /*********/
    const allProducts: { totalCount: number, products: List_Products[] } = await this.productService.listProducts(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5,
      () => this.spinner.HideSpinner(MySpinnerType.BallCircuc),
      (errormessage) => {
        this.alertifyy.MyAlertifyMessage(errormessage, {
          dismissOther: true,
          messageType: MyMessageTypeAlertify.Error,
          position: MyMessagePositionAlertify.TopRight,
        });

      }
    );
    /*********/
    this.dataSource = new MatTableDataSource<List_Products>(allProducts.products);
    /*********/

    this.paginator.length = allProducts.totalCount;
    /*********/

  }

  /*********/
  // delete(id, event) {
  //   const img: HTMLImageElement = event.srcElement
  //   $(img.parentElement.parentElement).fadeOut(2000);
  // }  
  /*********/

  async pageChanged() {
    await this.getProducts();
  }
  /***********************************************************************ngOnInit*/

  async ngOnInit() {


    /*********/
    await this.getProducts();
    /*********/

  }

  /***********************************************************************FİNİSH*/

}
