import Wrapper from '@/shares/Wrapper';
import React from 'react';
import { Mail, PhoneCall, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-white via-lime-100 to-lime-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-24 transition-colors duration-300">
      <Wrapper>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side - text */}
          <div className="space-y-6">
            <span className="inline-block border border-black text-black dark:border-white dark:text-white px-4 py-1 rounded-full text-sm transition-colors">
              ● Contact
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white transition-colors">
              Interested in <br />
              <span className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-md inline-block transition-colors">
                work
              </span>{' '}
              together?
            </h2>
            <p className="text-gray-800 dark:text-gray-300 max-w-lg transition-colors">
              We start every new client interaction with an in-depth discovery call where we get to
              know each other.
            </p>

            <button className="mt-4 border border-black dark:border-gray-500 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300">
              <PhoneCall size={18} />
              Schedule a Call
            </button>
          </div>

          {/* Right side - form */}
          <div className="bg-black dark:bg-gray-900 text-white p-6 md:p-8 rounded-2xl space-y-4 transition-colors duration-300">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-3 placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-3 placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-500 transition-colors"
            />
            <textarea
              placeholder="Describe your project"
              rows={3}
              className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-3 placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-500 transition-colors"
            ></textarea>

            <div className="flex items-center gap-4 mt-6">
              <button className="bg-white text-black dark:bg-gray-100 dark:text-gray-900 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors duration-300">
                <Send size={16} />
                Send
              </button>
              <button className="border border-white dark:border-gray-400 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black dark:hover:bg-gray-300 dark:hover:text-black transition-colors duration-300">
                <MessageCircle size={16} />
                Contact me
              </button>
            </div>

            <div className="mt-6 text-sm opacity-70 flex items-center gap-6">
              @williamrey
              <div className="flex gap-4 ml-4">
                <a href="#" className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded transition-colors">🌐</a>
                <a href="#" className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded transition-colors">📷</a>
                <a href="#" className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded transition-colors">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
