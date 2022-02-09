import React, { FC } from "react";
import ReduxToastr from "react-redux-toastr";

interface Props {}

const Toastr: FC<Props> = ({}) => (
  <ReduxToastr
    timeOut={5000}
    newestOnTop={false}
    preventDuplicates
    position="bottom-right" // @ts-ignore
    getState={state => state.toastr}
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar
    closeOnToastrClick
  />
);

export default Toastr;
