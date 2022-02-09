import { toastr } from "react-redux-toastr";
export const setAlert = (data: any) =>
  toastr.success(data["title"] || "SUCCESS!", data["message"]);
