
import React from 'react';
import { Code } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 bg-gradient-to-r from-converter-blue to-converter-blue-dark text-white">
      <div className="container flex items-center justify-center space-x-3">
        <Code size={32} className="text-white" />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">JSON to Dot Notation Converter</h1>
          <p className="text-sm md:text-base opacity-90">Transform nested JSON objects into flat dot notation format</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
