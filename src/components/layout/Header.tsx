import { Link, NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
} from "lucide-react";

const navLinks = [
  { name: "Categories", path: "/shop" },
  { name: "Deals", path: "/deals" },
  { name: "New Arrivals", path: "/new-arrivals" },
  { name: "Best Sellers", path: "/best-sellers" },
];

export function Header() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/emart-logo-8f6fffd1-1783440309536.webp" alt="EMART Logo" className="h-6" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-64 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
                <Link to="/account"><User className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link to="/wishlist"><Heart className="h-5 w-5" /></Link>
            </Button>
            <div className="relative">
                <Button variant="ghost" size="icon" asChild>
                    <Link to="/cart"><ShoppingCart className="h-5 w-5" /></Link>
                </Button>
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {cartCount}
                    </span>
                )}
            </div>
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/emart-logo-8f6fffd1-1783440309536.webp" alt="EMART Logo" className="h-6" />
            </Link>
            <nav className="flex flex-col space-y-4 mt-6 text-lg font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6 flex items-center space-x-2">
                <Button variant="ghost" size="icon" asChild>
                    <Link to="/account"><User className="h-5 w-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link to="/wishlist"><Heart className="h-5 w-5" /></Link>
                </Button>
                <div className="relative">
                    <Button variant="ghost" size="icon" asChild>
                        <Link to="/cart"><ShoppingCart className="h-5 w-5" /></Link>
                    </Button>
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
