
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/packages/PackageCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const Packages = () => {
  // Mock data - in real app, this would come from API
  const packages = [
    {
      id: 1,
      name: "Paris Romance Package",
      description: "7-day romantic getaway to the City of Light",
      price: 2499,
      currency: "USD",
      duration: "7 days",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      includes: ["Round-trip flights", "5-star hotel", "Daily breakfast", "Seine river cruise", "Eiffel Tower dinner"],
      destinations: ["Paris"],
      originalPrice: 3199
    },
    {
      id: 2,
      name: "Mediterranean Adventure",
      description: "Explore the stunning Mediterranean coastline",
      price: 3299,
      currency: "USD",
      duration: "10 days",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      includes: ["Flights", "Hotels", "Island hopping", "Guided tours", "All transfers"],
      destinations: ["Greece", "Italy", "Spain"],
      originalPrice: 4199
    },
    {
      id: 3,
      name: "Tokyo Culture Experience",
      description: "Immerse yourself in Japanese culture and cuisine",
      price: 2799,
      currency: "USD",
      duration: "8 days",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      includes: ["Flights", "Traditional ryokan", "Sushi making class", "Temple visits", "Bullet train pass"],
      destinations: ["Tokyo", "Kyoto", "Osaka"],
      originalPrice: 3499
    },
    {
      id: 4,
      name: "African Safari Adventure",
      description: "Wildlife safari in the heart of Africa",
      price: 4299,
      currency: "USD",
      duration: "12 days",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      includes: ["Flights", "Safari lodges", "Game drives", "Professional guide", "All meals"],
      destinations: ["Kenya", "Tanzania"],
      originalPrice: 5299
    },
    {
      id: 5,
      name: "Tropical Paradise Escape",
      description: "Relax in beautiful tropical destinations",
      price: 1999,
      currency: "USD",
      duration: "6 days",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      includes: ["Flights", "Beach resort", "Water activities", "Spa treatments", "Island tours"],
      destinations: ["Maldives"],
      originalPrice: 2799
    },
    {
      id: 6,
      name: "European Grand Tour",
      description: "Classic European cities in one amazing journey",
      price: 3799,
      currency: "USD",
      duration: "14 days",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
      rating: 4.6,
      includes: ["Flights", "Hotels", "Train passes", "Guided tours", "Museum entries"],
      destinations: ["London", "Paris", "Rome", "Barcelona"],
      originalPrice: 4999
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Packages</h1>
          <p className="text-lg text-gray-600">
            Discover our carefully curated travel packages for unforgettable experiences
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search packages by destination..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter Packages
            </Button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Packages
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;
