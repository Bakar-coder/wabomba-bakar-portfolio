import React, { Fragment } from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes, RouteConfig } from "react-router-config";
import createStore from "./store/store";
import Routes from "./Routes";
import Toastr from "./app/Toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "./styles/Home.css";

hydrate(
  <Provider store={createStore()}>
    <BrowserRouter>
      <Fragment>{renderRoutes(Routes as RouteConfig[])}</Fragment>
      <Toastr />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
