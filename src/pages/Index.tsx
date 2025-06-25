
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">歡迎</CardTitle>
          <CardDescription className="text-gray-600">
            選擇您要進行的操作
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link to="/login" className="block">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              登入
            </Button>
          </Link>
          <Link to="/register" className="block">
            <Button variant="outline" className="w-full">
              註冊新帳戶
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
