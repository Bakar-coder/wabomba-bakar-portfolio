import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "/api"
});
// @ts-ignore
const initialState = window[`INITIAL_STATE`];
// @ts-ignore
const composer = window[`__REDUX_DEVTOOLS_EXTENSION_COMPOSE__`] || compose;

export default () =>
  createStore(
    reducers,
    initialState,
    composer(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  );
