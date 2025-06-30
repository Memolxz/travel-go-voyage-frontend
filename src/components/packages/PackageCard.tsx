
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Check } from "lucide-react";

interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  image: string;
  rating: number;
  includes: string[];
  destinations: string[];
  originalPrice?: number;
}

interface PackageCardProps {
  package: Package;
}

export const PackageCard = ({ package: pkg }: PackageCardProps) => {
  const discount = pkg.originalPrice ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-48 object-cover"
        />
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
            {discount}% OFF
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-md">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{pkg.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {pkg.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">
          {pkg.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{pkg.destinations.join(", ")}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">What's Included:</h4>
          <ul className="space-y-1">
            {pkg.includes.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="h-3 w-3 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
            {pkg.includes.length > 3 && (
              <li className="text-sm text-gray-500">
                +{pkg.includes.length - 3} more included
              </li>
            )}
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              ${pkg.price}
              <span className="text-sm text-gray-500 font-normal"> {pkg.currency}</span>
            </div>
            {pkg.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                ${pkg.originalPrice}
              </div>
            )}
          </div>
          <Button>
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
