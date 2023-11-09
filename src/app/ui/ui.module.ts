import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DigerModule } from './diger/diger.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    DigerModule
  ],
  exports:[
    ComponentsModule,
    DigerModule
  ],

})
export class UiModule { }
