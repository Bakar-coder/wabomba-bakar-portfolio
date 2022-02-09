import React from "react";
import About from "../Components/about";
import Layout from "../layouts";

interface AboutPageTypes {}

const AboutPage: React.FC<AboutPageTypes> = ({}) => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default { component: AboutPage };
