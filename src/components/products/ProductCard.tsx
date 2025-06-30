
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  type: "FLIGHT" | "HOTEL" | "TRANSFER" | "ACTIVITY" | "INSURANCE";
  price: number;
  currency: string;
  provider: string;
  image: string;
  rating: number;
  duration: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "FLIGHT": return "bg-blue-100 text-blue-800";
    case "HOTEL": return "bg-purple-100 text-purple-800";
    case "ACTIVITY": return "bg-green-100 text-green-800";
    case "TRANSFER": return "bg-orange-100 text-orange-800";
    case "INSURANCE": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-3 left-3 ${getTypeColor(product.type)}`}>
          {product.type}
        </Badge>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{product.provider}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{product.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            ${product.price}
            <span className="text-sm text-gray-500 font-normal"> {product.currency}</span>
          </div>
          <Button className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
