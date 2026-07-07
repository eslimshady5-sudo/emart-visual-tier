import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products as allProducts } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/data/categories';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(allProducts);

  // TODO: Implement filtering and sorting logic
  const categoryQuery = searchParams.get('category');

  return (
    <div className="container py-6">
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          
          {/* Category Filter */}
          <div className="space-y-4 border-b pb-4 mb-4">
            <h3 className="font-semibold">Category</h3>
            {categories.map(category => (
                <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox id={category.id} />
                    <Label htmlFor={category.id}>{category.name}</Label>
                </div>
            ))}
          </div>

          {/* Price Filter */}
          <div className="space-y-4 border-b pb-4 mb-4">
            <h3 className="font-semibold">Price</h3>
            <div className="flex items-center space-x-2">
                <Input type="number" placeholder="Min" />
                <Input type="number" placeholder="Max" />
            </div>
          </div>

          {/* Rating Filter */}
          <div className="space-y-2">
            <h3 className="font-semibold">Rating</h3>
            {[4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center space-x-2">
                    <Checkbox id={`rating-${rating}`} />
                    <Label htmlFor={`rating-${rating}`}> {rating} star & up</Label>
                </div>
            ))}
          </div>
        </aside>

        <main className="md:col-span-3">
            <div className='flex justify-between items-center mb-4'>
                <h1 className="text-3xl font-bold">{categoryQuery || 'All Products'}</h1>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
