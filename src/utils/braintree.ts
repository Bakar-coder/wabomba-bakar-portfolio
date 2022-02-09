import axios from "axios";
import { API_URL } from "../_constant";

export const getBraintreeToken = async (state: any, setState: any) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/braintree-token`);
    return data.error
      ? setState({ ...state, error: data.error })
      : setState({
          ...state,
          clientToken: data.clientToken
        });
  } catch (error) {
    return console.error(error);
  }
};

export const processBraintreePayment = async (
  state: any,
  setState: any,
  amount: number
) => {
  try {
    const { instance } = state;
    const paymentMethod = await instance.requestPaymentMethod();
    const paymentMethodNonce = paymentMethod.data.nonce;
    const payload = {
      amount,
      paymentMethodNonce
    };
    const { data } = await axios.post(
      `${API_URL}/api/braintree-process-payment`,
      payload
    );
    return data.error
      ? setState({ ...state, error: data.error })
      : setState({
          ...state,
          transaction: data.transaction,
          success: true
        });
  } catch (error) {
    return console.error(error);
  }
};
