
import React, { useEffect } from 'react';

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: string;
}

const GoogleAdSense: React.FC<GoogleAdSenseProps> = ({ adSlot, adFormat = 'auto' }) => {
  useEffect(() => {
    // Initialize Google AdSense when the component mounts
    // This is only needed once per page load
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error initializing AdSense:', error);
    }
  }, []);

  return (
    <div className="google-ad my-4 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your actual AdSense Publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      ></ins>
      <p className="text-xs text-muted-foreground mt-1">Advertisement</p>
    </div>
  );
};

export default GoogleAdSense;
