import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
    {
      path: 'dahsboard', 
      component: DashboardComponent
    },
    {
      path: 'setting',
      component: SettingComponent
    },
    {
      path: 'transaction',
      component: TransactionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
