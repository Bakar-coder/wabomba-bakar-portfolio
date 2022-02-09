import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "./reducers";
import { API_URL } from "../_constant";

export default () => {
  const initialState = {};
  const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
  });

  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
};
