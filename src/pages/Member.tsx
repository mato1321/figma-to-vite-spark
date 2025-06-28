
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  User,
  FileText,
  Package,
  Calendar,
  ShoppingCart,
  Download,
  Eye
} from "lucide-react";

const Member = () => {
  const mockAssessments = [
    {
      id: 1,
      date: "2024-06-20",
      type: "營養目標評估",
      status: "已完成",
      result: "個人化營養建議已生成"
    },
    {
      id: 2,
      date: "2024-05-15",
      type: "營養目標評估",
      status: "已完成",
      result: "個人化營養建議已生成"
    }
  ];

  const mockOrders = [
    {
      id: "ORD-2024-001",
      date: "2024-06-25",
      status: "已發貨",
      total: "NT$ 2,580",
      items: ["維他命D3膠囊 x2", "Omega-3魚油 x1"]
    },
    {
      id: "ORD-2024-002",
      date: "2024-06-10",
      status: "已完成",
      total: "NT$ 1,890",
      items: ["益生菌膠囊 x1", "維他命B群 x1"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頂部導航 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mr-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回主頁
              </Link>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Healixir</h1>
            </div>
          </div>
        </div>
      </header>

      {/* 主要內容 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">會員中心</h1>
          <p className="text-gray-600">管理您的健康評估紀錄和訂單資訊</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="profile" className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              個人資料
            </TabsTrigger>
            <TabsTrigger value="assessments" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              歷史評估
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center">
              <Package className="w-4 h-4 mr-2" />
              訂單資訊
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  基本資料
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                    <div className="p-2 bg-gray-50 rounded-md">張小華</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">電子郵件</label>
                    <div className="p-2 bg-gray-50 rounded-md">zhang@example.com</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">電話號碼</label>
                    <div className="p-2 bg-gray-50 rounded-md">0912-345-678</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">會員等級</label>
                    <div className="p-2 bg-blue-50 text-blue-700 rounded-md font-medium">一般會員</div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">編輯資料</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assessments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  健康評估紀錄
                </CardTitle>
                <CardDescription>
                  查看您的健康評估歷史紀錄和建議報告
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAssessments.map((assessment) => (
                    <Card key={assessment.id} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                              <span className="text-sm text-gray-500">{assessment.date}</span>
                              <span className="ml-4 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                {assessment.status}
                              </span>
                            </div>
                            <h3 className="font-medium text-gray-800 mb-1">{assessment.type}</h3>
                            <p className="text-sm text-gray-600">{assessment.result}</p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              查看
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-1" />
                              下載
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to="/nutrition">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <FileText className="w-4 h-4 mr-2" />
                      進行新的評估
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  訂單資訊
                </CardTitle>
                <CardDescription>
                  查看您的購買紀錄和訂單狀態
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <Card key={order.id} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="font-medium text-gray-800">訂單號碼: {order.id}</span>
                              <span className={`ml-4 px-2 py-1 text-xs rounded-full ${
                                order.status === '已完成' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="flex items-center mb-2">
                              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                              <span className="text-sm text-gray-500">{order.date}</span>
                            </div>
                            <div className="mb-2">
                              <p className="text-sm text-gray-600">商品：</p>
                              <ul className="text-sm text-gray-700 ml-4">
                                {order.items.map((item, index) => (
                                  <li key={index}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                            <p className="font-medium text-gray-800">總金額：{order.total}</p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              詳情
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to="/cart">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      前往購物車
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Member;
