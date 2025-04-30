
import React, { useState } from 'react';
import ConversionForm from './ConversionForm';
import ResultDisplay from './ResultDisplay';
import { jsonToDotNotation, formatDotNotation } from '@/utils/jsonToDotNotation';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowDown } from 'lucide-react';

const JsonConverter: React.FC = () => {
  const [dotNotationText, setDotNotationText] = useState<string>('');

  const handleConvert = (json: Record<string, any>) => {
    const dotNotationObj = jsonToDotNotation(json);
    const formattedResult = formatDotNotation(dotNotationObj);
    setDotNotationText(formattedResult);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-6 animate-fade-in">
      <Card className="border-converter-blue/20">
        <CardContent className="p-6">
          <ConversionForm onConvert={handleConvert} />
        </CardContent>
      </Card>
      
      {dotNotationText && (
        <>
          <div className="flex justify-center">
            <ArrowDown className="text-converter-blue h-8 w-8" />
          </div>
          <ResultDisplay dotNotationText={dotNotationText} />
        </>
      )}
    </div>
  );
};

export default JsonConverter;
