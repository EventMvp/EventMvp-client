// Reports interface
export interface Report {
  id: number;
  event_id: number;
  report_date: Date;
  total_sales: number;
  total_tickets_sold: number;
  created_at: Date;
}
