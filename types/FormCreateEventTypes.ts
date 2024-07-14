import * as Yup from "yup";

export interface EventTicketDto {
  ticketType: string;
  price: number;
  availableSeats: number;
}

export interface VoucherDto {
  name: string;
  discountPercentage: number;
  expiryDate: string;
}

export interface CreateEventReqDto {
  title: string;
  description: string;
  date: string | null;
  time: string;
  location: string;
  categoryId: number;
  ticketTypes: EventTicketDto[];
  vouchers: VoucherDto[];
  picture: string;
}

export const initialValueCreateEvent = {
  title: "",
  description: "",
  date: null,
  time: "",
  location: "",
  categoryId: 0,
  ticketTypes: [],
  vouchers: [],
  picture: "",
};

export const validationSchemaCreateEvent = {
  title: Yup.string().required("Event title is required"),
  description: Yup.string().required("Event description is required"),
  date: Yup.string().nullable().required("Event date is required"),
  time: Yup.string().required("Event time is required"),
  location: Yup.string().required("Event location is required"),
  categoryId: Yup.number().required("Category is required"),
  ticketTypes: Yup.array().of(
    Yup.object({
      ticketType: Yup.string().required("Ticket type is required"),
      price: Yup.number()
        .min(0, "Price must be positive")
        .required("Price is required"),
      availableSeats: Yup.number()
        .integer()
        .min(1, "Quantity must be at least 1")
        .required("Quantity is required"),
    })
  ),
  vouchers: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Voucher code is required"),
      discountPercentage: Yup.number()
        .min(0)
        .max(100)
        .required("Discount percentage is required"),
      expiryDate: Yup.date().required("Voucher expiry date is required"),
    })
  ),
};
