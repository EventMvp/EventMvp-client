import { config } from "@/constants/url";
import { TransactionData, TransactionFreeData } from "@/types/transactionData";
import axiosInstance from "@/utils/axiosInstance";

class TransactionAPI {
  private baseEndpoint: string;

  constructor() {
    this.baseEndpoint = config.endpoints.transaction;
  }

  async createTransactions(body: TransactionData | null) {
    try {
      const response = await axiosInstance.post(this.baseEndpoint, body);
      return response.data;
    } catch (error) {
      console.error("Error creating transaction", error);
      throw error;
    }
  }
  async createFreeTransactions(body: TransactionFreeData | null) {
    try {
      const response = await axiosInstance.post(
        this.baseEndpoint + "/free",
        body
      );
      return response.data;
    } catch (error) {
      console.error("Error creating transaction", error);
      throw error;
    }
  }
}

const transactionAPI = new TransactionAPI();

export default transactionAPI;
