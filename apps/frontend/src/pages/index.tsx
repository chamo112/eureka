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
    <div className='px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='mb-10 md:mb-16'>
        {/* ブログのタイトル */}
        <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
          Blog
        </h2>

        <p className='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
          This is a section of some simple filler text, also known as placeholder text. It shares
          some characteristics of a real written text but is random or otherwise generated.
        </p>
      </div>

      {/* コンテンツ */}
      <div className='mx-auto mt-12 grid max-w-lg gap-5 md:mx-20 lg:max-w-none lg:grid-cols-3'>
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
  );
};
export default Index;