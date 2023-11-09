import { Component, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-customers-admin',
  templateUrl: './customers-admin.component.html',
  styleUrls: ['./customers-admin.component.scss']
})
export class CustomersAdminComponent {
  constructor(private dialog: MatDialog) { }
  sorulacakSoru: string = 'sdhskjdhjkhsjksdhfjksdhfsjkdhfsjdhf';

  deneme() {
    this.openDialog(() => {
      alert("Her şey yolunda");
    });


  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result == DeleteState.Yes)
        afterClosed();
    });
  }
}

