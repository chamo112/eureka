import { useQuery } from '@apollo/client';

import { graphql } from '@/gql';
import BlogCard from '@/pages/blogs/components/blog-card';

const queryDocument = graphql(`
  query MyQuery {
    articles {
      id
      title
      body
      createdBy {
        name
        picture
      }
      labels {
        id
        name
      }
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
        <h2 className='mb-4 text-center text-xl font-semibold text-gray-700 md:mb-6 lg:text-3xl'>
          List of articles
        </h2>
      </div>

      {/* コンテンツ */}
      {/* TODO: 後で直す */}
      {/* @ts-ignore */}
      <BlogCard articles={data!.articles!} />
    </div>
  );
};
export default Index;