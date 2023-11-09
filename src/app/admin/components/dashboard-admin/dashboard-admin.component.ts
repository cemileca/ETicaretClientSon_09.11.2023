import { Component, OnInit } from '@angular/core';
import { MyColors, MyNgxSpinnerService, MySpinnerSize, MySpinnerType } from 'src/app/services/common/my-ngx-spinner.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent {
  constructor(private DashboardSpinner: MyNgxSpinnerService) {
    DashboardSpinner.ShowSpinner(MySpinnerType.BallCircuc,{
      Color:MyColors.Black,
      Size:MySpinnerSize.Default,
      BdColor:MyColors.White
    });
  }
} 



