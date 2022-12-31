import { client } from '../lib/apollo';

import { ApolloProvider } from '@apollo/client';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{}>): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}

export default MyApp;
