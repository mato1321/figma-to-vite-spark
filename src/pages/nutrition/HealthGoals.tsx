
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HealthGoals = () => {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const healthGoals = [
    "消化道機能", "心情", "晶亮不怕3C", "入睡狀況",
    "精神體力", "循環系統問題", "養顏美容",
    "保護力", "骨骼及行動力", "私密保養",
    "不怕充滿誘惑", "運動保健", "上班族不憂鬱"
  ];

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal)
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleNext = () => {
    if (selectedGoals.length > 0) {
      navigate("/nutrition/start");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-6">
            <div className="mb-4">
              <Link to="/nutrition/personal-info" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                上一題
              </Link>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
              選擇您想保健的目標方向
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {healthGoals.map((goal) => (
                <Button
                  key={goal}
                  variant={selectedGoals.includes(goal) ? "default" : "outline"}
                  onClick={() => handleGoalToggle(goal)}
                  className={`h-12 text-sm font-medium transition-all duration-200 ${
                    selectedGoals.includes(goal)
                      ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                      : "bg-white hover:bg-blue-50 text-gray-700 border-gray-300"
                  }`}
                >
                  {goal}
                </Button>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleNext}
                disabled={selectedGoals.length === 0}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthGoals;
