import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MyMessageTypeAlertify } from '../admin/alertify.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerToastrService {
  constructor(private myToastr: ToastrService) {}
  MyTostrMessage(
    messageTile: string,
    messageContent: string,
    options: Partial<MyToastrOptions>
  ) {
    this.myToastr[options.messageType](messageTile, messageContent, {
      positionClass: options.position,
      timeOut: options.delay,
      closeButton: true,
    });
  }
}
export class MyToastrOptions {
  messageType: MyToastrMessageType = MyToastrMessageType.Success;
  position: MyToastrPosition = MyToastrPosition.BottomLeft;
  delay: number = 3000;
}
export enum MyToastrMessageType {
  Error = 'error',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
}
export enum MyToastrPosition {
  TopFullWidth = 'toast-top-full-width',
  TopCenter = 'toast-top-center',
  TopLeft = 'toast-top-left',
  TopRight = 'toast-top-right',
  BottomFullWidth = 'toast-bottom-full-width',
  BottomCenter = 'toast-bottom-center',
  BottomLeft = 'toast-bottom-left',
  BottomRight = 'toast-bottom-right',
}
