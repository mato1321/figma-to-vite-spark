
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
import Question6 from "./pages/nutrition/Question6";
import Question7 from "./pages/nutrition/Question7";
import Question8 from "./pages/nutrition/Question8";
import Question9 from "./pages/nutrition/Question9";
import Question10 from "./pages/nutrition/Question10";
import Question11 from "./pages/nutrition/Question11";
import Question12 from "./pages/nutrition/Question12";
import Question13 from "./pages/nutrition/Question13";
import Question14 from "./pages/nutrition/Question14";
import Question15 from "./pages/nutrition/Question15";
import Question16 from "./pages/nutrition/Question16";
import Question17 from "./pages/nutrition/Question17";
import Question18 from "./pages/nutrition/Question18";
import Question19 from "./pages/nutrition/Question19";
import Question20 from "./pages/nutrition/Question20";
import Question48 from "./pages/nutrition/Question48";
import Cart from "./pages/Cart";

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
          <Route path="/nutrition/question/6" element={<Question6 />} />
          <Route path="/nutrition/question/7" element={<Question7 />} />
          <Route path="/nutrition/question/8" element={<Question8 />} />
          <Route path="/nutrition/question/9" element={<Question9 />} />
          <Route path="/nutrition/question/10" element={<Question10 />} />
          <Route path="/nutrition/question/11" element={<Question11 />} />
          <Route path="/nutrition/question/12" element={<Question12 />} />
          <Route path="/nutrition/question/13" element={<Question13 />} />
          <Route path="/nutrition/question/14" element={<Question14 />} />
          <Route path="/nutrition/question/15" element={<Question15 />} />
          <Route path="/nutrition/question/16" element={<Question16 />} />
          <Route path="/nutrition/question/17" element={<Question17 />} />
          <Route path="/nutrition/question/18" element={<Question18 />} />
          <Route path="/nutrition/question/19" element={<Question19 />} />
          <Route path="/nutrition/question/20" element={<Question20 />} />
          <Route path="/nutrition/question/48" element={<Question48 />} />
          <Route path="/nutrition/result" element={<NutritionResult />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
