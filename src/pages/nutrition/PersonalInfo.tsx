
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    height: "",
    weight: "",
    occupation: "學生"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.gender && formData.birthYear && formData.birthMonth && formData.birthDay && formData.height && formData.weight) {
      navigate("/nutrition/start");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.gender && formData.birthYear && formData.birthMonth && formData.birthDay && formData.height && formData.weight;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Healixir</h1>
          <p className="text-blue-600">基本資訊</p>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">基本資訊</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 性別 */}
              <div className="space-y-3">
                <Label className="text-lg font-medium">生理性別</Label>
                <RadioGroup 
                  value={formData.gender} 
                  onValueChange={(value) => handleInputChange("gender", value)}
                  className="flex justify-center space-x-8"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="男" id="male" />
                    <Label htmlFor="male">男</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="女" id="female" />
                    <Label htmlFor="female">女</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* 出生年月日 */}
              <div className="space-y-3">
                <Label className="text-lg font-medium">出生年月日</Label>
                <div className="flex space-x-2 justify-center items-center">
                  <div className="flex items-center space-x-2">
                    <Input 
                      type="number" 
                      placeholder="2004" 
                      value={formData.birthYear}
                      onChange={(e) => handleInputChange("birthYear", e.target.value)}
                      className="w-20 text-center"
                      min="1900"
                      max="2024"
                    />
                    <span>年</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input 
                      type="number" 
                      placeholder="5" 
                      value={formData.birthMonth}
                      onChange={(e) => handleInputChange("birthMonth", e.target.value)}
                      className="w-16 text-center"
                      min="1"
                      max="12"
                    />
                    <span>月</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input 
                      type="number" 
                      placeholder="7" 
                      value={formData.birthDay}
                      onChange={(e) => handleInputChange("birthDay", e.target.value)}
                      className="w-16 text-center"
                      min="1"
                      max="31"
                    />
                    <span>日</span>
                  </div>
                  <span className="text-gray-400 text-sm ml-4">年齡 21歲</span>
                </div>
              </div>

              {/* 身高 */}
              <div className="space-y-3">
                <Label className="text-lg font-medium">身高</Label>
                <div className="flex justify-center items-center space-x-2">
                  <Input 
                    type="number" 
                    placeholder="163" 
                    value={formData.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                    className="w-24 text-center"
                  />
                  <span>公分</span>
                </div>
              </div>

              {/* 體重 */}
              <div className="space-y-3">
                <Label className="text-lg font-medium">體重</Label>
                <div className="flex justify-center items-center space-x-2">
                  <Input 
                    type="number" 
                    placeholder="54" 
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    className="w-24 text-center"
                  />
                  <span>公斤</span>
                </div>
              </div>

              {/* 職業 */}
              <div className="space-y-3">
                <Label className="text-lg font-medium">職業</Label>
                <div className="flex justify-center">
                  <Button
                    type="button"
                    variant="outline"
                    className="px-8 py-2 bg-blue-100 border-blue-200 text-blue-700"
                  >
                    學生
                  </Button>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-8 py-3 rounded-full"
                >
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
