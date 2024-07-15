export interface EventTicket {
  listEventTicket: EventTicketItem[];
}

export interface EventTicketItem {
  id: number;
  ticketType: string;
  availableSeats: number;
  price: number;
}
