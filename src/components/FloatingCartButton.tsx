
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const FloatingCartButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Link to="/cart">
        <Button
          className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCartButton;
