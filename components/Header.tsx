import React from 'react';
import { websiteName } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 py-4 glass-panel">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold gradient-text">
          {websiteName}
        </h1>
        <a 
          href="https://aisudarshan.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-button text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#7B61FF] via-[#FF6EC7] to-[#00E1FF] transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;