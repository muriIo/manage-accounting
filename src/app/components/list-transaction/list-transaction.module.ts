import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionComponent } from './list-transaction.component';
import { TransactionPipe } from 'src/app/helpers/transaction.pipe';

@NgModule({
  declarations: [
    ListTransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionPipe
  ],
  exports: [
    ListTransactionComponent
  ]
})
export class ListTransactionModule { }
