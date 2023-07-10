import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import MyMarkdown from '@/components/MyMarkdown';
import { graphql } from '@/gql';

const queryDocument = graphql(`
  query Article($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
      id
      title
      body
    }
  }
`);

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      where: { id: typeof id === 'string' ? id : '' },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!data || !data.article) {
    router.replace('/404');
    return;
  }

  return (
    <>
      <div className='mt-10 flex items-center justify-center'>
        <div className='w-3/5'>
          <div className='py-3 text-4xl font-bold'>{data.article.title}</div>

          <div className='mt-6'>
            <MyMarkdown>{data.article.title}</MyMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;