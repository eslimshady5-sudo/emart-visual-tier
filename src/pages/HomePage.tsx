import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCarousel } from "@/components/ProductCarousel";

export default function HomePage() {
  const newArrivals = products.filter((p) => p.isNew);
  const bestSellers = products.filter((p) => p.rating >= 4.5);
  const deals = products.filter((p) => p.onSale);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[560px]">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/hero-banner-4b4ada7c-1783440437441.webp"
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Upgrade Your Lifestyle</h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl">Discover premium products that elevate your everyday living. Quality and style, delivered.</p>
              <Button asChild size="lg" className="mt-8">
                  <Link to="/shop">Shop Now</Link>
              </Button>
          </div>
      </section>

      <div className="container">
        {/* Featured Categories */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link to={`/shop?category=${category.name}`} key={category.id}>
                <Card className="overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-center">{category.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Today's Deals */}
        {deals.length > 0 && (
          <ProductCarousel title="Today's Deals" products={deals} />
        )}

        {/* New Arrivals */}
        {newArrivals.length > 0 && (
          <ProductCarousel title="New Arrivals" products={newArrivals} />
        )}

        {/* Best Sellers */}
        {bestSellers.length > 0 && (
          <ProductCarousel title="Best Sellers" products={bestSellers} />
        )}
      </div>
    </div>
  );
}
