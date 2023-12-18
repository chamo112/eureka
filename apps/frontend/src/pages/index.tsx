import { useQuery } from '@apollo/client';

import BlogArticleCards from '@/features/blogs/components/BlogArticleCards';
import { graphql } from '@/gql';

const queryDocument = graphql(`
  query MyQuery {
    articles {
      id
      title
      body
      createdAt
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
  if (!data) return <p>No Data!</p>;

  return (
    <>
      <div className='mx-auto my-8 max-w-5xl px-6'>
        {/* ブログのタイトル */}
        <h2 className='text-h1 font-semibold text-gray-700'>Blog</h2>

        {/* コンテンツ */}
        <div className='mt-8'>
          <BlogArticleCards articles={data.articles} />
        </div>
      </div>
    </>
  );
};
export default Index;