import type { NextPage } from 'next';
import MainContainer from '../components/main/MainContainer';
import MainLayout from '../layout/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <MainContainer />
    </MainLayout>
  );
};

export default Home;
