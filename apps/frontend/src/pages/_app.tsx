import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import Footer from '@/components/Footer/index';
import Head from '@/components/Head/index';
import Index from '@/components/Header';
import { client } from '@/lib/apollo';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{}>): JSX.Element {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Head />

        <div className='max-w-screen-2xl'>
          <Index />

          <Component {...pageProps} />

          <Footer />
        </div>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;