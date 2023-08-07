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
      {/*<div className='flex justify-end'>*/}
      {/*  <Link href={pagePaths.newPost()}>*/}
      {/*    <Button>New Post</Button>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      <div className='mx-auto my-0 max-w-4xl px-6'>
        {/* TODO: スペーサー追加する*/}
        <div className='h-8 w-full' />

        {/* ブログのタイトル */}
        <h2 className='text-h1 font-semibold text-gray-700'>Blog</h2>

        <div className='h-8 w-full' />

        {/* コンテンツ */}
        <BlogArticleCards articles={data.articles} />
      </div>
    </>
  );
};
export default Index;