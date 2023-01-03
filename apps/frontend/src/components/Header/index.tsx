const Index = () => (
  <>
    <header className='flex items-center justify-between border-b px-8 py-4'>
      {/* logo - start */}
      <a
        href='/'
        className='text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl'
        aria-label='logo'
      >
        elem
      </a>
      {/* logo - end */}

      {/* nav - start */}
      <nav className='hidden gap-12 lg:flex'>
        <a
          href='#'
          className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
        >
          Blog
        </a>
        <a
          href='#'
          className='inline-flex items-center gap-1 text-lg font-semibold text-indigo-500'
        >
          Category
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-800'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clip-rule='evenodd'
            />
          </svg>
        </a>
        <a
          href='#'
          className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
        >
          Toolbox
        </a>
        <a
          href='#'
          className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
        >
          About
        </a>
      </nav>
      {/* nav - end */}
    </header>
  </>
);

export default Index;