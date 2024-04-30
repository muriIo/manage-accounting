import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionComponent } from './list-transaction.component';

@NgModule({
  declarations: [
    ListTransactionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListTransactionComponent
  ]
})
export class ListTransactionModule { }
