
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  MessageCircle,
  User,
  LogOut,
  AlertTriangle
} from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "維生素C 1000mg",
      image: "/placeholder.svg",
      specs: "90顆/瓶",
      price: 590,
      quantity: 2,
      isRecommended: true,
      reason: "提升免疫力",
      needsPharmacist: false
    },
    {
      id: 2,
      name: "魚油 Omega-3",
      image: "/placeholder.svg",
      specs: "120顆/瓶",
      price: 890,
      quantity: 1,
      isRecommended: true,
      reason: "心血管保健",
      needsPharmacist: true
    },
    {
      id: 3,
      name: "綜合維他命",
      image: "/placeholder.svg",
      specs: "60顆/瓶",
      price: 450,
      quantity: 1,
      isRecommended: false,
      reason: "",
      needsPharmacist: false
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [isLoggedIn] = useState(false);

  const recommendedProducts = [
    { id: 4, name: "鈣片 600mg", price: 380, image: "/placeholder.svg", reason: "骨骼健康" },
    { id: 5, name: "益生菌", price: 720, image: "/placeholder.svg", reason: "腸道健康" },
    { id: 6, name: "葉黃素", price: 680, image: "/placeholder.svg", reason: "眼部保健" }
  ];

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addRecommendedProduct = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, 1);
    } else {
      setCartItems([...cartItems, {
        ...product,
        specs: "60顆/瓶",
        quantity: 1,
        isRecommended: true,
        needsPharmacist: false
      }]);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 1000 ? 0 : 80;
  const discount = promoCode === "HEALTH10" ? Math.floor(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-white">
      {/* 頂部導航 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Healixir</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600">首頁</Link>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                個人資料
              </Button>
              <Link to="/nutrition" className="text-blue-600 hover:text-blue-800 font-medium">免費評估</Link>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  登入
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回按鈕 */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首頁
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 購物車主要內容 */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <ShoppingCart className="w-6 h-6 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-800">購物車</h1>
              <span className="ml-2 text-gray-500">({cartItems.length} 件商品)</span>
            </div>

            {/* 未登入提醒 */}
            {!isLoggedIn && (
              <Card className="mb-6 border-yellow-200 bg-yellow-50">
                <CardContent className="p-4">
                  <div className="flex items-center text-yellow-800">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    <span>建議您先登入以儲存購物車資料</span>
                    <Link to="/login" className="ml-2 text-blue-600 hover:text-blue-800 underline">
                      立即登入
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 商品清單 */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.specs}</p>
                            {item.isRecommended && (
                              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 mb-2">
                                💡 {item.reason}
                              </div>
                            )}
                            {item.needsPharmacist && (
                              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                                ⚠️ 需藥師確認
                              </div>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">NT$ {item.price}</p>
                            <p className="font-semibold text-gray-800">NT$ {item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 推薦商品 */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">📦 你可能也需要</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-20 object-cover rounded-lg bg-gray-100 mb-3"
                      />
                      <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                      <p className="text-xs text-blue-600 mb-2">💡 {product.reason}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">NT$ {product.price}</span>
                        <Button
                          size="sm"
                          onClick={() => addRecommendedProduct(product)}
                          className="text-xs"
                        >
                          加購
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 側邊欄 */}
          <div className="space-y-6">
            {/* 總金額 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">訂單摘要</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>商品小計</span>
                  <span>NT$ {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>運費</span>
                  <span>{shipping === 0 ? "免費" : `NT$ ${shipping}`}</span>
                </div>
                {subtotal < 1000 && (
                  <p className="text-xs text-gray-600">滿 NT$ 1,000 免運費</p>
                )}
                
                <Separator />
                
                <div className="space-y-2">
                  <Input
                    placeholder="輸入優惠碼"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>優惠折扣</span>
                      <span>-NT$ {discount}</span>
                    </div>
                  )}
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>總計</span>
                  <span>NT$ {total}</span>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  前往結帳
                </Button>
                
                <Link to="/nutrition">
                  <Button variant="outline" className="w-full">
                    重新瀏覽推薦
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 藥師諮詢 */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-800 mb-2">有疑問嗎？</h3>
                <p className="text-sm text-blue-700 mb-4">點此與藥師聊聊！</p>
                <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-100">
                  線上諮詢
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
