type Article = {
  id: string;
  title: string;
  body: string;
  imageUrl: string;
  labels: Label[];
  href: string;
  author: {
    name: string;
    imageUrl: string;
  };
  date: string;
};

type Label = {
  id: string;
  name: string;
};

export const Index = (props: Article): JSX.Element => {
  return (
    <>
      {/* タイトル */}
      <div
        key={props.title}
        className='flex flex-col overflow-hidden rounded-lg shadow-lg'
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
            <p className='flex text-sm font-medium text-indigo-600'>
              {props.labels.map((label) => (
                <div
                  key={label.id}
                  className='m-1 first:ml-0 last:mr-0'
                >
                  <a
                    href='#'
                    className='hover:underline'
                  >
                    {label.name}
                  </a>
                </div>
              ))}
            </p>

            <a
              href={`blogs/${props.id}`}
              className='mt-2 block'
            >
              <p className='text-lg font-semibold text-gray-900'>{props.title}</p>
              <p className='mt-3 text-base text-gray-500'>{props.body}</p>
            </a>
          </div>

          <div className='mt-6 flex items-center'>
            <div className='shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src={props.author.imageUrl}
                alt='{props.author.name}'
              />
            </div>

            <div className='ml-3'>
              <p className='text-sm font-medium text-gray-900'>{props.author.name}</p>
              <p className='text-xs font-medium text-gray-500'>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;