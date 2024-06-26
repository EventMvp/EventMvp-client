// Ticket interface
export interface Ticket {
  id: number;
  event_id: number;
  user_id: number;
  quantity: number;
  total_price: number;
  purchased_at: Date;
}
