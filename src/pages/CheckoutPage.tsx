import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckoutPage() {
  const { cart, totalPrice, cartCount } = useCart();

  return (
    <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <div className="grid lg:grid-cols-2 gap-12">
            <div>
                <Tabs defaultValue="shipping" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="shipping">Shipping</TabsTrigger>
                        <TabsTrigger value="payment">Payment</TabsTrigger>
                        <TabsTrigger value="review">Review</TabsTrigger>
                    </TabsList>
                    <TabsContent value="shipping">
                        <Card>
                            <CardHeader>
                                <CardTitle>Shipping Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="m@example.com" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First Name</Label>
                                        <Input id="first-name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last Name</Label>
                                        <Input id="last-name" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" />
                                </div>
                                 <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2 col-span-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input id="city" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">ZIP Code</Label>
                                        <Input id="zip" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="payment">
                        <Card>
                            <CardHeader>
                                <CardTitle>Payment Method</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>Payment options will be here.</p>
                                <p>(Cash on Delivery, Bank Transfer, etc.)</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                     <TabsContent value="review">
                        <Card>
                            <CardHeader>
                                <CardTitle>Review Order</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Confirm your order details before placing the order.</p>
                                <Button size="lg" className="w-full mt-6">Place Order</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-2">
                {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
                </div>
                <div className="border-t mt-4 pt-4 space-y-2">
                     <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                     <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
