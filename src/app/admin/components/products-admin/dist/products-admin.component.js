"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsAdminComponent = void 0;
var core_1 = require("@angular/core");
var ProductsAdminComponent = /** @class */ (function () {
    function ProductsAdminComponent() {
    }
    ProductsAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-products-admin',
            templateUrl: './products-admin.component.html',
            styleUrls: ['./products-admin.component.scss']
        })
    ], ProductsAdminComponent);
    return ProductsAdminComponent;
}());
exports.ProductsAdminComponent = ProductsAdminComponent;
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
