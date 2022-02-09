import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import authReducer from "./authReducer";
import { baseReducer } from "./baseReducer";
import { shopReducer } from "./shopReducer";

export default combineReducers({
  toastr: toastrReducer,
  auth: authReducer,
  base: baseReducer,
  shop: shopReducer
});
