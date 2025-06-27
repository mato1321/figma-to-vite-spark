
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Symptoms from "./pages/Symptoms";
import NotFound from "./pages/NotFound";
import NutritionSurvey from "./pages/NutritionSurvey";
import NutritionResult from "./pages/nutrition/NutritionResult";
import Question1 from "./pages/nutrition/Question1";
import Question2 from "./pages/nutrition/Question2";
import Question3 from "./pages/nutrition/Question3";
import Question4 from "./pages/nutrition/Question4";
import Question5 from "./pages/nutrition/Question5";
import Question48 from "./pages/nutrition/Question48";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
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
