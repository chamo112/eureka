import { pagePaths } from '@/utils/pagePaths';

type Article = {
  id: string;
  title: string;
  imageUrl: string;
  labels?: Label[];
  href: string;
  date: string;
};

type Label = {
  id: string;
  name: string;
};

const ArticleCard = (props: Article): JSX.Element => {
  return (
    <>
      {/* タイトル */}
      <a href={pagePaths.blogDetail(props.id)}>
        <div
          key={props.title}
          className='flex h-full flex-col overflow-hidden rounded-xl shadow-lg'
        >
          <img
            className='h-48 w-full object-cover'
            src={props.imageUrl}
            alt={props.title}
          />

          <div className='px-6 py-4'>
            <div className='mb-4 h-16'>
              <p className='text-lg font-semibold text-gray-900'>{props.title}</p>
            </div>

            <div className='h-8'>
              <p className='text-xs font-medium text-gray-500'>{props.date}</p>
            </div>

            {props.labels && (
              <div className='flex text-sm font-medium text-pink-600'>
                {props.labels.map((label) => (
                  <div
                    key={label.id}
                    className='m-1 first:ml-0 last:mr-0'
                  >
                    <a
                      href={pagePaths.labelDetail(label.name)}
                      className='hover:underline'
                    >
                      {label.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </a>
    </>
  );
};

export default ArticleCard;