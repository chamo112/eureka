import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { Button } from '@/components/Elements';
import BlogArticleCards from '@/features/blogs/components/BlogArticleCards';
import { graphql } from '@/gql';
import { pagePaths } from '@/utils/pagePaths';

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
      <div className='mb-10 mt-6 flex justify-end pr-8'>
        <Link href={pagePaths.newPost()}>
          <Button>New Post</Button>
        </Link>
      </div>

      {/* ブログのタイトル */}
      <h2 className='mb-10 text-center text-3xl font-semibold text-gray-700'>Blog</h2>

      {/* コンテンツ */}
      <BlogArticleCards articles={data.articles} />
    </>
  );
};
export default Index;