
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AnalysisResult = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/nutrition/recommendations");
  };

  const analysisData = [
    { category: "飲食", score: 70, color: "bg-green-500" },
    { category: "作息", score: 85, color: "bg-green-500" },
    { category: "心理", score: 25, color: "bg-red-500" },
    { category: "體質", score: 58, color: "bg-yellow-500" },
    { category: "運動", score: 9, color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Healixir</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 綜合分析結果 */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex justify-between items-center">
                綜合分析結果
                <span className="text-2xl font-bold">60分</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {analysisData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{item.category}</span>
                    <span className="font-medium">{item.score}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${item.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </CardContent>
          </Card>

          {/* 綜合分析說明 */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">綜合分析說明</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-gray-700">
                <p className="mb-4">您的綜合健康平均過</p>
                <p className="text-red-500 font-medium mb-2">59%的同齡人</p>
                <p className="mb-4">您的身體質量指數為</p>
                <p className="mb-2">
                  <span className="font-bold">21.1kg/m²</span>，屬於正常範圍，
                </p>
                <p className="mb-6">
                  <span className="text-red-500">心理和運動</span>方面較為不足!!
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-lg">BMI: 21.1</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      正常
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link to="/contact">
            <Button variant="outline" className="flex items-center space-x-2 px-6 py-3">
              <MessageCircle className="w-5 h-5" />
              <span>聯絡我們</span>
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-blue-800 font-medium">繼續查看建議</span>
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
