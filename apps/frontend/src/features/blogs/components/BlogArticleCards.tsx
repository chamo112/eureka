import ArticleCard from '@/components/ArticleCard';

type Props = {
  articles: Article[];
};

type Article = {
  id: string;
  title: string;
  labels?: Label[];
  createdAt: any;
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

const BlogArticleCards = (props: Props) => {
  return (
    <>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {props.articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            labels={article.labels}
            date={article.createdAt}
          />
        ))}
      </div>
    </>
  );
};

export default BlogArticleCards;