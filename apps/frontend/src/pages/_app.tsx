import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';

import Footer from '@/components/Footer/index';
import Index from '@/components/Header';
import { client } from '@/lib/apollo';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{}>): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <div className='max-w-screen-2xl'>
        <Index />

        <Component {...pageProps} />

        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;