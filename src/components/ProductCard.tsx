import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{product.rating.toFixed(1)}</span>
                </div>
            </div>
            <p className="text-muted-foreground text-sm mt-1">{product.category}</p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              {product.onSale && <Badge variant="destructive">Sale</Badge>}
              {product.isNew && <Badge>New</Badge>}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
