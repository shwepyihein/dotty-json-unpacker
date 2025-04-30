
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { CopyIcon, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ResultDisplayProps {
  dotNotationText: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ dotNotationText }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      navigator.clipboard.writeText(dotNotationText);
      toast({
        title: "Copied to clipboard",
        description: "The dot notation has been copied to your clipboard.",
      });
    }
  };

  return (
    <Card className="w-full border-converter-blue/20">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Dot Notation Result</h2>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex gap-1 items-center"
            onClick={handleCopy}
          >
            <CopyIcon className="h-4 w-4" />
            Copy
          </Button>
        </div>
        <div className="relative">
          <div className="absolute top-2 left-2">
            <Code2 size={18} className="text-muted-foreground" />
          </div>
          <Textarea
            ref={textareaRef}
            className="min-h-[200px] pl-8 font-mono text-sm resize-y bg-converter-blue-light/50 border-converter-blue/20"
            value={dotNotationText}
            readOnly
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultDisplay;
