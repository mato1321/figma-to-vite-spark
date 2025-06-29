
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ClipboardList } from "lucide-react";

const QuestionnaireStart = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/nutrition/question/1");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Healixir</h1>
          <p className="text-blue-600">基本資訊</p>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Link to="/nutrition/personal-info" className="inline-flex items-center text-gray-600 hover:text-gray-800">
                <ArrowLeft className="w-4 h-4 mr-1" />
                上一題
              </Link>
            </div>

            <div className="text-center space-y-6">
              <div className="text-lg font-medium text-gray-800">
                有無吃過保健食品?
              </div>
              
              <div className="flex justify-center space-x-8">
                <Button variant="outline" className="px-8 py-3 border-gray-300">
                  有
                </Button>
                <Button variant="outline" className="px-8 py-3 border-gray-300">
                  無
                </Button>
              </div>

              <div className="text-lg font-medium text-gray-800">
                您目前正在服用保健食品?
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="px-6 py-3 border-gray-300">
                  0
                </Button>
                <Button variant="outline" className="px-6 py-3 border-gray-300">
                  1-2
                </Button>
                <Button variant="outline" className="px-6 py-3 border-gray-300">
                  3-5
                </Button>
                <Button variant="outline" className="px-6 py-3 border-gray-300">
                  5+
                </Button>
              </div>

              <div className="text-lg font-medium text-gray-800">
                您服用保健食品的頻率是?
              </div>
              
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <Button variant="outline" className="px-4 py-3 border-gray-300">
                  沒有在吃
                </Button>
                <Button variant="outline" className="px-4 py-3 border-gray-300">
                  想到才吃
                </Button>
                <Button variant="outline" className="px-4 py-3 border-gray-300">
                  會吃但申請懶惰
                </Button>
                <Button variant="outline" className="px-4 py-3 border-gray-300">
                  幾乎每天服用
                </Button>
              </div>

              <div className="pt-8">
                <Button
                  onClick={handleStart}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
                >
                  開始問卷
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionnaireStart;
