
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Package, Calendar, CreditCard, Truck } from "lucide-react";

const OrderDetail = () => {
  const { id } = useParams();

  const orderData = {
    id: "ORD-2024-001",
    date: "2024-06-25",
    status: "已發貨",
    total: 2580,
    shipping: 0,
    items: [
      {
        name: "維他命D3膠囊",
        image: "/placeholder.svg",
        specs: "90顆/瓶",
        price: 890,
        quantity: 2
      },
      {
        name: "Omega-3魚油",
        image: "/placeholder.svg",
        specs: "120顆/瓶",
        price: 800,
        quantity: 1
      }
    ],
    trackingNumber: "TW1234567890",
    estimatedDelivery: "2024-06-28"
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
          <p className="text-blue-600">訂單詳細資訊</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 訂單資訊 */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2 text-blue-600" />
                  訂單資訊
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">訂單編號</p>
                    <p className="font-medium">{orderData.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">訂單狀態</p>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {orderData.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">下單日期</p>
                    <p className="font-medium">{orderData.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">預計到貨</p>
                    <p className="font-medium">{orderData.estimatedDelivery}</p>
                  </div>
                </div>
                
                {orderData.trackingNumber && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-600 font-medium">物流追蹤號碼</p>
                        <p className="text-blue-800 font-mono">{orderData.trackingNumber}</p>
                      </div>
                      <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 商品清單 */}
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>商品清單</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.specs}</p>
                        <p className="text-sm text-gray-600">數量: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">NT$ {item.price}</p>
                        <p className="text-sm text-gray-600">小計: NT$ {item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 付款摘要 */}
          <div>
            <Card className="bg-white/90 backdrop-blur-sm sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  付款摘要
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">商品小計</span>
                    <span>NT$ {orderData.total - orderData.shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">運費</span>
                    <span>{orderData.shipping === 0 ? "免費" : `NT$ ${orderData.shipping}`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>總計</span>
                    <span>NT$ {orderData.total}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    追蹤物流
                  </Button>
                  <Button variant="outline" className="w-full">
                    聯絡客服
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
