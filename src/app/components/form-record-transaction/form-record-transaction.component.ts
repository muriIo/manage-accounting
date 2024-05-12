import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SupabaseIntegration } from 'src/app/integrations/supabase.integration';

@Component({
  selector: 'app-form-record-transaction',
  templateUrl: './form-record-transaction.component.html',
  styleUrls: ['./form-record-transaction.component.sass']
})
export class FormRecordTransactionComponent implements OnInit {

  constructor(private readonly supabaseIntegration: SupabaseIntegration, formBuilder: FormBuilder)
  {
    this.formGroup = formBuilder.group({
      'type': [null],
      'quantity': [0],
      'description': ['']
    });
  }

  public formGroup: FormGroup;

  public items: Record<string, string> = {
    'incoming': 'Entrada',
    'expense': 'Despesa'
  };

  public keys: string[] = [];

  public ngOnInit() {
    this.keys = Object.keys(this.items);
    this.supabaseIntegration.init();
  }

  public async create()
  {
    const payload = this.formGroup.getRawValue();
    const { data, error } = await this.supabaseIntegration
      .getClient()!
      .from("transaction")
      .insert([
        { type: payload.type, description: payload.description, quantity: payload.quantity }
      ])
      .select();
  }
}
