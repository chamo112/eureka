import { pagePaths } from '@/utils/pagePaths';

type Article = {
  id: string;
  title: string;
  imageUrl: string;
  labels: Label[];
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
      <div
        key={props.title}
        className='flex flex-col overflow-hidden rounded-xl shadow-lg'
      >
        <div className='shrink-0'>
          <img
            className='h-48 w-full object-cover'
            src={props.imageUrl}
            alt={props.title}
          />
        </div>

        <div className='flex flex-1 flex-col justify-between bg-white p-6'>
          <div className='flex-1'>
            <div className='flex text-sm font-medium text-indigo-600'>
              {props.labels.map((label) => (
                <div
                  key={label.id}
                  className='m-1 first:ml-0 last:mr-0'
                >
                  <a
                    href={pagePaths.labelDetail(label.id)}
                    className='hover:underline'
                  >
                    {label.name}
                  </a>
                </div>
              ))}
            </div>

            <a
              href={pagePaths.blogDetail(props.id)}
              className='mt-2 block'
            >
              <p className='text-lg font-semibold text-gray-900'>{props.title}</p>
            </a>
          </div>

          <div className='mt-6 flex items-center'>
            <p className='text-xs font-medium text-gray-500'>{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;