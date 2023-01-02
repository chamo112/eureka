import { useQuery } from '@apollo/client';

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

  return (
    <div className='relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='absolute inset-0'>
        <div className='h-1/3 bg-white sm:h-2/3' />
      </div>

      <div className='relative mx-auto max-w-7xl'>
        {/* コンテンツ */}
        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
          {data!.articles.map((article) => (
            <Card
              key={article.id}
              id={article.id}
              title={article.title}
              body={article.body}
              categoryName='Article'
              href='#'
              imageUrl='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
              author={{
                name: 'Roel Aufderehar',
                href: '#',
                imageUrl:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              }}
              date='Mar 16, 2020'
              datetime='2020-03-16'
              readingTime='6 min'
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Index;