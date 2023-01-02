type Article = {
  id: string;
  title: string;
  body: string;
  imageUrl: string;
  categoryName: string;
  href: string;
  author: {
    name: string;
    imageUrl: string;
  };
  datetime: string;
  date: string;
  readingTime: string;
};

export default Article;