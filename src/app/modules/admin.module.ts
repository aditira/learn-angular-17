import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AdminRoutingModule } from './admin-router.module';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [

  ]
})
export class AdminModule { }
