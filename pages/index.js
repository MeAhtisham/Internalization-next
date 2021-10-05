import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeContainer from '../components/pages/Home';
import MainLayout from '../components/layouts/MainLayout';

function Home() {
  return <HomeContainer />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}
Home.Layout = MainLayout;
export default Home;
