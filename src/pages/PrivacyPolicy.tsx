import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <div className="container mt-5">
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>This Privacy Policy explains how we collect, use, and protect your personal information when you use our JSON to Dot Notation Converter.</p>

    <h2 className="text-2xl font-semibold mt-4">What Information Do We Collect?</h2>
    <ul className="list-disc pl-6 mt-2">
      <li>Usage Data: Information about how you interact with our service.</li>
      <li>Cookies: We use cookies to enhance your browsing experience.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-4">How Do We Use Your Information?</h2>
    <p>We use your information to provide and improve our services, to communicate with you, and to comply with legal obligations.</p>

    <h2 className="text-2xl font-semibold mt-4">Your Rights</h2>
    <ul className="list-disc pl-6 mt-2">
      <li>You can request access or deletion of your data.</li>
      <li>You can withdraw consent at any time.</li>
    </ul>

    <p className="mt-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
  </div>
);

export default PrivacyPolicy;
