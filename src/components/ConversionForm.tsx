import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { isValidInput, parseInput } from '@/utils/jsonToDotNotation';
import { FileJson, RefreshCw } from 'lucide-react';
import React, { useState } from 'react';

interface ConversionFormProps {
  onConvert: (json: Record<string, any>) => void;
}

const ConversionForm: React.FC<ConversionFormProps> = ({ onConvert }) => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
  };

  const handleExampleClick = () => {
    const exampleInput = `export default {
      user: {
        name: "John",
        age: 30,
        address: {
          street: "123 Main St",
          city: "New York"
        }
      }
    } as const`;
    setJsonInput(exampleInput);
  };

  const handleClear = () => {
    setJsonInput('');
  };

  const handleConvert = () => {
    if (!jsonInput.trim()) {
      toast({
        title: 'Empty input',
        description: 'Please enter a JSON object or object literal to convert.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsLoading(true);
      setTimeout(() => {
        if (!isValidInput(jsonInput)) {
          toast({
            title: 'Invalid input',
            description: 'Please enter valid JSON or object literal syntax.',
            variant: 'destructive',
          });
          setIsLoading(false);
          return;
        }

        const parsedInput = parseInput(jsonInput);
        onConvert(parsedInput);
        toast({
          title: 'Success!',
          description: 'Input converted to dot notation format.',
        });
        setIsLoading(false);
      }, 500);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold'>Input Object</h2>
        <div className='space-x-2'>
          <Button variant='outline' size='sm' onClick={handleExampleClick}>
            Load Example
          </Button>
          <Button variant='outline' size='sm' onClick={handleClear}>
            Clear
          </Button>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute top-2 left-2'>
          <FileJson size={18} className='text-muted-foreground' />
        </div>
        <Textarea
          className='min-h-[300px] pl-8 font-mono text-sm resize-y bg-white border-converter-blue/20'
          placeholder='Paste your JSON object or object literal here...'
          value={jsonInput}
          onChange={handleInputChange}
        />
      </div>
      <Button
        className='w-full bg-converter-blue hover:bg-converter-blue-dark'
        onClick={handleConvert}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <RefreshCw className='mr-2 h-4 w-4 animate-spin' />
            Converting...
          </>
        ) : (
          'Convert to Dot Notation'
        )}
      </Button>
    </div>
  );
};

export default ConversionForm;
