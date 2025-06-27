import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  CreditCard, 
  MessageCircle, 
  Bot, 
  Users, 
  Star,
  LogOut,
  User,
  ShoppingCart,
  Stethoscope,
  Pill,
  Target
} from "lucide-react";

const Dashboard = () => {
  const [userName] = useState("使用者"); // 這裡之後可以從認證系統取得

  const features = [
    {
      title: "智慧推薦藥物",
      description: "根據症狀推薦適合的藥物",
      icon: Pill,
      color: "bg-blue-500",
      link: "/symptoms"
    },
    {
      title: "營養目標",
      description: "個人化營養建議問卷",
      icon: Target,
      color: "bg-green-500",
      link: "/nutrition"
    },
    {
      id: 2,
      title: "結帳系統（支援店到店刷卡）",
      description: "便利的付款方式，支援多種取貨選項",
      icon: CreditCard,
      color: "bg-blue-500",
      link: "/checkout"
    },
    {
      id: 3,
      title: "客服系統（有真人 + GPT 協助）",
      description: "24小時客服支援，真人與AI結合",
      icon: MessageCircle,
      color: "bg-purple-500",
      link: "/customer-service"
    },
    {
      id: 4,
      title: "LINE Bot 領藥提醒",
      description: "透過LINE提醒用藥時間",
      icon: Bot,
      color: "bg-green-600",
      link: "/line-bot"
    },
    {
      id: 5,
      title: "會員系統（含藥物評論）",
      description: "管理個人資料及藥品評論",
      icon: Users,
      color: "bg-orange-500",
      link: "/member"
    },
    {
      id: 6,
      title: "藥品評論平台",
      description: "查看藥品評價與使用心得",
      icon: Star,
      color: "bg-yellow-500",
      link: "/reviews"
    }
  ];

  const handleLogout = () => {
    // 這裡之後可以加入登出邏輯
    console.log("登出");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* 頂部導航 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">智慧藥局系統</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">歡迎，{userName}</span>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                個人資料
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                購物車
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                登出
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 主要內容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 歡迎區塊 */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">歡迎使用智慧藥局系統</h2>
          <p className="text-gray-600">選擇您需要的功能，我們提供完整的藥局服務體驗</p>
        </div>

        {/* 功能卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link key={feature.id} to={feature.link}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      開始使用
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* 快速統計 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">可用藥品</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">客服服務</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">滿意客戶</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">推薦準確率</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
