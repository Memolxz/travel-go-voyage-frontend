
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CreditCard, Package, Eye } from "lucide-react";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  orderNumber: string;
  status: "PENDING" | "PAID" | "CONFIRMED" | "CANCELLED";
  totalAmount: number;
  currency: string;
  createdAt: string;
  items: OrderItem[];
}

interface OrderCardProps {
  order: Order;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "PENDING": return "bg-yellow-100 text-yellow-800";
    case "PAID": return "bg-blue-100 text-blue-800";
    case "CONFIRMED": return "bg-green-100 text-green-800";
    case "CANCELLED": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export const OrderCard = ({ order }: OrderCardProps) => {
  const orderDate = new Date(order.createdAt).toLocaleDateString();

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Order #{order.orderNumber}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{orderDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                <span>{order.items.length} item{order.items.length > 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Badge className={getStatusColor(order.status)}>
              {order.status}
            </Badge>
            <div className="text-lg font-bold text-gray-900 mt-2">
              ${order.totalAmount.toLocaleString()} {order.currency}
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              View Details
            </Button>
            {order.status === "PENDING" && (
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <CreditCard className="h-4 w-4" />
                Pay Now
              </Button>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {order.status === "CONFIRMED" && "✓ Ready for travel"}
            {order.status === "PAID" && "Processing your booking..."}
            {order.status === "PENDING" && "Awaiting payment"}
            {order.status === "CANCELLED" && "Order cancelled"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
