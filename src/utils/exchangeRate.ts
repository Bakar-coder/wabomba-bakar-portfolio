import axios from "axios";
import { CURRENCY_EXCHANGE_API } from "../_constant";

export const getExchangeRate = async (
  baseCurrency: string,
  newCurrency: string,
  amount: number
) => {
  if (baseCurrency === newCurrency) return amount;
  const { data } = await axios.get(
    `${CURRENCY_EXCHANGE_API}=${newCurrency}&base=${baseCurrency}`
  );
  const multiplier = Object.values(data.rates)[0] as number;
  return multiplier * amount;
};
