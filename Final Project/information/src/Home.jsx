import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Profile Card */}
      <div className="rounded-lg shadow-xl p-8 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Hello, I'm Xavier Bunker!</h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          A driven 24-year-old based in Little Rock, born on February 8, 2001. Currently a Crew Trainer at Slim Chickens.
          Welcome to my online portfolio!
        </p>
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/xavierbunker" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.5 6.4-1.54 6.4-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1 12.24 12.24 0 0 0 12 3.22a12.2 12.2 0 0 0-8.01-2.22 5.05 5.05 0 0 0-4.79 1.8A5.49 5.49 0 0 0 9 7.87c0 .67 0 1.22.02 1.81A2.96 2.96 0 0 1 9.86 9c-.08-.66-.36-1.2-.78-1.5-3.18-.2-6.54-.9-3.67-3.61.9 1.1 3.41 1.91 6.66 1.91m-3.99-1.91v3.28"/></svg>
          </a>
          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/xavier-bunker-ab6bb3332" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          {/* Add other social links as needed */}
        </div>
      </div>
    </div>
  );
}

export default Home;