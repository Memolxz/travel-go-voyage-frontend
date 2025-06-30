
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - in real app, this would come from API
  const products = [
    {
      id: 1,
      name: "Round Trip to Paris",
      type: "FLIGHT" as const,
      price: 899,
      currency: "USD",
      provider: "Air France",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      duration: "7h 30m",
      description: "Direct flight to Paris with premium airline service"
    },
    {
      id: 2,
      name: "Luxury Hotel Downtown",
      type: "HOTEL" as const,
      price: 250,
      currency: "USD",
      provider: "Marriott",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      duration: "per night",
      description: "5-star luxury hotel in the heart of the city"
    },
    {
      id: 3,
      name: "City Tour & Activities",
      type: "ACTIVITY" as const,
      price: 150,
      currency: "USD",
      provider: "Local Tours",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      duration: "6 hours",
      description: "Comprehensive city tour with local guide"
    },
    {
      id: 4,
      name: "Airport Transfer",
      type: "TRANSFER" as const,
      price: 45,
      currency: "USD",
      provider: "Premium Cars",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      rating: 4.6,
      duration: "45 min",
      description: "Comfortable airport transfer service"
    },
    {
      id: 5,
      name: "Travel Insurance",
      type: "INSURANCE" as const,
      price: 35,
      currency: "USD",
      provider: "SafeTravel",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      rating: 4.5,
      duration: "full trip",
      description: "Comprehensive travel insurance coverage"
    },
    {
      id: 6,
      name: "Beach Resort Cancun",
      type: "HOTEL" as const,
      price: 180,
      currency: "USD",
      provider: "Hilton",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      duration: "per night",
      description: "All-inclusive beach resort with ocean views"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Products</h1>
          <p className="text-lg text-gray-600">
            Discover amazing travel products and services for your next adventure
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && <ProductFilters />}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Products
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
