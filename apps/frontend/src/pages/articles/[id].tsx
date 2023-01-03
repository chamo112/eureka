import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';

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
    router.replace('/404')
    return;
  }

  return (
    <div>
      <div>{id}</div>
      <Markdown>{data!.article!.body}</Markdown>
    </div>
  );
};

export default ArticlePage;