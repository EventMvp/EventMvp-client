import { config } from "@/constants/url";
import { Voucher } from "@/types/voucher";
import { getData } from "@/utils/getData";

class VoucherAPI {
  private baseEndpoint: string;

  constructor() {
    this.baseEndpoint = config.endpoints.voucher;
  }

  async getVoucherByEventId(eventId: string): Promise<Voucher[]> {
    const params = { eventId };
    const vouchers = (await getData(this.baseEndpoint, params)) as Voucher[];

    return vouchers;
  }
}

export const voucherAPI = new VoucherAPI();
