// Payment interface
export interface Payment {
  id: number;
  ticket_id: number;
  amount: number;
  payment_method: string;
  payment_status: string;
  created_at: Date;
}
