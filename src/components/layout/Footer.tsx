import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">EMART</h3>
            <p className="text-muted-foreground">Premium e-commerce for Ethiopia and beyond.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground">Categories</Link></li>
              <li><Link to="/deals" className="text-muted-foreground hover:text-foreground">Deals</Link></li>
              <li><Link to="/new-arrivals" className="text-muted-foreground hover:text-foreground">New Arrivals</Link></li>
              <li><Link to="/best-sellers" className="text-muted-foreground hover:text-foreground">Best Sellers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-foreground">Support</Link></li>
              <li><Link to="/track-order" className="text-muted-foreground hover:text-foreground">Track Order</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe to get the latest deals.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMART. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
