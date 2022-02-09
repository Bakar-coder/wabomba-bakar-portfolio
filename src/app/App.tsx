import React, { FC, Fragment } from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import HeaderTags from "./helmet";
import "../styles/App.css";

interface AppProps {
  route: RouteConfig;
}

const App: FC<AppProps> = ({ route }) => {
  return (
    <Fragment>
      <HeaderTags />
      {renderRoutes(route.routes)}
    </Fragment>
  );
};

export default { component: App };
