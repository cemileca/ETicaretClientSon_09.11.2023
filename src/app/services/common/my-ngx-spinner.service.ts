import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class MyNgxSpinnerService {
  constructor(private MySpinner: NgxSpinnerService) { }
  ShowSpinner(name: MySpinnerType, option?: Partial<MySpinnerOptions>) {
    this.MySpinner.show(name, {
      color: option.Color,
      size: option.Size,
      bdColor: option.BdColor,
      fullScreen: option.FullScreen,
      showSpinner: true,
    });
    setTimeout(() => this.MySpinner.hide(name), option.Delay);
  }
  HideSpinner(name?: MySpinnerType) {
    this.MySpinner.hide(name);
  }
}

export class MySpinnerOptions {
  Color?: MyColors = MyColors.Red;
  Size?: MySpinnerSize = MySpinnerSize.Default;
  BdColor?: MyColors = MyColors.Black;
  FullScreen?: boolean = false;
  Delay: number = 5000;
  Template?: string;
}

export enum MySpinnerSize {
  Small = 'small',
  Default = 'default',
  Medium = 'medium',
  Large = 'large',
}
export enum MySpinnerType {
  BallCircuc = 's1',
  BallBeat = 's2',
  BallAtom = 's3',
  HariciBirSpinner = ` "<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif"' />"`
}
export enum MyColors {
  Red = 'red',
  Yellow = 'yellow',
  Black = 'black',
  White = 'white',
}
