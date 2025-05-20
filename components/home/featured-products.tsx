import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';


export default function FeaturedProducts() {
  // Get featured products (first 6)
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  
  return (
    <div className="container mx-auto py-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-sm font-semibold text-[#ffc733] tracking-wider uppercase">Featured Products</h2>
          <h3 className="text-3xl font-bold mt-2">Our Best Sellers</h3>
        </div>
        <Link href="/products">
          <Button className="mt-4 md:mt-0 bg-transparent text-black border border-[#ffc733] hover:bg-[#ffc733] flex items-center">
            View All Products
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id} className="group">
            <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.new && (
                  <div className="absolute top-4 left-4 bg-[#ffc733] text-black px-3 py-1 text-xs font-bold rounded">
                    NEW
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {product.category === 'indoor' && 'Indoor Lighting'}
                  {product.category === 'outdoor' && 'Outdoor Lighting'}
                  {product.category === 'fixtures' && 'Lighting Fixtures'}
                  {product.category === 'equipment' && 'Production Equipment'}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#ffc733] transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="inline-flex items-center text-sm font-medium group-hover:text-[#ffc733] transition-colors">
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  {product.variants && (
                    <span className="text-xs text-muted-foreground">
                      {product.variants.length} variants
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}