import React from 'react';

const AboutUs: React.FC = () => (
  <div className="container mt-5">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p>We are a team dedicated to providing you with an efficient and user-friendly tool for converting JSON objects to dot notation format.</p>

    <h2 className="text-2xl font-semibold mt-4">Our Mission</h2>
    <p>To make JSON to dot notation conversion accessible, fast, and accurate for developers worldwide.</p>

    <div className="card shadow-sm mt-2 p-4">
      <h3 className="font-bold">Core Developers</h3>
      <ul className="list-disc pl-4 mt-2">
        <li>John Doe - Lead Developer</li>
        <li>Jane Smith - Frontend Architect</li>
      </ul>
    </div>

    <p className="mt-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
  </div>
);

export default AboutUs;
