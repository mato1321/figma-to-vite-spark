import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingCart, 
  User, 
  LogOut,
  Heart,
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  ClipboardList,
  Pill
} from "lucide-react";
import ChatButton from "@/components/ChatButton";

const Dashboard = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Healixir</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">首頁</Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                個人資料
              </Button>
              <Button variant="ghost" size="sm">免費評估</Button>
              <Link to="/cart">
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  登入
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            為你的健康量身推薦的保健食品
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            透過科學化評估，找到最適合你的營養補充方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/nutrition">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                開始免費評估
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/symptoms">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                症狀推薦藥物
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            為什麼選择 Healixir？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-3">專業醫學背景</CardTitle>
              <CardDescription>
                由專業營養師和醫師團隊，根據最新醫學研究為您提供建議
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl mb-3">個人化評估</CardTitle>
              <CardDescription>
                透過詳細的健康問卷，了解您的獨特需求和生活習慣
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl mb-3">精選優質產品</CardTitle>
              <CardDescription>
                嚴選通過認證的保健品牌，確保產品品質和安全性
              </CardDescription>
            </Card>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            簡單三步驟，開始您的健康之旅
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">完成健康評估</h3>
              <p className="text-gray-600">回答48個精心設計的問題，讓我們了解您的健康狀況</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">獲得專屬建議</h3>
              <p className="text-gray-600">基於您的評估結果，為您推薦最適合的保健方案</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">開始健康生活</h3>
              <p className="text-gray-600">按照建議服用，定期追蹤，享受更健康的生活</p>
            </div>
          </div>
        </div>
      </div>

      <ChatButton />
    </div>
  );
};

export default Dashboard;
