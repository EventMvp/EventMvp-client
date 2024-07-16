import { config } from "@/constants/url";
import { TransactionData } from "@/types/transactionData";
import axiosInstance from "@/utils/axiosInstance";

class TransactionAPI {
  private baseEndpoint: string;

  constructor() {
    this.baseEndpoint = config.endpoints.transaction;
  }

  async createTransactions(body: TransactionData) {
    try {
      const response = await axiosInstance.post(this.baseEndpoint, body);
      return response.data;
    } catch (error) {
      console.error("Error creating transaction", error);
      throw error;
    }
  }
}

const transactionAPI = new TransactionAPI();

export default transactionAPI;
