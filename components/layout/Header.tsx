import Button from '@/shares/Button';
import ThemeToggle from '@/shares/ThemeToggle';
import Wrapper from '@/shares/Wrapper';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className='sticky py-5 top-0 bg-white dark:text-white dark:bg-gray-900 z-50 shadow-md bg-opacity-80 dark:bg-opacity-100 transition-colors duration-300'>
      <Wrapper>
        <div className='flex w-full justify-between items-center'>
          {/* Logo */}
          <div>
            <h1 className='text-2xl font-bold uppercase text-black dark:text-white'>Develop.me</h1>
          </div>

          {/* Nav + Toggle */}
          <div className='flex items-center space-x-6'>
            <ul className='flex items-center space-x-9 text-md font-light text-black dark:text-white'>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </ul>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* CTA Button */}
            <Button text='start a portfolio' icon={<FaArrowRight />} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
