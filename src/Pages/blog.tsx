import React from "react";
import Posts from "../Components/posts";
import Layout from "../layouts";

interface BlogTypes {}

const Blog: React.FC<BlogTypes> = ({}) => {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
};

export default { component: Blog };
