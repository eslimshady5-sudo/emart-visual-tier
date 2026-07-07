import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Minus, Plus } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart();

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart ({cartCount} items)</h1>
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start gap-4 p-4 border rounded-lg">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex-grow">
                    <Link to={`/product/${item.id}`} className="font-semibold hover:underline">{item.name}</Link>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border rounded-md w-fit">
                          <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                              <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                              <Plus className="w-4 h-4" />
                          </Button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <Button variant="ghost" size="icon" className="mt-2 text-muted-foreground" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 border rounded-lg bg-slate-50">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-4">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Button asChild size="lg" className="w-full mt-6">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
