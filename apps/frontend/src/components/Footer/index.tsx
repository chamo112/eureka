import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const iconStyle: React.CSSProperties = { fontSize: 25 };
const Index = () => (
  <>
    <div className='bg-white pt-4 sm:pt-10 lg:pt-12'>
      <footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex flex-col items-center border-t pt-6'>
          {/* nav - start */}
          <nav className='flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-8'>
            <a
              href='apps/frontend/src/components#'
              className='text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100'
            >
              About
            </a>
            <a
              href='apps/frontend/src/components#'
              className='text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100'
            >
              Investor Relations
            </a>
            <a
              href='apps/frontend/src/components#'
              className='text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100'
            >
              Jobs
            </a>
            <a
              href='apps/frontend/src/components#'
              className='text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100'
            >
              Press
            </a>
            <a
              href='apps/frontend/src/components#'
              className='text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100'
            >
              Blog
            </a>
          </nav>
          {/* nav - end */}

          {/* social - start */}
          <div className='flex gap-8'>
            <a
              href='apps/frontend/src/components#'
              target='_blank'
              className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
            >
              <FontAwesomeIcon
                style={iconStyle}
                icon={faInstagram}
              />
            </a>

            <a
              href='apps/frontend/src/components#'
              target='_blank'
              className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
            >
              <FontAwesomeIcon
                style={iconStyle}
                icon={faTwitter}
              />
            </a>

            <a
              href='apps/frontend/src/components#'
              target='_blank'
              className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
            >
              <FontAwesomeIcon
                style={iconStyle}
                icon={faGithub}
              />
            </a>
          </div>
          {/* social - end */}
        </div>

        <div className='text-gray-400 text-sm text-center py-8'>
          © 2021 - Present Flowrift. All rights reserved.
        </div>
      </footer>
    </div>
  </>
);

export default Index;