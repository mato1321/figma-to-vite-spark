
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ShoppingCart, Plus, Minus, Trash2, MessageCircle, AlertCircle, Lightbulb } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "維生素C膠囊",
      image: "/placeholder.svg",
      specification: "1000mg • 60粒裝",
      price: 680,
      quantity: 2,
      recommended: true,
      reason: "提升免疫力",
      needsConsultation: false,
      inStock: true
    },
    {
      id: 2,
      name: "益生菌膠囊",
      image: "/placeholder.svg",
      specification: "100億CFU • 30粒裝",
      price: 1200,
      quantity: 1,
      recommended: true,
      reason: "改善腸道健康",
      needsConsultation: true,
      inStock: true
    },
    {
      id: 3,
      name: "魚油軟膠囊",
      image: "/placeholder.svg",
      specification: "1000mg • 90粒裝",
      price: 890,
      quantity: 1,
      recommended: false,
      reason: "",
      needsConsultation: false,
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);

  const recommendedProducts = [
    {
      id: 4,
      name: "葉黃素膠囊",
      price: 750,
      image: "/placeholder.svg",
      reason: "護眼保健"
    },
    {
      id: 5,
      name: "鈣片",
      price: 450,
      image: "/placeholder.svg", 
      reason: "骨骼健康"
    }
  ];

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const addRecommendedProduct = (product: any) => {
    const newItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      specification: "標準規格",
      price: product.price,
      quantity: 1,
      recommended: true,
      reason: product.reason,
      needsConsultation: false,
      inStock: true
    };
    setCartItems(prev => [...prev, newItem]);
  };

  const applyPromoCode = () => {
    if (promoCode === "HEALTH10") {
      setPromoDiscount(0.1);
    } else if (promoCode === "NEWBIE20") {
      setPromoDiscount(0.2);
    } else {
      setPromoDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 1000 ? 0 : 120;
  const discount = subtotal * promoDiscount;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 標題區 */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回頁面
              </Link>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">購物車</CardTitle>
              <CardDescription className="text-gray-600">
                檢視您的商品並進行結帳
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 商品清單區 */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className={`${!item.inStock ? 'opacity-60' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.specification}</p>
                          {item.recommended && (
                            <div className="flex items-center mt-1">
                              <Lightbulb className="w-3 h-3 text-yellow-500 mr-1" />
                              <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                                推薦原因：{item.reason}
                              </span>
                            </div>
                          )}
                          {item.needsConsultation && (
                            <div className="flex items-center mt-1">
                              <AlertCircle className="w-3 h-3 text-orange-500 mr-1" />
                              <span className="text-xs text-orange-600">需要藥師確認</span>
                            </div>
                          )}
                          {!item.inStock && (
                            <div className="flex items-center mt-1">
                              <AlertCircle className="w-3 h-3 text-red-500 mr-1" />
                              <span className="text-xs text-red-600">庫存不足</span>
                            </div>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={!item.inStock}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={!item.inStock}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">NT$ {item.price}</p>
                          <p className="font-semibold">NT$ {item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {cartItems.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">購物車是空的</p>
                  <Link to="/">
                    <Button className="mt-4">繼續購物</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          {/* 右側區域 */}
          <div className="space-y-6">
            {/* 總金額區 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">訂單摘要</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>商品小計</span>
                    <span>NT$ {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>運費 {subtotal >= 1000 ? '(滿千免運)' : ''}</span>
                    <span>NT$ {shipping}</span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>優惠折扣</span>
                      <span>-NT$ {Math.round(discount)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>總計</span>
                    <span>NT$ {Math.round(total)}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="輸入優惠碼"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyPromoCode}>
                      套用
                    </Button>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    前往結帳
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 藥師諮詢入口 */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 mb-1">有疑問嗎？</h3>
                  <p className="text-sm text-green-700 mb-3">點此與藥師聊聊！</p>
                  <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-100">
                    線上諮詢
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 推薦延伸商品區 */}
            {recommendedProducts.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">你可能也需要</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recommendedProducts.map((product) => (
                      <div key={product.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded bg-gray-100"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{product.name}</h4>
                          <div className="flex items-center">
                            <Lightbulb className="w-3 h-3 text-yellow-500 mr-1" />
                            <span className="text-xs text-gray-600">{product.reason}</span>
                          </div>
                          <p className="text-sm font-semibold text-blue-600">NT$ {product.price}</p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => addRecommendedProduct(product)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          加購
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
