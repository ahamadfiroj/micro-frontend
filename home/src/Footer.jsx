import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({hideLink = []}) => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex justify-between">
        {/* Basic Information Section */}
        <div>
          <h3 className="text-lg font-bold">My Movie Store</h3>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} My Movie Store. All rights reserved.
          </p>
        </div>
        
        {/* Links Section */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              {!hideLink.includes('home') && <Link to="/" className="text-blue-400 hover:underline">Home</Link>}
            </li>
            <li>
             {!hideLink.includes('about') &&  <Link to="/about" className="text-blue-400 hover:underline">About Us</Link>}
            </li>
            <li>
              <Link to="/contact" className="text-blue-400 hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        
        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="https://www.facebook.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
