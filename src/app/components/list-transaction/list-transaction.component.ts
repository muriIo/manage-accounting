import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';
import { SupabaseIntegration } from 'src/app/integrations/supabase.integration';
import { RealtimeChannel } from '@supabase/supabase-js';
import { TransactionPipe } from 'src/app/helpers/transaction.pipe';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.sass']
})
export class ListTransactionComponent {

  constructor(private readonly supabaseIntegration: SupabaseIntegration)
  {
    this.supabaseIntegration.init();
    this.getTransactions();
    this.subscription = this.supabaseIntegration.getClient()!.channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'transaction' },
      () => {
        this.getTransactions();
      }
    )
    .subscribe();
  }
  
  public transactions: Transaction[] = [];

  private subscription: RealtimeChannel;

  public trackById(index: number, item: Transaction): number {
    return item.id;
  }

  private async getTransactions() {
    let { data: transaction, error } = await this.supabaseIntegration
    .getClient()!
    .from('transaction')
    .select('*');

    this.transactions = transaction!;
  }
}
