import ArticleCard from '@/components/ArticleCard';

type Props = {
  articles: Article[];
};

type Article = {
  id: string;
  title: string;
  body: string;
  labels: Label[];
  createdBy?: User | null;
};

type Label = {
  id: string;
  name: string;
};

type User = {
  name: string;
  picture?: string | null;
};

const LabelArticleCards = (props: Props) => {
  return (
    <div>
      <>
        <div className='mx-20 mt-12 grid gap-10 md:mx-auto md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {props.articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              body={article.body}
              labels={article.labels}
              href='#'
              imageUrl='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
              author={{
                name: `${article.createdBy!.name}`,
                imageUrl: `${article.createdBy!.picture}`,
              }}
              date='Mar 16, 2020'
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default LabelArticleCards;