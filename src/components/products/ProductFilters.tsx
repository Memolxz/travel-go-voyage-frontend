
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const ProductFilters = () => {
  return (
    <div className="border-t pt-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Type */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Product Type</Label>
          <div className="space-y-2">
            {['FLIGHT', 'HOTEL', 'ACTIVITY', 'TRANSFER', 'INSURANCE'].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <Label htmlFor={type} className="text-sm capitalize">
                  {type.toLowerCase()}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Price Range</Label>
          <div className="px-3">
            <Slider
              defaultValue={[0, 1000]}
              max={2000}
              step={50}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$0</span>
              <span>$2000+</span>
            </div>
          </div>
        </div>

        {/* Provider */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Provider</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Providers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Providers</SelectItem>
              <SelectItem value="air-france">Air France</SelectItem>
              <SelectItem value="marriott">Marriott</SelectItem>
              <SelectItem value="hilton">Hilton</SelectItem>
              <SelectItem value="local-tours">Local Tours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Sort By</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <Button variant="outline">Clear Filters</Button>
        <Button>Apply Filters</Button>
      </div>
    </div>
  );
};
