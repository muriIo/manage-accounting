import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.sass']
})
export class ListTransactionComponent {
  public transactions: Transaction[] = [
    {
      amount: 100,
      description: 'Venda de iphone',
      id: 1,
      type: 'incoming',
      created_at: new Date()
    }
  ];

  public trackById(index: number, item: Transaction): number {
    return item.id;
  }
}
