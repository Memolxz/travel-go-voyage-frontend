
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { OrderCard } from "@/components/orders/OrderCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const Orders = () => {
  // Mock data - in real app, this would come from API
  const orders = [
    {
      id: 1,
      orderNumber: "TG-2024-001",
      status: "CONFIRMED" as const,
      totalAmount: 2499,
      currency: "USD",
      createdAt: "2024-01-15T10:30:00Z",
      items: [
        { id: 1, name: "Paris Romance Package", quantity: 1, price: 2499 }
      ]
    },
    {
      id: 2,
      orderNumber: "TG-2024-002",
      status: "PENDING" as const,
      totalAmount: 899,
      currency: "USD",
      createdAt: "2024-01-20T14:15:00Z",
      items: [
        { id: 2, name: "Round Trip to Paris", quantity: 1, price: 899 }
      ]
    },
    {
      id: 3,
      orderNumber: "TG-2024-003",
      status: "PAID" as const,
      totalAmount: 3299,
      currency: "USD",
      createdAt: "2024-02-01T09:45:00Z",
      items: [
        { id: 3, name: "Mediterranean Adventure", quantity: 1, price: 3299 }
      ]
    },
    {
      id: 4,
      orderNumber: "TG-2024-004",
      status: "CANCELLED" as const,
      totalAmount: 1999,
      currency: "USD",
      createdAt: "2024-02-10T16:20:00Z",
      items: [
        { id: 4, name: "Tropical Paradise Escape", quantity: 1, price: 1999 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Orders</h1>
          <p className="text-lg text-gray-600">
            Track your bookings and manage your travel orders
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search orders by number or product..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orders</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-500 mb-6">Start exploring our amazing travel packages!</p>
            <Button>Browse Packages</Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
