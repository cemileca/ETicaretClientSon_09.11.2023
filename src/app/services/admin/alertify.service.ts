import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() { }

  // MyAlertifyMessage(message: string, messageType: MyMessageTypeAlertify, position: MyMessagePositionAlertify, delay: number = 3, dismissOther: boolean = false) {
  //   alertify.set('notifier', 'position', position);
  //   alertify.set('notifier', 'delay', delay);
  //   const msj = alertify[messageType](message);
  //   if (dismissOther)
  //     msj.dismissOthers();
  // }

  MyAlertifyMessage(message: string, options: Partial<MyAlertifyOptions>) {
    alertify.set('notifier', 'position', options.position);
    alertify.set('notifier', 'delay', options.delay);
    const msj = alertify[options.messageType](message);
    if (options.dismissOther)
      msj.dismissOthers();
  }
  MyAlertifyDismiss() {
    alertify.dismisAll();
  }
}
export class MyAlertifyOptions {
  messageType: MyMessageTypeAlertify = MyMessageTypeAlertify.Message;
  position: MyMessagePositionAlertify = MyMessagePositionAlertify.BottomLeft;
  delay: number = 3;
  dismissOther: boolean = false;

}
export enum MyMessageTypeAlertify {
  Error = 'error',
  Success = 'success',
  Message = 'message',
  Notify = 'notify',
  Warning = 'warning',
}

export enum MyMessagePositionAlertify {
  TopCenter = "top-center",
  TopLeft = "top-left",
  TopRight = "top-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right"
}