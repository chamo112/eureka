// const NaviItems = [
//   {
//     title: 'Blog',
//     href: '#',
//   },
//   {
//     title: 'Toolbox',
//     href: '#',
//   },
//   {
//     title: 'About',
//     href: '#',
//   },
//   {
//     title: 'Contact',
//     href: '#',
//   },
// ];

const Header = () => (
  <>
    {/* TODO: スペース修正する */}
    <header className='flex w-full items-center justify-between border-b px-12 py-4'>
      <a
        href='/'
        className='inline-flex items-center gap-2.5 text-2xl font-bold text-gray-800 md:text-3xl'
        aria-label='logo'
      >
        eureka
      </a>

      {/* ナビゲーション */}
      {/*<nav className='hidden gap-12 lg:flex'>*/}
      {/*  {NaviItems.map((item) => (*/}
      {/*    <div key={item.title}>*/}
      {/*      <a*/}
      {/*        href={item.href}*/}
      {/*        className='text-base text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'*/}
      {/*      >*/}
      {/*        {item.title}*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</nav>*/}
    </header>
  </>
);

export default Header;