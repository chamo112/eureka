import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>eureka</title>
        <meta
          property='og:title'
          content='My page title'
          key='title'
        />
      </Head>

      <Head>
        <meta
          property='og:title'
          content='My new title'
          key='title'
        />
      </Head>
    </div>
  );
}

export default IndexPage;