import React from 'react';

const TermsOfService: React.FC = () => (
  <div className="container mt-5">
    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
    <p>Please read these terms and conditions carefully before using our service.</p>

    <h2 className="text-2xl font-semibold mt-4">User Responsibilities</h2>
    <ul className="list-disc pl-6 mt-2">
      <li>Respect our intellectual property rights.</li>
      <li>Not to use the service for illegal activities.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-4">Service Availability</h2>
    <p>We aim to provide continuous availability, but we reserve the right to suspend or terminate access at any time.</p>

    <h2 className="text-2xl font-semibold mt-4">Liability Disclaimer</h2>
    <p>We are not liable for any indirect, incidental, or consequential damages arising from the use of our service.</p>

    <p className="mt-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
  </div>
);

export default TermsOfService;
