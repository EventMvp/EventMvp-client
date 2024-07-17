import transactionAPI from "@/api/transaction/transactionAPI";
import { GET_PURCHASED_EVENT } from "@/constants/queryKey";
import { TransactionResponse } from "@/types/events";
import { useQuery } from "@tanstack/react-query";

const usePurchasedEvents = () => {
  const {
    data: purchasedEvent,
    isLoading: isLoadingPurchasedEvent,
    error: errorPurchased,
  } = useQuery({
    queryKey: [GET_PURCHASED_EVENT],
    queryFn: async () =>
      (await transactionAPI.getPurchasedEvents()) as TransactionResponse,
  });

  return {
    purchasedEvent,
    isLoadingPurchasedEvent,
    errorPurchased,
  };
};

export default usePurchasedEvents;
