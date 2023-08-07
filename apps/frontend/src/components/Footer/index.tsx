import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NaviItems = [
  {
    title: 'Blog',
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

const iconStyle: React.CSSProperties = { fontSize: 25 };
const githubUrl: string = process.env.GITHUB_URL!;
const twitterUrl: string = process.env.TWITTER_URL!;

const Footer = () => (
  <>
    <div className='mt-8 py-8'>
      <footer className='mx-auto max-w-screen-2xl'>
        <div className='flex flex-col items-center'>
          {/* nav - start */}
          <nav className='flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6'>
            {NaviItems.map((item) => (
              <div key={item.title}>
                <a
                  href={item.href}
                  className='text-base text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
                >
                  {item.title}
                </a>
              </div>
            ))}
          </nav>

          <div className='mt-2 flex gap-8'>
            <a
              href={twitterUrl}
              target='_blank'
              className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
            >
              <FontAwesomeIcon
                style={iconStyle}
                icon={faTwitter}
              />
            </a>
            <a
              href={githubUrl}
              target='_blank'
              className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
            >
              <FontAwesomeIcon
                style={iconStyle}
                icon={faGithub}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  </>
);

export default Footer;