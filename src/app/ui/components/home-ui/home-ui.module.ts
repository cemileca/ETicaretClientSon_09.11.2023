import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent } from './home-ui.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:HomeUiComponent}
    ])
  ]
})
export class HomeUiModule { }
