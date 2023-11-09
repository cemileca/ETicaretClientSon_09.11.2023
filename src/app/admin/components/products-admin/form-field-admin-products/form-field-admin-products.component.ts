import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MyMessagePositionAlertify, MyMessageTypeAlertify } from 'src/app/services/admin/alertify.service';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { ProductService } from 'src/app/services/common/models/product.service';
import { MyNgxSpinnerService, MySpinnerSize, MySpinnerType } from 'src/app/services/common/my-ngx-spinner.service';

@Component({
  selector: 'app-form-field-admin-products',
  templateUrl: './form-field-admin-products.component.html',
  styleUrls: ['./form-field-admin-products.component.scss']
})
export class FormFieldAdminProductsComponent implements OnInit {

  /**********************************************************************TANIMLAMALAR*/

  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();
  @Output() fileUploadOptions: Partial<FileUploadOptions> = {
    action: "upload",
    controller: "products",
    explanation: "Resimleri sürükleyin ve ya seçiniz...",
    isAdminPage: true,
    accept: ".png, .jpg, .jpeg",
  };
  /**********************************************************************TANIMLAMALAR*/

  constructor(private productService: ProductService, private spinner: MyNgxSpinnerService, private alertify: AlertifyService,) { }


  /**********************************************************************METODLAR*/

  create_Product(Name: HTMLInputElement, Stock: HTMLInputElement, Price: HTMLInputElement) {

    /*********/
    this.spinner.ShowSpinner(MySpinnerType.BallBeat, {
      Size: MySpinnerSize.Default,
      FullScreen: true
    });
    /*********/
    const create_product: Create_Product = new Create_Product();
    create_product.name = Name.value;
    create_product.stock = parseInt(Stock.value);
    create_product.price = parseFloat(Price.value);
    /*********/

    this.productService.creatProduct(create_product,
      () => {
        this.spinner.HideSpinner(MySpinnerType.BallBeat);

        this.alertify.MyAlertifyMessage("Ürün Başarı ile eklendi", {
          messageType: MyMessageTypeAlertify.Success,
          dismissOther: true,
          position: MyMessagePositionAlertify.TopLeft
        });
        /*********/
        this.createdProduct.emit(create_product);
        /*********/

      },
      errormessage => {
        this.alertify.MyAlertifyMessage(errormessage, {
          dismissOther: true,
          messageType: MyMessageTypeAlertify.Error,
          position: MyMessagePositionAlertify.TopCenter
        })
      });
    /*********/

    Name.value = ''; // Create Product Buttonu tıklandıkdan sonra Name Textboxu temizlensin.
    Name.focus(); // Create Product Buttonu tıklandıkdan sonra Name Textboxunda hazıra nazır focus() olsun.
    Stock.value = '0';
    Price.value = '0';
    /*********/

  }
  /**********************************************************************METODLAR*/

  /***********************************************************************ngOnInit*/

  async ngOnInit() {


  }
  /***********************************************************************ngOnInit*/

  /***********************************************************************FİNİSH*/


}
