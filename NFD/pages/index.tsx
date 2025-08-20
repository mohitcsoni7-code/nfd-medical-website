import { NextPage } from 'next';
import Head from 'next/head';
import App from '../App';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFD Professional Medical Website</title>
        <meta name="description" content="Professional medical services and products from NFD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
};

export default HomePage;
