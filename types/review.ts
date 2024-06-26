// Review interface
export interface Review {
  id: number;
  event_id: number;
  user_id: number;
  rating: number;
  review?: string;
  created_at: Date;
}
