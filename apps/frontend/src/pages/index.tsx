import { useQuery } from '@apollo/client';
import Markdown from 'react-markdown';

import Card from '@/components/card';
import { graphql } from '@/gql';

const queryDocument = graphql(`
  query MyQuery {
    articles {
      id
      title
      body
    }
  }
`);

const Index = () => {
  const { loading, error, data } = useQuery(queryDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  // console.log(data);

  return (
    <div className='relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='absolute inset-0'>
        <div className='h-1/3 bg-white sm:h-2/3' />
      </div>

      <div className='relative mx-auto max-w-7xl'>
        {/* コンテンツ */}
        <Card />

        {/* Articles */}
        {data!.articles.map((article) => (
          <div key={article.id}>
            <div className='m-5 border'>
              <a href={`articles/${article.id}`}>
                <div>{article.title}</div>
                <Markdown>{article.body}</Markdown>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Index;