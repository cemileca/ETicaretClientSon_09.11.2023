import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogParameters, DialogService } from 'src/app/services/common/dialog.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  public sorulacakSoru: string = "deneme";
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState, private dialogServiscim: DialogService
  ) { this.sorulacakSoru = dialogServiscim.yazi }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export enum DeleteState {
  Yes,
  No
}

