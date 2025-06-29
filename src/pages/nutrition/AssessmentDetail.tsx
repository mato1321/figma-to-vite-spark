
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Download, Calendar, User, FileText } from "lucide-react";

const AssessmentDetail = () => {
  const { id } = useParams();

  const assessmentData = {
    date: "2024-06-20",
    type: "營養目標評估",
    status: "已完成",
    overallScore: 75,
    categories: [
      { name: "飲食", score: 85, color: "bg-green-500" },
      { name: "作息", score: 70, color: "bg-green-500" },
      { name: "心理", score: 60, color: "bg-yellow-500" },
      { name: "體質", score: 80, color: "bg-green-500" },
      { name: "運動", score: 65, color: "bg-yellow-500" }
    ],
    recommendations: [
      "建議增加維生素D的攝取",
      "保持規律的運動習慣",
      "注意睡眠品質的改善",
      "適當補充益生菌"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/member" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回會員中心
          </Link>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Healixir</h1>
          <p className="text-blue-600">健康評估詳細報告</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 基本資訊 */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                評估資訊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">評估日期</span>
                <span className="font-medium">{assessmentData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">評估類型</span>
                <span className="font-medium">{assessmentData.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">狀態</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  {assessmentData.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">總分</span>
                <span className="text-2xl font-bold text-blue-600">{assessmentData.overallScore}分</span>
              </div>
            </CardContent>
          </Card>

          {/* 分類評分 */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                各項目評分
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {assessmentData.categories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{category.name}</span>
                    <span className="font-medium">{category.score}分</span>
                  </div>
                  <Progress value={category.score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 建議事項 */}
        <Card className="bg-white/90 backdrop-blur-sm mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              個人化建議
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {assessmentData.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 操作按鈕 */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button variant="outline" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            下載報告
          </Button>
          <Link to="/nutrition">
            <Button className="bg-blue-600 hover:bg-blue-700">
              進행新的評估
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDetail;
