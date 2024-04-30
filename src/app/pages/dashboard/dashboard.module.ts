import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormRecordTransactionModule } from '../../components/form-record-transaction/form-record-transaction.module';
import { ListTransactionModule } from '../../components/list-transaction/list-transaction.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormRecordTransactionModule,
    ListTransactionModule
  ]
})
export class DashboardModule { }
