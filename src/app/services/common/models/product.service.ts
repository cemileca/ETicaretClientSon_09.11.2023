import { Injectable } from '@angular/core';
import { MyhttpClientService } from '../myhttp-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { List_Products } from 'src/app/contracts/List_products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private bizimhttpclient: MyhttpClientService) { }

  /**********************************************************************METODLAR*/

  creatProduct(product: Create_Product, successCallBack?: any, errorCallBack?: any) {

    this.bizimhttpclient.post({
      controller: "products"
    }, product).subscribe(() => {

      successCallBack();
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _error.forEach((errorMessage, index) => {
        errorMessage.value.forEach((value, _index) => {
          message += `${value}<br>`
        });
      });
      errorCallBack(message);
    });

  }
  /**********************************************************************/

  async listProducts(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number, products: List_Products[] }> {
    const promiseData: Promise<{ totalCount: number, products: List_Products[] }> = lastValueFrom/*toPromise() yerine kullandık. kendisi mevta*/(this.bizimhttpclient.get<{ totalCount: number, products: List_Products[] }>({
      controller: "products",
      queryString: `page=${page}&size=${size}`
    }));

    promiseData.then(d => successCallBack()/*eğer verileri çekerse başarılı oldu demektir. o zaman başarı mesajını yayınla*/)
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message)/*eğer hata dönerse o hata mesajını ekrana yansıt*/);
    return await promiseData;
  }
  /**********************************************************************/
  async DeleteProducts(id: string) {

    await firstValueFrom(this.bizimhttpclient.delete({
      controller: "products"
    }, id));
  }
  /**********************************************************************METODLAR*/

}
