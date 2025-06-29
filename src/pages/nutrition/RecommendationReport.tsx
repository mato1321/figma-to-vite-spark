
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, User } from "lucide-react";

const RecommendationReport = () => {
  const recommendations = [
    {
      category: "飲食方面",
      title: "建議：",
      content: "您已有不錯的飲食習慣，建議請持續三餐均衡飲食，多重補充天然蔬果攝取營養，並避免過多的快餐與高油加工食品。"
    },
    {
      category: "心理方面",
      title: "建議：",
      content: "心理壓力較敏，建議定期進行放鬆練習，如冥想、深呼吸、寫日記，或尋找讓您放心交流。若持力過期朋友幫您緩解，也可考慮尋求專業心理。"
    },
    {
      category: "作息方面",
      title: "建議：",
      content: "作息健潔通度好，請維持規律的作息時間，每晚獲得充足的7-9小時，並盡量在晚上11點前入睡，幫助身體修復優異代謝。"
    },
    {
      category: "體質方面",
      title: "建議：",
      content: "整體體質維持良好，請繼續持續均衡的營養攝取與適度運動，如每週進行至少3次的有氧度運動，有助於提升免疫力與體型功能。"
    },
    {
      category: "運動方面",
      title: "建議：",
      content: "運動這明顯不足，建議每週每天10-15分鐘的基礎運動開始，逐步增加強度。可以選擇快走、瑜伽、健身等您喜愛的運動，循序漸進增進身體健康和精力。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Healixir</h1>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-800 text-center">
              給您的小建議
            </CardTitle>
            <p className="text-center text-gray-600 mt-2">
              改善問題從生活著手......
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-blue-700">{rec.category}，{rec.title}</span>
                      <p className="text-gray-700 mt-1 leading-relaxed">{rec.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-100 rounded-lg">
              <p className="text-center text-blue-800 font-medium mb-2">
                如果生活的改變對您來說十分困難，沒關係！我們懂你的難處！！！
              </p>
              <p className="text-center text-blue-700">
                下面推薦您的這些保健食品也能夠改善您的問題！
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Link to="/" className="flex-1 max-w-xs">
                <Button variant="outline" className="w-full py-3">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回主頁
                </Button>
              </Link>
              <Link to="/member" className="flex-1 max-w-xs">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <FileText className="w-4 h-4 mr-2" />
                  查看歷史評估
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecommendationReport;
