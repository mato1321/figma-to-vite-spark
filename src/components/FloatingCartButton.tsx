
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const FloatingCartButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Link to="/cart">
        <Button
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ShoppingCart className="w-8 h-8 text-white" />
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCartButton;
