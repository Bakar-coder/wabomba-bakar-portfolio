import React, { FC, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADED } from "../store/types";
import Header from "./header";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  const loading = useSelector(({ base }: any) => base.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) dispatch({ type: SET_LOADED });
    const mode = localStorage.getItem("color_theme");
    if (mode === "dark") document.body.classList.remove("light");
    return () => {
      if (mode === "dark") document.body.classList.remove("light");
    };
  }, [loading, dispatch]);

  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
