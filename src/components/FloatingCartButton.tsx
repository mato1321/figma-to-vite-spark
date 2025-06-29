
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const FloatingCartButton = () => {
  return (
    <Link to="/cart">
      <Button
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        size="icon"
      >
        <ShoppingCart className="w-6 h-6" />
      </Button>
    </Link>
  );
};

export default FloatingCartButton;
