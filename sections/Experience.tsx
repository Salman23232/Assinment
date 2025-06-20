import Wrapper from '@/shares/Wrapper';
import React from 'react';

const Experience = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-lime-300/40 to-white dark:from-lime-300/10 dark:to-gray-950 overflow-hidden">
      <Wrapper>
        {/* Tagline */}
        <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center md:text-left space-y-4 text-gray-900 dark:text-white">
          <p>
            I’ve been{' '}
            <span className="bg-black text-white px-4 py-2 rounded-md dark:bg-white dark:text-black">
              Developing
            </span>
          </p>
          <p>
            Websites since{' '}
            <span className="bg-black text-white px-4 py-2 rounded-md dark:bg-white dark:text-black">
              2013
            </span>
          </p>
        </div>

        {/* Yellow Bordered Info Box */}
        <div className="mt-6 max-w-3xl mx-auto md:mx-0 border border-yellow-500 p-4 rounded-md text-center md:text-left text-gray-800 dark:text-gray-200 dark:border-yellow-400">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of action.
        </div>

        {/* Logos Section */}
        <div className="mt-16 border border-black dark:border-white p-6 rounded-2xl flex flex-wrap justify-center gap-4 bg-white dark:bg-black">
          {[
            'awwwards.',
            'facebook',
            'CSSWINNER',
            '/thoughtworks',
            'AUTODESK',
            'CSSDesignAwards',
          ].map((brand, index) => (
            <span
              key={index}
              className="border border-black dark:border-white px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap text-black dark:text-white"
            >
              {brand}
            </span>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Experience;
