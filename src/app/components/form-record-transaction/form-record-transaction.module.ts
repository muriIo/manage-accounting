import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRecordTransactionComponent } from './form-record-transaction.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormRecordTransactionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormRecordTransactionComponent
  ]
})
export class FormRecordTransactionModule { }
