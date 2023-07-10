import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// TODO: 型修正する
const MyMarkdown = (props: any) => {
  return (
    <>
      <ReactMarkdown
        className='lib-markdown'
        remarkPlugins={[remarkGfm]}
      >
        {props}
      </ReactMarkdown>
      ;
    </>
  );
};

export default MyMarkdown;