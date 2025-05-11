import React from 'react';

const Footer: React.FC = () => (
  <footer className='text-primary py-4'>
    <div className='container mx-auto text-center'>
      <p>
        &copy; {new Date().getFullYear()} JSON to Dot Notation Converter. All
        rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
