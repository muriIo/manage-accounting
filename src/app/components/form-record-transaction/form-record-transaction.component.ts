import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-record-transaction',
  templateUrl: './form-record-transaction.component.html',
  styleUrls: ['./form-record-transaction.component.sass']
})
export class FormRecordTransactionComponent implements OnInit {

  public items: Record<string, string> = {
    'incoming': 'Entrada',
    'expense': 'Despesa'
  };

  public keys: string[] = [];

  public ngOnInit() {
    this.keys = Object.keys(this.items);
  }
}
