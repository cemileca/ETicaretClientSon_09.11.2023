import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MyAlertifyOptions, MyMessagePositionAlertify, MyMessageTypeAlertify } from 'src/app/services/admin/alertify.service';
import { DialogService } from 'src/app/services/common/dialog.service';
import { MyhttpClientService } from 'src/app/services/common/myhttp-client.service';
declare var $: any;

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  /**********************************************************************TANIMLAMALAR*/
  @Input() id: string; // id ye DOM elementinden değer ata
  @Input() controller: string //bu delete directive başka yerlerde kullanınca controllerin içini doldurmayı unutma.
  @Output() MetoduYakalamakIcinTakilanIsim: EventEmitter<any> = new EventEmitter(); //artık bu metodu başka yerlerde de kullana bilirsin
  /**********************************************************************TANIMLAMALAR*/

  /**********************************************************************CONSTRUCTOR*/
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClient: MyhttpClientService,
    public dialog: MatDialog,
    public dialogService: DialogService,
    private alertifyyService: AlertifyService
  ) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/9004793_trash_delete_bin_remove_icon.png");
    img.setAttribute("style", "cursor:pointer;");
    _renderer.appendChild(element.nativeElement, img);

  }
  /**********************************************************************CONSTRUCTOR*/

  /**********************************************************************METODLAR*/
  @HostListener("click") //Anlamı: Ne zaman directivin kullanıldığı DOM nesnesine tıklanıldığı zaman aşağıdakı void devreye girecektir, yani tetiklenecektir.
  async onClick() {

    this.dialogService.openDialog({ componetType: DeleteDialogComponent, data: DeleteState.Yes, SorulacakSorum: "Silmek istediğinize Emin misiniz?", afterClosed: async () => { this.alertifyyService.MyAlertifyMessage("Silme işlemi başarı ile Tamamlandı..!!!", { dismissOther: true, messageType: MyMessageTypeAlertify.Success, position: MyMessagePositionAlertify.BottomCenter }) } });

    // this.openDialog(async () => {

    //   const td: HTMLTableCellElement = this.element.nativeElement;
    //   // await this.productService.DeleteProducts(this.id);

    //   await this.httpClient.delete({
    //     controller: this.controller
    //   }, this.id).subscribe(
    //     /*********/
    //     (data) => {
    //       $(td.parentElement).animate({
    //         opacity: 0,
    //         left: "+=50",
    //         height: "toogle"
    //       },
    //         700, () => {
    //           this.MetoduYakalamakIcinTakilanIsim.emit();
    //           this.alertifyyService.MyAlertifyMessage("Ürün Başarı ile silinmiştir", {
    //             dismissOther: true,
    //             messageType: MyMessageTypeAlertify.Success,
    //             position: MyMessagePositionAlertify.TopCenter,
    //             delay: 2
    //           });
    //         });
    //     },
    //     /*********/
    //     (errormessage: HttpErrorResponse) => {
    //       this.alertifyyService.MyAlertifyMessage("Ürün Silerken beklenmedik hatalarla karşılaşıldı.<br>" + errormessage.message, {
    //         dismissOther: true,
    //         messageType: MyMessageTypeAlertify.Error,
    //         position: MyMessagePositionAlertify.TopCenter,
    //         delay: 5
    //       });
    //     });
    //   /*********/
    // });

  }
  /***********************************************************************/
  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result == DeleteState.Yes)
        afterClosed();
    });
  }
  /**********************************************************************METODLAR*/

}
