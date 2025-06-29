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
import Question21 from "./pages/nutrition/Question21";
import Question22 from "./pages/nutrition/Question22";
import Question23 from "./pages/nutrition/Question23";
import Question24 from "./pages/nutrition/Question24";
import Question25 from "./pages/nutrition/Question25";
import Question26 from "./pages/nutrition/Question26";
import Question27 from "./pages/nutrition/Question27";
import Question28 from "./pages/nutrition/Question28";
import Question29 from "./pages/nutrition/Question29";
import Question30 from "./pages/nutrition/Question30";
import Question31 from "./pages/nutrition/Question31";
import Question32 from "./pages/nutrition/Question32";
import Question33 from "./pages/nutrition/Question33";
import Question34 from "./pages/nutrition/Question34";
import Question35 from "./pages/nutrition/Question35";
import Question36 from "./pages/nutrition/Question36";
import Question37 from "./pages/nutrition/Question37";
import Question38 from "./pages/nutrition/Question38";
import Question39 from "./pages/nutrition/Question39";
import Question40 from "./pages/nutrition/Question40";
import Question41 from "./pages/nutrition/Question41";
import Question42 from "./pages/nutrition/Question42";
import Question43 from "./pages/nutrition/Question43";
import Question44 from "./pages/nutrition/Question44";
import Question45 from "./pages/nutrition/Question45";
import Question46 from "./pages/nutrition/Question46";
import Question47 from "./pages/nutrition/Question47";
import Question48 from "./pages/nutrition/Question48";
import Cart from "./pages/Cart";
import Member from "./pages/Member";
import PersonalInfo from "./pages/nutrition/PersonalInfo";
import QuestionnaireStart from "./pages/nutrition/QuestionnaireStart";
import AnalysisResult from "./pages/nutrition/AnalysisResult";
import RecommendationReport from "./pages/nutrition/RecommendationReport";

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
          <Route path="/member" element={<Member />} />
          <Route path="/nutrition" element={<NutritionSurvey />} />
          <Route path="/nutrition/personal-info" element={<PersonalInfo />} />
          <Route path="/nutrition/start" element={<QuestionnaireStart />} />
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
          <Route path="/nutrition/question/21" element={<Question21 />} />
          <Route path="/nutrition/question/22" element={<Question22 />} />
          <Route path="/nutrition/question/23" element={<Question23 />} />
          <Route path="/nutrition/question/24" element={<Question24 />} />
          <Route path="/nutrition/question/25" element={<Question25 />} />
          <Route path="/nutrition/question/26" element={<Question26 />} />
          <Route path="/nutrition/question/27" element={<Question27 />} />
          <Route path="/nutrition/question/28" element={<Question28 />} />
          <Route path="/nutrition/question/29" element={<Question29 />} />
          <Route path="/nutrition/question/30" element={<Question30 />} />
          <Route path="/nutrition/question/31" element={<Question31 />} />
          <Route path="/nutrition/question/32" element={<Question32 />} />
          <Route path="/nutrition/question/33" element={<Question33 />} />
          <Route path="/nutrition/question/34" element={<Question34 />} />
          <Route path="/nutrition/question/35" element={<Question35 />} />
          <Route path="/nutrition/question/36" element={<Question36 />} />
          <Route path="/nutrition/question/37" element={<Question37 />} />
          <Route path="/nutrition/question/38" element={<Question38 />} />
          <Route path="/nutrition/question/39" element={<Question39 />} />
          <Route path="/nutrition/question/40" element={<Question40 />} />
          <Route path="/nutrition/question/41" element={<Question41 />} />
          <Route path="/nutrition/question/42" element={<Question42 />} />
          <Route path="/nutrition/question/43" element={<Question43 />} />
          <Route path="/nutrition/question/44" element={<Question44 />} />
          <Route path="/nutrition/question/45" element={<Question45 />} />
          <Route path="/nutrition/question/46" element={<Question46 />} />
          <Route path="/nutrition/question/47" element={<Question47 />} />
          <Route path="/nutrition/question/48" element={<Question48 />} />
          <Route path="/nutrition/analysis" element={<AnalysisResult />} />
          <Route path="/nutrition/recommendations" element={<RecommendationReport />} />
          <Route path="/nutrition/result" element={<NutritionResult />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
