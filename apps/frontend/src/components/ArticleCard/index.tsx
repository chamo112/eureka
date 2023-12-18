import { formatDate } from '@/utils/day';
import { pagePaths } from '@/utils/pagePaths';

type Article = {
  id: string;
  title: string;
  labels?: Label[];
  date: string;
};

type Label = {
  id: string;
  name: string;
};

const ArticleCard = (props: Article): JSX.Element => {
  return (
    <>
      <a href={pagePaths.blogDetail(props.id)}>
        <div
          key={props.title}
          className='flex h-[180px] flex-col justify-between gap-x-3 overflow-hidden rounded-3xl px-6 py-4 shadow-lg'
        >
          {/* タイトル */}
          <p className='line-clamp-2 text-lg font-semibold text-gray-900'>{props.title}</p>

          <div>
            {/* 投稿日 */}
            <p className='text-xs font-medium text-gray-500'>
              {formatDate.toDateWithTime(props.date)}
            </p>

            {/* ラベル */}
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