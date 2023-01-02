const Header = () => (
  <>
    <header className='flex justify-between items-center px-8 py-4 border-b'>
      {/* logo - start */}
      <a
        href='/'
        className='inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
        aria-label='logo'
      >
        <svg
          width='95'
          height='94'
          viewBox='0 0 95 94'
          className='w-6 h-auto text-indigo-500'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M96 0V47L48 94H0V47L48 0H96Z' />
        </svg>
        Flowrift
      </a>
      {/* logo - end */}

      {/* nav - start */}
      <nav className='hidden lg:flex gap-12'>
        <a
          href='#'
          className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100'
        >
          Home
        </a>
        <a
          href='#'
          className='inline-flex items-center text-indigo-500 text-lg font-semibold gap-1'
        >
          Features
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
          className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100'
        >
          Pricing
        </a>
        <a
          href='#'
          className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100'
        >
          About
        </a>
      </nav>
      {/* nav - end */}
    </header>
  </>
);

export default Header;