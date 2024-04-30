export interface Transaction {
  id: number;
  type: 'incoming' | 'expense';
  amount: number;
  description: string;
}