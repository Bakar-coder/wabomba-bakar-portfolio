import React from "react";
import Contact from "../Components/contact";
import Layout from "../layouts";

interface ContactPageTypes {}

const ContactPage: React.FC<ContactPageTypes> = ({}) => {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default { component: ContactPage };
