import React, { FC } from "react";
import { Helmet } from "react-helmet";

interface HeaderProps {}

const HeaderTags: FC<HeaderProps> = ({}) => {
  return (
    <Helmet>
      <title>
        React Redux Isormophic Boilerlate | created by wabomba bakar
      </title>
      <meta
        name="description"
        content="A react redux server side rendering boilerplate application with static routing implimation for react developers who want to write apps with SEO support."
      />
      <meta
        name="keywords"
        content="React, Redux,  Isormophic, SSR, Boilerplate, React Starter, Server side rendering"
      />
      <meta name="author" content="wabomba bakar" />
      <meta
        name="twitter:card"
        content="A react redux server side rendering boilerplate application with static routing implimation for react developers who want to write apps with SEO support. "
      />
      <meta name="twitter:site" content="@yourtwitterusername" />
      <meta name="twitter:creator" content="@yourtwitterusername" />
      <meta name="twitter:url" content="http://yourdomain.com/" />
      <meta
        name="twitter:title"
        content="React Redux Isormophic Boilerlate | created by wabomba bakar"
      />
      <meta
        name="twitter:description"
        content="A react redux server side rendered starter app with SEO support."
      />
      <meta
        name="twitter:image"
        content="assets/img/twittercardimg/twittercard-280-150.jpg"
      />
      <meta
        property="og:title"
        content="React Redux Isormophic Boilerlate | created by wabomba bakar"
      />
      <meta property="og:url" content="http://your domain here.com" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Your site name here" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="assets/img/opengraph/fbphoto.jpg" />
    </Helmet>
  );
};

export default HeaderTags;
