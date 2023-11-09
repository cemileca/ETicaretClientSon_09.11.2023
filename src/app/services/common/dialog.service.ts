import { Injectable, ViewChild } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { ComponentType } from 'ngx-toastr/portal/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public yazi: string
  constructor(
    public dialog: MatDialog,) { }

  openDialog(dialogParameters: Partial<DialogParameters>): void {
    this.yazi = dialogParameters.SorulacakSorum;
    const dialogRef = this.dialog.open(dialogParameters.componetType, {
      width: dialogParameters.options?.width,
      height: dialogParameters.options?.height,
      position: dialogParameters.options?.position,
      data: dialogParameters.data,

    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result == dialogParameters.data)
          dialogParameters.afterClosed();
      },
      // complete: () => { },
      // error: () => { }
    }
    );

  }
}

export class DialogParameters {
  componetType: ComponentType<any>;
  data: any;
  afterClosed: () => void;
  options?: Partial<DialogOption> = new DialogOption();
  SorulacakSorum?: string;

}

export class DialogOption {
  width?: string = "250";
  height?: string;
  position?: DialogPosition;
}