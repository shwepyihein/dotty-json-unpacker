import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import the new page component
import TermsOfService from './pages/TermsOfService'; // Import the new page component
import AboutUs from './pages/AboutUs'; // Import the new page component
import Footer from './components/Footer'; // Import the footer component

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Define the route for Privacy Policy */}
          <Route path="/terms" element={<TermsOfService />} /> {/* Define the route for Terms of Service */}
          <Route path="/about" element={<AboutUs />} /> {/* Define the route for About Us */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer /> {/* Include the footer component at the bottom of every page */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
