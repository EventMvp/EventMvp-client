import { getEventTicketByEventId } from "@/api/events/getEventTicketByEventId";
import transactionAPI from "@/api/transaction/transactionAPI";
import { voucherAPI } from "@/api/voucher/voucherAPI";
import {
  GET_EVENT_TICKET,
  GET_PURCHASED_EVENT,
  GET_VOUCHER,
} from "@/constants/queryKey";
import { TransactionResponse } from "@/types/events";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const useTransaction = (eventId?: string) => {
  const {
    data: eventTicket,
    isLoading: isLoadingEventTicket,
    error: errorEventTicket,
  } = useQuery({
    queryKey: [GET_EVENT_TICKET, eventId],
    queryFn: async () => await getEventTicketByEventId(eventId as string),
  });

  const {
    data: voucher,
    isLoading: isLoadingVoucher,
    error: errorVoucher,
  } = useQuery({
    queryKey: [GET_VOUCHER],
    queryFn: async () =>
      await voucherAPI.getVoucherByEventId(eventId as string),
  });

  return {
    eventTicket,
    voucher,
    isLoading: isLoadingEventTicket || isLoadingVoucher,
    error: errorEventTicket || errorVoucher,
  };
};

export default useTransaction;
