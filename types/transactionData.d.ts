import { TransactionItem } from "@/app/event/components/FormBuyTicket";

interface TransactionData {
  userId: number;
  eventId: number;
  voucherId: number | null;
  items: TransactionItem[];
  usePoints: boolean;
}
