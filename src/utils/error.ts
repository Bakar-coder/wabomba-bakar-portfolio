import { toastr } from "react-redux-toastr";
import { SET_ERRORS } from "../store/types";

export const errorMap = (errors: any[]) => {
  const error: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    error[field as string] = message;
  });

  return error;
};

export const catchException = (ex: any, dispatch: any) => {
  const newError =
    ex.response && ex.response.data["errors"]
      ? errorMap(ex.response.data["errors"])
      : null;
  const errorMsg =
    (ex.response &&
      ex.response.data["errors"] &&
      ex.response.data["errors"][0]["message"]) ||
    ex.message;
  if (dispatch && newError) dispatch({ type: SET_ERRORS, payload: newError });
  (ex && ex.response && ex.response.data && ex.response.status >= 400) ||
  (ex && ex.response && ex.response.data && ex.response.status <= 500)
    ? toastr.error(
        newError ? Object.keys(newError)[0].toUpperCase() : "ERROR!",
        errorMsg
      )
    : toastr.error(ex["title"] || "FATAL ERROR!", ex["message"]);
};
