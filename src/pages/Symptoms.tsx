
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Thermometer, Heart, Zap, Brain } from "lucide-react";

const Symptoms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const symptomCategories = [
    {
      category: "感冒症狀",
      icon: Thermometer,
      color: "bg-red-500",
      symptoms: ["發燒", "咳嗽", "流鼻水", "喉嚨痛", "頭痛", "肌肉痠痛"]
    },
    {
      category: "腸胃症狀", 
      icon: Heart,
      color: "bg-orange-500",
      symptoms: ["胃痛", "腹瀉", "便秘", "噁心", "嘔吐", "消化不良"]
    },
    {
      category: "疼痛症狀",
      icon: Zap,
      color: "bg-yellow-500", 
      symptoms: ["頭痛", "肌肉痛", "關節痛", "背痛", "牙痛", "經痛"]
    },
    {
      category: "精神症狀",
      icon: Brain,
      color: "bg-purple-500",
      symptoms: ["失眠", "焦慮", "疲勞", "注意力不集中", "情緒低落", "壓力"]
    }
  ];

  const recommendedMedicines = [
    {
      name: "普拿疼",
      symptoms: ["頭痛", "發燒", "肌肉痠痛"],
      description: "有效緩解疼痛和退燒",
      price: "NT$ 180"
    },
    {
      name: "斯斯感冒膠囊",
      symptoms: ["咳嗽", "流鼻水", "喉嚨痛"],
      description: "綜合感冒症狀緩解",
      price: "NT$ 220"
    },
    {
      name: "胃散",
      symptoms: ["胃痛", "消化不良"],
      description: "中和胃酸，改善消化",
      price: "NT$ 150"
    }
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const getFilteredMedicines = () => {
    if (selectedSymptoms.length === 0) return [];
    return recommendedMedicines.filter(medicine =>
      medicine.symptoms.some(symptom => selectedSymptoms.includes(symptom))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 返回按鈕 */}
        <div className="mb-6">
          <Link to="/dashboard" className="inline-flex items-center text-green-600 hover:text-green-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回儀表板
          </Link>
        </div>

        {/* 頁面標題 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">症狀推薦藥物</h1>
          <p className="text-gray-600">選擇您的症狀，系統將為您推薦適合的藥物</p>
        </div>

        {/* 搜尋框 */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="搜尋症狀..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* 症狀分類 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {symptomCategories.map((category) => (
            <Card key={category.category} className="border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {category.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {category.symptoms.map((symptom) => (
                    <Button
                      key={symptom}
                      variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => toggleSymptom(symptom)}
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 已選擇的症狀 */}
        {selectedSymptoms.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>已選擇症狀</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {selectedSymptoms.map((symptom) => (
                  <Button
                    key={symptom}
                    variant="secondary"
                    size="sm"
                    onClick={() => toggleSymptom(symptom)}
                  >
                    {symptom} ×
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 推薦藥物 */}
        {getFilteredMedicines().length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">推薦藥物</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredMedicines().map((medicine) => (
                <Card key={medicine.name} className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl">{medicine.name}</CardTitle>
                    <CardDescription className="text-green-600 font-semibold">
                      {medicine.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{medicine.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">適用症狀：</p>
                      <div className="flex flex-wrap gap-1">
                        {medicine.symptoms.map((symptom) => (
                          <span 
                            key={symptom}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                          >
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      加入購物車
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Symptoms;
