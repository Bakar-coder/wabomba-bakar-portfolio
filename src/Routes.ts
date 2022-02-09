import Home from "./Pages/Home";
import App from "./app/App";
import PageNotFound from "./Pages/404";
import about from "./Pages/about";
import portfolio from "./Pages/portfolio";
import contact from "./Pages/contact";
import blog from "./Pages/blog";

export default [
  {
    ...App,
    routes: [
      { ...Home, path: "/", exact: true },
      { ...about, path: "/about", exact: true },
      { ...portfolio, path: "/portfolio", exact: true },
      { ...contact, path: "/contact", exact: true },
      { ...blog, path: "/blog", exact: true },
      { ...PageNotFound },
    ],
  },
];
