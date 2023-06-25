const Index = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='mt-10 w-3/5'>
          {/* TODO: コンポーネント化 */}
          {/* タイトル */}
          <input
            className='h-10 w-[36rem] rounded text-xl focus:outline-0'
            type='text'
            placeholder='タイトル'
          />

          <div className='h-6 w-full' />

          {/* TODO: box-shadow 修正 */}
          {/* テキスト */}
          <div className='h-max min-h-[36rem] rounded-lg border px-8 py-10  shadow-lg'>
            <textarea
              className='h-screen w-full resize-none rounded focus:outline-0'
              placeholder='記事を入力'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;