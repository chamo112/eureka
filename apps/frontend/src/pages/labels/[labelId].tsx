import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import LabelArticleCards from '@/features/labels/components/LabelArticleCards';
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

  return (
    <>
      <div className='px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
        <LabelArticleCards articles={data.articles} />
      </div>
    </>
  );
};

export default LabelPage;