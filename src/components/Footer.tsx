import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className='text-primary py-4'>
    <div className='container mx-auto text-center'>
      <p>
        &copy; {new Date().getFullYear()} JSON to Dot Notation Converter. All
        rights reserved.
      </p>
      <ul className='list-inline flex items-center  gap-5 justify-center text-center'>
        <li className='list-inline-item'>
          <Link
            to='/privacy'
            className='text-gray-500 underline hover:text-gray-300'
          >
            Privacy Policy
          </Link>
        </li>
        <li className='list-inline-item'>
          <Link
            to='/terms'
            className='text-gray-500 underline hover:text-gray-300'
          >
            Terms of Service
          </Link>
        </li>
        <li className='list-inline-item'>
          <Link
            to='/about'
            className='text-gray-500 underline hover:text-gray-300'
          >
            About Us
          </Link>
        </li>
        <li className='list-inline-item'>
          <Link
            to='/contact'
            className='text-gray-500 underline hover:text-gray-300'
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
