import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DigerComponent } from './diger.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [DigerComponent],
  imports: [CommonModule, NgxSpinnerModule, BrowserAnimationsModule],
  exports: [DigerComponent],
})
export class DigerModule {}
