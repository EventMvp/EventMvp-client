import { getEventTicketByEventId } from "@/api/events/getEventTicketByEventId";
import { voucherAPI } from "@/api/voucher/voucherAPI";
import { GET_EVENT_TICKET, GET_VOUCHER } from "@/constants/queryKey";
import { useQuery } from "@tanstack/react-query";

const useTransaction = (eventId: string) => {
  const {
    data: eventTicket,
    isLoading: isLoadingEventTicket,
    error: errorEventTicket,
  } = useQuery({
    queryKey: [GET_EVENT_TICKET],
    queryFn: async () => await getEventTicketByEventId(eventId),
  });

  const {
    data: voucher,
    isLoading: isLoadingVoucher,
    error: errorVoucher,
  } = useQuery({
    queryKey: [GET_VOUCHER],
    queryFn: async () => await voucherAPI.getVoucherByEventId(eventId),
  });

  return {
    eventTicket,
    voucher,
    isLoading: isLoadingEventTicket || isLoadingVoucher,
    error: errorEventTicket || errorVoucher,
  };
};

export default useTransaction;
