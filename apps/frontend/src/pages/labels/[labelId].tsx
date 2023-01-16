import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { graphql } from '@/gql';

const queryDocument = graphql(`
  query Articles($where: LabelWhereInput) {
    articles {
      id
      title
      body
      labels(where: $where) {
        id
        name
      }
    }
  }
`);

const LabelPage = () => {
  const router = useRouter();
  const { labelId } = router.query;

  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      where: { id: typeof labelId === 'string' ? labelId : '' },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  if (!data || !data.articles) {
    router.replace('/404');
    return;
  }

  return <div>${labelId}</div>;
};

export default LabelPage;