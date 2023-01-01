import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

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
  if (!data || !data.article) return <p>No data!</p>;

  return (
    <div>
      <div>{data!.article!.body}</div>
      <div>{id}</div>
    </div>
  );
};

export default ArticlePage;