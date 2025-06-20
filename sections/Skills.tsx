import React from 'react';
import Image from 'next/image';
import Wrapper from '@/shares/Wrapper';
import { FaArrowRight } from 'react-icons/fa';
import { SiHtml5, SiJavascript, SiWebflow } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="relative bg-black text-white py-16">
      <Wrapper>
        <div className="flex flex-col items-center gap-4 text-center">
          <button className="border border-white px-4 py-1 rounded-full text-sm">
            Why Choose me
          </button>
          <h2 className="text-4xl font-bold leading-tight">
            My <span className="text-purple-500">Extensive</span> <br /> List of Skills
          </h2>
          <p className="max-w-xl text-gray-400 mt-4">
            Building the world’s best marketing. Your trusted partner for strategy, design, and dev.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* HTML & CSS */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl flex flex-col items-center shadow-lg">
            <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="49.5" cy="49.5024" rx="48.5" ry="15" stroke="white" strokeWidth="2"/>
<ellipse cx="49.5001" cy="49.5024" rx="48.5" ry="15" transform="rotate(-60 49.5001 49.5024)" stroke="white" strokeWidth="2"/>
<ellipse cx="49.4999" cy="49.5022" rx="48.5" ry="15" transform="rotate(60 49.4999 49.5022)" stroke="white" strokeWidth="2"/>
<circle cx="50" cy="50" r="7" fill="#C5FF41"/>
</svg>

            <h3 className="text-xl font-semibold mb-2">HTML & CSS</h3>
            <p className="text-gray-400 text-sm text-center">
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.
            </p>
          </div>

          {/* Javascript */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl flex flex-col items-center shadow-lg rotate-[-6deg]">
            <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="49.5" cy="49.5024" rx="48.5" ry="15" stroke="white" strokeWidth="2"/>
<ellipse cx="49.5001" cy="49.5024" rx="48.5" ry="15" transform="rotate(-60 49.5001 49.5024)" stroke="white" strokeWidth="2"/>
<ellipse cx="49.4999" cy="49.5022" rx="48.5" ry="15" transform="rotate(60 49.4999 49.5022)" stroke="white" strokeWidth="2"/>
<circle cx="50" cy="50" r="7" fill="#C5FF41"/>
</svg>

            <h3 className="text-xl font-semibold mb-2">Javascript</h3>
            <p className="text-gray-400 text-sm text-center">
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.
            </p>
          </div>

          {/* Webflow */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl flex flex-col items-center shadow-lg border-2 border-purple-500">
            <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="49.5" cy="49.5024" rx="48.5" ry="15" stroke="white" strokeWidth="2"/>
<ellipse cx="49.5001" cy="49.5024" rx="48.5" ry="15" transform="rotate(-60 49.5001 49.5024)" stroke="white" strokeWidth="2"/>
<ellipse cx="49.4999" cy="49.5022" rx="48.5" ry="15" transform="rotate(60 49.4999 49.5022)" stroke="white" strokeWidth="2"/>
<circle cx="50" cy="50" r="7" fill="#C5FF41"/>
</svg>

            <h3 className="text-xl font-semibold mb-2">Webflow</h3>
            <p className="text-gray-400 text-sm text-center">
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
