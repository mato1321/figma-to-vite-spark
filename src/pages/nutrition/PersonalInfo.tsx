
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    height: "",
    weight: "",
    occupation: ""
  });

  const professions = [
    "學生", "工程師", "醫師", "護理師", "教師", "律師", "會計師", "設計師",
    "銷售人員", "行政人員", "經理", "主管", "服務業", "製造業", "金融業",
    "媒體業", "藝術工作者", "自由業", "退休", "家管", "其他"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.gender && formData.birthYear && formData.birthMonth && formData.birthDay && formData.height && formData.weight && formData.occupation) {
      navigate("/nutrition/start");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateAge = () => {
    if (formData.birthYear && formData.birthMonth && formData.birthDay) {
      const today = new Date();
      const birthDate = new Date(parseInt(formData.birthYear), parseInt(formData.birthMonth) - 1, parseInt(formData.birthDay));
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    return null;
  };

  const isFormValid = formData.gender && formData.birthYear && formData.birthMonth && formData.birthDay && formData.height && formData.weight && formData.occupation;
  const age = calculateAge();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Healixir</h1>
          <p className="text-blue-600 text-lg">開始您的健康評估旅程</p>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800">填寫基本資訊</CardTitle>
            <p className="text-gray-600 mt-2">請提供您的基本資料，這將幫助我們為您提供更精準的健康建議</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 性別 */}
              <div className="space-y-4 text-center">
                <Label className="text-lg font-semibold text-gray-700">生理性別</Label>
                <RadioGroup 
                  value={formData.gender} 
                  onValueChange={(value) => handleInputChange("gender", value)}
                  className="flex justify-center space-x-12"
                >
                  <div className="flex items-center space-x-3 p-4 border-2 border-transparent rounded-lg hover:border-blue-200 transition-colors">
                    <RadioGroupItem value="男" id="male" className="w-5 h-5" />
                    <Label htmlFor="male" className="text-base cursor-pointer">男性</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border-2 border-transparent rounded-lg hover:border-blue-200 transition-colors">
                    <RadioGroupItem value="女" id="female" className="w-5 h-5" />
                    <Label htmlFor="female" className="text-base cursor-pointer">女性</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* 出生年月日 */}
              <div className="space-y-4 text-center">
                <Label className="text-lg font-semibold text-gray-700">出生年月日</Label>
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Input 
                      type="number" 
                      placeholder="1995" 
                      value={formData.birthYear}
                      onChange={(e) => handleInputChange("birthYear", e.target.value)}
                      className="w-24 text-center text-lg"
                      min="1920"
                      max="2024"
                    />
                    <span className="text-gray-600">年</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input 
                      type="number" 
                      placeholder="5" 
                      value={formData.birthMonth}
                      onChange={(e) => handleInputChange("birthMonth", e.target.value)}
                      className="w-20 text-center text-lg"
                      min="1"
                      max="12"
                    />
                    <span className="text-gray-600">月</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input 
                      type="number" 
                      placeholder="15" 
                      value={formData.birthDay}
                      onChange={(e) => handleInputChange("birthDay", e.target.value)}
                      className="w-20 text-center text-lg"
                      min="1"
                      max="31"
                    />
                    <span className="text-gray-600">日</span>
                  </div>
                  {age && (
                    <span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      年齡 {age} 歲
                    </span>
                  )}
                </div>
              </div>

              {/* 身高體重 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4 text-center">
                  <Label className="text-lg font-semibold text-gray-700">身高</Label>
                  <div className="flex justify-center items-center space-x-3">
                    <Input 
                      type="number" 
                      placeholder="170" 
                      value={formData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      className="w-28 text-center text-lg"
                      min="100"
                      max="250"
                    />
                    <span className="text-gray-600">公分</span>
                  </div>
                </div>

                <div className="space-y-4 text-center">
                  <Label className="text-lg font-semibold text-gray-700">體重</Label>
                  <div className="flex justify-center items-center space-x-3">
                    <Input 
                      type="number" 
                      placeholder="65" 
                      value={formData.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                      className="w-28 text-center text-lg"
                      min="30"
                      max="200"
                    />
                    <span className="text-gray-600">公斤</span>
                  </div>
                </div>
              </div>

              {/* 職業 */}
              <div className="space-y-4 text-center">
                <Label className="text-lg font-semibold text-gray-700">職業</Label>
                <div className="flex justify-center">
                  <Select value={formData.occupation} onValueChange={(value) => handleInputChange("occupation", value)}>
                    <SelectTrigger className="w-48 text-center">
                      <SelectValue placeholder="請選擇職業" />
                    </SelectTrigger>
                    <SelectContent>
                      {professions.map((profession) => (
                        <SelectItem key={profession} value={profession}>
                          {profession}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <span className="mr-2">繼續</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalInfo;
