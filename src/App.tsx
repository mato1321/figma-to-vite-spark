
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Symptoms from "./pages/Symptoms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/nutrition" element={<NutritionSurvey />} />
          <Route path="/nutrition/question/1" element={<Question1 />} />
          <Route path="/nutrition/question/2" element={<Question2 />} />
          <Route path="/nutrition/question/3" element={<Question3 />} />
          <Route path="/nutrition/question/4" element={<Question4 />} />
          <Route path="/nutrition/question/5" element={<Question5 />} />
          <Route path="/nutrition/question/48" element={<Question48 />} />
          <Route path="/nutrition/result" element={<NutritionResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
