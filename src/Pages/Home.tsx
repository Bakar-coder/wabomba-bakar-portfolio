import Layout from "../layouts";
import Home from "../Components";

const HomePage = (props: any) => {
  const {} = props;
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default {
  component: HomePage,
  async getInitialProps({ dispatch, getState, pathname }: any) {},
};
