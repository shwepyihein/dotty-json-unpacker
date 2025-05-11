import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-8 space-y-8'>
      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle>About JSON to Dot Notation Converter</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p>
            A specialized tool designed to convert nested JSON objects into dot
            notation format, optimized for use with the{' '}
            <code className='bg-muted px-1 rounded'>next-international</code>{' '}
            localization library.
          </p>

          <h3 className='text-lg font-semibold'>Why Use This Tool?</h3>
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              Convert nested translation files into the format{' '}
              <code className='bg-muted px-1 rounded'>next-international</code>{' '}
              expects
            </li>
            <li>Maintain type safety with TypeScript</li>
            <li>Simplify the process of creating and managing translations</li>
            <li>
              Support for multiple input formats including JSON and TypeScript
              with <code className='bg-muted px-1 rounded'>as const</code>
            </li>
          </ul>

          <h3 className='text-lg font-semibold'>Technologies Used</h3>
          <ul className='list-disc pl-6'>
            <li>Vite</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>shadcn-ui</li>
            <li>Tailwind CSS</li>
          </ul>
        </CardContent>
      </Card>

      <Separator />

      {/* Privacy Policy Section */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our JSON to Dot Notation Converter.
          </p>

          <h3 className='text-lg font-semibold'>Information We Collect</h3>
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              Usage Data: Information about how you interact with our service
            </li>
            <li>Cookies: We use cookies to enhance your browsing experience</li>
          </ul>

          <h3 className='text-lg font-semibold'>How We Use Your Information</h3>
          <p>
            We use your information to provide and improve our services, to
            communicate with you, and to comply with legal obligations.
          </p>

          <h3 className='text-lg font-semibold'>Your Rights</h3>
          <ul className='list-disc pl-6 space-y-2'>
            <li>You can request access or deletion of your data</li>
            <li>You can withdraw consent at any time</li>
          </ul>

          <p className='text-sm text-muted-foreground'>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardContent>
      </Card>

      <Separator />

      {/* Terms of Service Section */}
      <Card>
        <CardHeader>
          <CardTitle>Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p>
            By using the JSON to Dot Notation Converter, you agree to these
            terms of service.
          </p>

          <h3 className='text-lg font-semibold'>Usage Terms</h3>
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              You may use this tool for both personal and commercial projects
            </li>
            <li>You are responsible for the content you convert</li>
            <li>We do not store or process your data on our servers</li>
          </ul>

          <h3 className='text-lg font-semibold'>Limitations</h3>
          <ul className='list-disc pl-6 space-y-2'>
            <li>This tool is provided "as is" without any warranties</li>
            <li>We are not responsible for any data loss or misuse</li>
            <li>
              We reserve the right to modify or discontinue the service at any
              time
            </li>
          </ul>

          <h3 className='text-lg font-semibold'>License</h3>
          <p>
            This project is open source and available under the MIT License.
          </p>

          <p className='text-sm text-muted-foreground'>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoSection;
