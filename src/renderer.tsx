import React, { Fragment } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Request } from "express";
import { Provider } from "react-redux";
import { renderRoutes, RouteConfig } from "react-router-config";
import createServerStore from "./store/serverStore";
import Routes from "./Routes";
import { Helmet } from "react-helmet";
import { __prod__ } from "./_constant";
import Toastr from "./app/Toastr";

const serverStore = createServerStore();
let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const cssLinksFromAssets = (assets: any, entry: any) => {
  return assets[entry]
    ? assets[entry].css
      ? assets[entry].css
          .map((asset: any) => `<link rel="stylesheet" href="${asset}">`)
          .join("")
      : ""
    : "";
};

const jsScriptTagsFromAssets = (assets: any, entry: any, extra = "") => {
  return assets[entry]
    ? assets[entry].js
      ? assets[entry].js
          .map((asset: any) => `<script src="${asset}" ${extra}></script>`)
          .join("")
      : ""
    : "";
};

const renderer = (req: Request, store: typeof serverStore) => {
  const context: any = {};
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <Fragment>{renderRoutes(Routes as RouteConfig[])}</Fragment>
        <Toastr />
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  if (context.url) {
    return { redirect: context.url };
  } else {
    const html =
      // prettier-ignore
      `<!doctype html>
        <html lang="en" ${helmet.htmlAttributes.toString()}>
        <head>
            <meta charset="utf-8">
            <title>Tunis - Personal Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <!-- Template Google Fonts -->
            <link href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,600i,700" rel="stylesheet">

            <!-- Template CSS Files -->
            <link href="/css/bootstrap.min.css" rel="stylesheet">
            <link href="/css/preloader.min.css" rel="stylesheet">
            <link href="/css/circle.css" rel="stylesheet">
            <link href="/css/font-awesome.min.css" rel="stylesheet">
            <link href="/css/fm.revealator.jquery.min.css" rel="stylesheet">
            <link href="/css/style.css" rel="stylesheet">

            <!-- CSS Skin File -->
            <link href="/css/skins/goldenrod.css" rel="stylesheet">
            <script src="/js/modernizr.custom.js"></script>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${helmet.script.toString()}
            ${cssLinksFromAssets(assets, 'client')}
        </head>
        <body class='${req.url === '/'? "home light": req.url === "/about" ? "about light": req.url === "/portfolio" ? "portfolio light": req.url === "/contact" ? "contact light": req.url === "/blog" ? "blog light": "home light"}' ${helmet.bodyAttributes.toString()}>
            <div id="root">${markup}</div>
            ${__prod__ 
              ? jsScriptTagsFromAssets(assets, 'client', ' defer')
              : jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
            <script type="text/javascript" src="/js/jquery-3.5.0.min.js" defer></script>
            <script type="text/javascript" src="/js/styleswitcher.js" defer ></script>
            <script type="text/javascript" src="/js/preloader.min.js" defer ></script>
            <script type="text/javascript" src="/js/fm.revealator.jquery.min.js" defer ></script>
            <script type="text/javascript" src="/js/imagesloaded.pkgd.min.js" defer ></script>
            <script type="text/javascript" src="/js/masonry.pkgd.min.js" defer ></script>
            <script type="text/javascript" src="/js/classie.js" defer ></script>
            <script type="text/javascript" src="/js/cbpGridGallery.js" defer ></script>
            <script type="text/javascript" src="/js/jquery.hoverdir.js" defer ></script>
            <script type="text/javascript" src="/js/popper.min.js" defer ></script>
            <script type="text/javascript" src="/js/bootstrap.js" defer ></script>
            <script type="text/javascript" src="/js/custom.js" defer ></script>
        </body>
      </html>`;
    return { html };
  }
};

export const renderApp = (req: Request, store: typeof serverStore) =>
  renderer(req, store);
