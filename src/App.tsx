import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <SpeedInsights />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
