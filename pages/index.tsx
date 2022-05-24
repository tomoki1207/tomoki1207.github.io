import type { NextPage } from 'next'
import Layout from "../components/layout";
import WorkBench from "../components/workbench";

const Home: NextPage = () => {
  return (
    <Layout>
      <WorkBench />
    </Layout>
  );
};

export default Home
