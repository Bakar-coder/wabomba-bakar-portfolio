import { SET_LOADED, SET_LOADING } from "../types";
const baseState = {
  loading: true,
  languages: ["en", "ch", "sp", "ru"],
  lang: "en",
  currencies: ["usd", "euro", "pound", "gdp"],
  currency: "usd",
  errors: null,
};

export const baseReducer = (state = baseState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADED:
      return { ...state, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
