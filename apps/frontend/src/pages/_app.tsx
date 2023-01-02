import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { client } from '@/lib/apollo';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{}>): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;