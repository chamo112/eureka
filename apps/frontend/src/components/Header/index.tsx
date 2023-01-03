const NaviItems = [
  {
    title: 'Blog',
    href: '#',
  },
  {
    title: 'Category',
    href: '#',
  },
  {
    title: 'Toolbox',
    href: '#',
  },
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  },
];

const Index = () => (
  <>
    <header className='flex items-center justify-between border-b px-12 py-4'>
      <a
        href='/'
        className='text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl'
        aria-label='logo'
      >
        elem
      </a>

      {/* ナビゲーション */}
      <nav className='hidden gap-12 lg:flex'>
        {NaviItems.map((item) => (
          <div key={item.title}>
            <a
              href={item.href}
              className='text-md text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
            >
              {item.title}
            </a>
          </div>
        ))}
      </nav>
    </header>
  </>
);

export default Index;