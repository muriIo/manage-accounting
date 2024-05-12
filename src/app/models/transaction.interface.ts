export interface Transaction {
  id: number;
  type: 'incoming' | 'expense';
  quantity: number;
  description: string;
  created_at: Date;
}