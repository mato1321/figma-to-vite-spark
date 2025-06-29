import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingCartButton from "@/components/FloatingCartButton";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Healixir</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">功能</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">使用者回饋</a>
              <Link to="/symptoms" className="text-gray-600 hover:text-blue-600 transition-colors">症狀檢索</Link>
              <Link to="/member" className="text-gray-600 hover:text-blue-600 transition-colors">會員</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm">登入</Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">註冊</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            個人化營養
            <span className="text-green-600">健康評估</span>
          </h1>
          <p className="text-xl text-blue-700 mb-10 max-w-3xl mx-auto">
            透過科學化的問卷評估，為您量身打造專屬的營養建議和保健方案，讓健康管理變得更簡單、更有效
          </p>
          <Link to="/nutrition">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-16 py-6 text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🎯 立即免費評估
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">主要功能</h2>
            <p className="text-xl text-blue-700">探索 Healixir 如何幫助您改善健康</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-5xl text-green-600 mb-4">🌱</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">個人化營養建議</h3>
                <p className="text-gray-700">
                  根據您的健康狀況和生活習慣，提供客製化的飲食和營養補充建議
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-5xl text-blue-600 mb-4">📊</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">健康數據追蹤</h3>
                <p className="text-gray-700">
                  記錄您的健康數據，追蹤改善進度，讓您更了解自己的身體狀況
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-5xl text-pink-600 mb-4">🧑‍⚕️</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">專業藥師諮詢</h3>
                <p className="text-gray-700">
                  隨時與專業藥師聯繫，解答您的健康疑問，提供更全面的健康支持
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">使用者真實回饋</h2>
            <p className="text-xl text-blue-700">看看其他人如何透過 Healixir 改善健康</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">李小姐</h4>
                    <p className="text-sm text-gray-600">28歲，上班族</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "使用 Healixir 三個月後，我的睡眠品質明顯改善，工作效率也提升了很多！"
                </p>
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">陳先生</h4>
                    <p className="text-sm text-gray-600">35歲，工程師</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "個人化的營養建議讓我找到了適合自己的保健方式，身體狀況比以前好太多了！"
                </p>
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👵</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">王太太</h4>
                    <p className="text-sm text-gray-600">52歲，家庭主婦</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "專業的健康評估報告讓我更了解自己的身體需求，現在全家人都在使用！"
                </p>
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">開始您的健康之旅</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            只需要 10 分鐘完成評估，就能獲得專屬於您的健康建議報告
          </p>
          <Link to="/nutrition">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-16 py-6 text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 立即開始評估
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold mb-2">Healixir</p>
              <p className="text-gray-300">
                關心您的健康，從 Healixir 開始。
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                © {new Date().getFullYear()} Healixir. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCartButton />
    </div>
  );
};

export default Dashboard;
