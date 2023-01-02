import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';

import Header from '@/components/header';
import { client } from '@/lib/apollo';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{}>): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <div className='bg-white lg:pb-12'>
        <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <Header />

          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;