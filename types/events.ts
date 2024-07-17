import { category } from "./category";

// ticket_type enum
export enum TicketType {
  VIP = "VIP",
  General = "General",
}

// types/event.ts
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: category;
  picture: string;
  organizer: string;
  priceRange: string;
  available_seats: number;
  ticket_type: TicketType;
}

export interface ResponseGetEvent {
  totalPages: number;
  currentPage: number;
  totalElements: number;
  content: Event[];
}

interface TicketPurchased {
  ticketType: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface TransactionResponse {
  upcomingEvents: PurchasedEvents[];
  pastEvent: PurchasedEvents[];
}

export interface PurchasedEvents {
  transactionId: number;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  eventTime: [number, number];
  eventLocation: string;
  eventPicture: string;
  totalAmount: number;
  purchaseDate: string;
  tickets: TicketPurchased[];
}
