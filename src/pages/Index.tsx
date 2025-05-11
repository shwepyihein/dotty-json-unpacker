import Footer from '@/components/Footer';
import GoogleAdSense from '@/components/GoogleAdSense';
import Header from '@/components/Header';
import InfoSection from '@/components/InfoSection';
import JsonConverter from '@/components/JsonConverter';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Index: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col bg-background'>
      <Header />
      <Separator />
      <main className='flex-1 py-6 md:py-12'>
        <JsonConverter />

        <Separator className='my-8' />
        <div className='container mt-8'>
          <GoogleAdSense adSlot='1234567890' />
        </div>
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
