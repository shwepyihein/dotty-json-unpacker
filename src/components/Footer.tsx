import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} JSON to Dot Notation Converter. All rights reserved.</p>
      <ul className="list-inline mt-2">
        <li className="list-inline-item"><Link to="/privacy" className="text-white hover:text-gray-300">Privacy Policy</Link></li>
        <li className="list-inline-item"><Link to="/terms" className="text-white hover:text-gray-300">Terms of Service</Link></li>
        <li className="list-inline-item"><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
