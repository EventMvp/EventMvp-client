export interface EventTicket {
  listEventTicket: EventTicketItem[];
}

export interface EventTicketItem {
  ticketType: string;
  availableSeats: number;
  price: number;
}
