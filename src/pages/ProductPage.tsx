import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Star, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="container py-6">Product not found.</div>;
  }

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square overflow-hidden rounded-lg group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
            />
          </div>
          {/* TODO: Add image gallery thumbnails */}
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">({product.rating.toFixed(1)})</span>
          </div>

          <p className="mt-6 text-3xl font-bold">${product.price.toFixed(2)}</p>

          <p className="mt-6 text-base text-muted-foreground">{product.description}</p>

          <div className="mt-8">
            <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                        <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
                <Button size="lg" className="flex-1" onClick={() => addToCart(product, quantity)}>
                  Add to Cart
                </Button>
            </div>
          </div>

          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p><span className="font-semibold text-foreground">SKU:</span> {product.id.toUpperCase()}</p>
              <p><span className="font-semibold text-foreground">Category:</span> {product.category}</p>
          </div>
        </div>
      </div>

      {/* TODO: Add related products, reviews etc. */}
    </div>
  );
}
