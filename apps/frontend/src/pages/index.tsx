import { Button } from 'ui';
import { gql, useQuery } from "@apollo/client";

const GET_ARTICLES = gql`
    query GetArticles {
        articles {
            id
            title
            body
        }
    }
`;

export default function Web() {
  const {loading, error, data} = useQuery(GET_ARTICLES);

  if(loading) return 'loading...'
  if(error) return 'Error!'

  return (
    <div>
      {data.articles.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.body}</div>
          </div>
        );
      })}
    </div>
  );
}