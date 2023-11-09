import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsUiModule } from './products-ui/products-ui.module';
import { HomeUiModule } from './home-ui/home-ui.module';
import { BasketsUiModule } from './baskets-ui/baskets-ui.module';
import { NavbarUiComponent } from './navbar-ui/navbar-ui.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarUiComponent],
  imports: [
    CommonModule,
    ProductsUiModule,
    HomeUiModule,
    BasketsUiModule,
    RouterModule,
  ],
  exports: [NavbarUiComponent],
})
export class ComponentsModule {}
