import { Component, Input, Output } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { MyhttpClientService } from '../myhttp-client.service';
import { AlertifyService, MyMessagePositionAlertify, MyMessageTypeAlertify } from '../../admin/alertify.service';
import { CustomerToastrService, MyToastrMessageType, MyToastrPosition } from '../../ui/customer-toastr.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DialogService } from '../dialog.service';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  constructor(
    private httpClient: MyhttpClientService,
    private alertifyy: AlertifyService,
    private toastr: CustomerToastrService,
    private dialogService: DialogService
  ) { }
  /**********************************************************************TANIMLAMALAR*/
  public files: NgxFileDropEntry[];
  @Input() options: Partial<FileUploadOptions>;
  /**********************************************************************TANIMLAMALAR*/
  /**********************************************************************METODLAR*/
  //#region  SelectedFiles() METOD
  public SelectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    /*********/
    /*********/
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });
    }
    /*********/
    this.dialogService.openDialog({
      componetType: DeleteDialogComponent,
      data: DeleteState.Yes,
      SorulacakSorum: "Dosyaları Yüklemek istediğinize Emin misiniz?",
      afterClosed: () => {
        this.httpClient.post({
          controller: this.options.controller,
          action: this.options.action,
          httpHeaders: new HttpHeaders({ "responseType": "blob" })
        }, fileData).subscribe({
          next: () => {
            const message: string = "Dosyalar başarı ile yüklenmiştir..."
            if (this.options.isAdminPage) {
              this.alertifyy.MyAlertifyMessage(message, { dismissOther: true, messageType: MyMessageTypeAlertify.Success, position: MyMessagePositionAlertify.TopCenter });
            }
            else { this.toastr.MyTostrMessage(message, "Başarılı!!!", { messageType: MyToastrMessageType.Success, position: MyToastrPosition.TopCenter, delay: 3 }) }
          },
          error: (errorResponse: HttpErrorResponse) => {
            const message: string = "Dosyalar yüklenirken beklenmedik hatayla karşılaşılmıştır..!!!"

            if (this.options.isAdminPage) {
              this.alertifyy.MyAlertifyMessage(message, { dismissOther: true, messageType: MyMessageTypeAlertify.Error, position: MyMessagePositionAlertify.TopCenter });

            }
            else {
              this.toastr.MyTostrMessage(message, "Başarısız!!!", { messageType: MyToastrMessageType.Error, position: MyToastrPosition.TopCenter, delay: 3 })
            }
          }
        })
      }
    });
    /*********/

  }
  //#endregion


  /**********************************************************************METODLAR*/

}
export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string
  accept?: string;
  isAdminPage?: boolean = false;
}