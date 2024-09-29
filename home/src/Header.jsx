import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({isHideHeader = false, hideLink = []}) => {
    if(isHideHeader) return null;
  return (
    <header className="flex justify-between items-center p-5 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">My Movie Store</h1>
      <nav className="flex space-x-4">
       {!hideLink.includes('home') && <Link
          to="/"
          className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
        >
          Home
        </Link>}
        {!hideLink.includes('cart') && <Link
          to="/cart"
          className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
        >
          Cart
        </Link>}
       {!hideLink.includes('pdp') && <Link
          to="/pdp"
          className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
        >
          Product Detail Page
        </Link>}
       {!hideLink.includes('about') && <Link
          to="/about"
          className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
        >
          About
        </Link>}
      </nav>
    </header>
  );
};

export default Header;
