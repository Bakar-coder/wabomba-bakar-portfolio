import express, { Response, Request } from "express";
import { matchRoutes, RouteConfig } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./Routes";
import { renderApp } from "./renderer";
import createStore from "./store/serverStore";
import { __prod__, API_URL, CORS_ORIGIN } from "./_constant";
const pubDir = __prod__ ? "build/public" : "public";

const server = express()
  .disable("x-powered-by")
  .set("trust proxy", 1)
  .use(express.static(pubDir))
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use(
    "/api",
    proxy(`${API_URL}`, {
      proxyReqOptDecorator(opts) {
        if (opts.headers) opts.headers["x-forwarded-host"] = `${CORS_ORIGIN}`;
        return opts;
      },
    })
  )
  .get("/*", async (req: Request, res: Response) => {
    try {
      const store = createStore();
      await Promise.all(
        matchRoutes(Routes as RouteConfig[], req.path)
          .map(({ route }) =>
            route.getInitialProps
              ? route.getInitialProps({ pathname: req.url, ...store })
              : null
          )
          .map((promise) =>
            promise
              ? new Promise((resolve) => promise.then(resolve).catch(resolve))
              : null
          )
      );
      const { html = "", redirect = false } = renderApp(req, store);
      return redirect ? res.redirect(redirect) : res.send(html);
    } catch (e) {
      if (!__prod__) console.error(e);
    }
  });

export default server;
