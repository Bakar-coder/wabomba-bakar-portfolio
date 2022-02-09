import React from "react";
import Portfolio from "../Components/portfolio";
import Layout from "../layouts";

interface PortfolioPageTypes {}

const PortfolioPage: React.FC<PortfolioPageTypes> = ({}) => {
  return (
    <Layout>
      <Portfolio />
    </Layout>
  );
};

export default { component: PortfolioPage };
