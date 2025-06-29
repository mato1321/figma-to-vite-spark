
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ClipboardList, CheckCircle } from "lucide-react";

const QuestionnaireStart = () => {
  const navigate = useNavigate();
  const [hasUsedSupplements, setHasUsedSupplements] = useState<string>("");
  const [currentSupplementCount, setCurrentSupplementCount] = useState<string>("");
  const [supplementFrequency, setSupplementFrequency] = useState<string>("");

  const handleStart = () => {
    navigate("/nutrition/question/1");
  };

  const isFormComplete = hasUsedSupplements && currentSupplementCount && supplementFrequency;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Healixir</h1>
          <p className="text-blue-600 text-lg">準備開始健康評估</p>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
              即將開始問卷調查
            </CardTitle>
            <p className="text-gray-600 text-lg">
              接下來將進行48個問題的健康評估，這將幫助我們了解您的生活習慣和健康狀況
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="mb-8">
              <Link to="/nutrition/personal-info" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回修改基本資料
              </Link>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">問卷說明</h3>
              <div className="space-y-3 text-gray-700">
                <p>• 共48個問題，預計需要10-15分鐘</p>
                <p>• 請根據您的實際情況誠實作答</p>
                <p>• 可以隨時返回修改之前的答案</p>
                <p>• 完成後將獲得個人化的健康建議</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="text-lg font-medium text-gray-800 mb-6">
                在開始問卷前，讓我們先了解您的保健食品使用情況
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-medium text-gray-800 mb-4">
                    有無吃過保健食品？
                  </div>
                  <div className="flex justify-center space-x-6">
                    <Button 
                      variant={hasUsedSupplements === "有" ? "default" : "outline"} 
                      className="px-8 py-3"
                      onClick={() => setHasUsedSupplements("有")}
                    >
                      有
                    </Button>
                    <Button 
                      variant={hasUsedSupplements === "無" ? "default" : "outline"} 
                      className="px-8 py-3"
                      onClick={() => setHasUsedSupplements("無")}
                    >
                      無
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="text-lg font-medium text-gray-800 mb-4">
                    您目前正在服用保健食品？
                  </div>
                  <div className="flex justify-center space-x-4">
                    {["0", "1-2", "3-5", "5+"].map((count) => (
                      <Button 
                        key={count}
                        variant={currentSupplementCount === count ? "default" : "outline"} 
                        className="px-6 py-3"
                        onClick={() => setCurrentSupplementCount(count)}
                      >
                        {count}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-lg font-medium text-gray-800 mb-4">
                    您服用保健食品的頻率是？
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    {["沒有在吃", "想到才吃", "會吃但申請懶惰", "幾乎每天服用"].map((freq) => (
                      <Button 
                        key={freq}
                        variant={supplementFrequency === freq ? "default" : "outline"} 
                        className="px-4 py-3"
                        onClick={() => setSupplementFrequency(freq)}
                      >
                        {freq}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button
                  onClick={handleStart}
                  disabled={!isFormComplete}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <ClipboardList className="w-6 h-6 mr-3" />
                  開始問卷調查
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
