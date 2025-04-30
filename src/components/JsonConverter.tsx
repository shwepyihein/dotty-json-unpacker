
import React, { useState } from 'react';
import ConversionForm from './ConversionForm';
import ResultDisplay from './ResultDisplay';
import { jsonToDotNotation, formatDotNotation } from '@/utils/jsonToDotNotation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import GoogleAdSense from './GoogleAdSense';

const JsonConverter: React.FC = () => {
  const [dotNotationText, setDotNotationText] = useState<string>('');

  const handleConvert = (json: Record<string, any>) => {
    const dotNotationObj = jsonToDotNotation(json);
    const formattedResult = formatDotNotation(dotNotationObj);
    setDotNotationText(formattedResult);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <Card className="border-converter-blue/20">
          <CardContent className="p-6">
            <ConversionForm onConvert={handleConvert} />
          </CardContent>
        </Card>
        
        <div className="flex flex-col">
          <div className="hidden md:flex justify-center items-center md:h-12">
            {dotNotationText && <ArrowRight className="text-converter-blue h-8 w-8" />}
          </div>
          
          {dotNotationText ? (
            <ResultDisplay dotNotationText={dotNotationText} />
          ) : (
            <Card className="border-converter-blue/20 h-full">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <p className="text-muted-foreground">Converted dot notation will appear here</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Banner Ad */}
      <div className="mt-8">
        <GoogleAdSense adSlot="1234567890" />
      </div>
    </div>
  );
};

export default JsonConverter;
