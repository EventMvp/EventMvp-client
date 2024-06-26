// Voucher interface
export interface Voucher {
  id: number;
  code: string;
  discount_percentage: number;
  event_id: number;
  organizer_id: number;
  max_usage: number;
  expiry_date: Date;
  created_at: Date;
}
