import { Component } from '@angular/core';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
})
export class ProductsAdminComponent {



}

// ngOnInit(): void {


//   this.httpClient.get<Product[]>({
//     controller: "products"
//   }).subscribe(data => console.log(data));


// this.httpClient.get({
//   controller: "products"
// }).subscribe(data => console.log(data));

// this.httpClient.post({
//   controller: "products"
// }, {
//   name: "kalem",
//   stock: 25,
//   price: 150
// }).subscribe();

// this.httpClient.Put({
//   controller: "products"
// }, {
//   id: "b0399cab-9e43-4294-bfc7-97f1bf5c313d",
//   name: "nanay",
//   stock: 55,
//   price: 152

// }).subscribe();

// this.httpClient.delete({
//   controller: "products"
// }, "b0399cab-9e43-4294-bfc7-97f1bf5c313d").subscribe();

// this.httpClient.get({
//   baseUrl: "https://jsonplaceholder.typicode.com",
//   controller: "posts"
// }).subscribe(data => console.log(data));

// this.httpClient.get({
//   FullEndPoin: "https://jsonplaceholder.typicode.com/posts"
// }).subscribe(data => console.log(data));



