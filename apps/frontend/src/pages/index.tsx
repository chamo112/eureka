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
      {/* TODO: レイアウト修正 */}

      <div className='mt-6 flex justify-end pr-8'>
        <Link href={pagePaths.newPost()}>
          <Button>New Post</Button>
        </Link>
      </div>

      <div className='px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24'>
        <div className='mb-10 md:mb-16'>
          {/* ブログのタイトル */}
          <h2 className='mb-4 text-center text-xl font-semibold text-gray-700 md:mb-6 lg:text-3xl'>
            List of articles
          </h2>
        </div>

        {/* コンテンツ */}
        <BlogArticleCards articles={data.articles} />
      </div>
    </>
  );
};
export default Index;