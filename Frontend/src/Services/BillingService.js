import axios from "axios";

const BILLING_API_BASE_URL = "http://localhost:8080/api/v1/bill";

class BillingService {
  getBillings() {
    return axios.get(BILLING_API_BASE_URL);
  }

  createBilling(billing) {
    return axios.post(BILLING_API_BASE_URL, billing);
  }

  getBillingById(billingId) {
    return axios.get(BILLING_API_BASE_URL + "/" + billingId);
  }

  updateBilling(billing, billingId) {
    return axios.put(BILLING_API_BASE_URL + "/" + billingId, billing);
  }

  deleteBilling(billingId) {
    return axios.delete(BILLING_API_BASE_URL + "/" + billingId);
  }
}

export default new BillingService();
