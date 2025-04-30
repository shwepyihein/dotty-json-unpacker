import GoogleAdSense from '@/components/GoogleAdSense';
import Header from '@/components/Header';
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
        <div className='container mt-8'>
          <GoogleAdSense adSlot='1234567891' />
        </div>
      </main>
      <footer className='py-6 text-center text-sm text-muted-foreground'>
        <div className='container'>
          <p>JSON to Dot Notation Converter © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
