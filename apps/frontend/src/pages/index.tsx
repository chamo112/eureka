import { useQuery } from "@apollo/client";
import { graphql } from '@/gql/gql';

const GatArticles = graphql(`
    query Article {
        articles {
            id
            title
            body
        }
    }
`);

export default function Web() {
  const {loading, error, data} = useQuery(GatArticles);

  if(loading) return 'loading...'
  if(error) return 'Error!'

  return (
    <div>


      {data!.articles.map((article ) => {
        return (
          <div key={article.id}>
            <div>{article.title}</div>
            <div>{article.body}</div>
          </div>
        );
      })}
    </div>
  );
}