import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import BlogArticleCards from '@/features/blogs/components/BlogArticleCards';
import { graphql } from '@/gql';

const queryDocument = graphql(`
  query Articles($where: LabelWhereInput) {
    articles {
      id
      title
      body
      createdAt
      createdBy {
        name
        picture
      }
      labels(where: $where) {
        id
        name
      }
    }
  }
`);

const LabelPage = () => {
  const router = useRouter();
  const { tagName } = router.query;

  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      where: { id: typeof tagName === 'string' ? tagName : '' },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!data || !data.articles) {
    router.replace('/404');
    return;
  }

  return (
    <>
      <div className='mx-auto my-0 max-w-4xl px-6'>
        <div className='h-8 w-full' />

        {/* ブログのタイトル */}
        <h2 className='text-h1 font-semibold text-gray-700'>{tagName}</h2>

        <div className='h-8 w-full' />

        <BlogArticleCards articles={data.articles} />
      </div>
    </>
  );
};

export default LabelPage;