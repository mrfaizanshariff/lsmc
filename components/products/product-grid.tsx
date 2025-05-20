import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { ProductType } from '@/lib/products';

interface ProductGridProps {
  products: ProductType[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length === 0 ? (
        <div className="col-span-full text-center py-10">
          <p className="text-lg text-muted-foreground">No products found. Try changing the filters.</p>
        </div>
      ) : (
        products.map((product) => (
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
        ))
      )}
    </div>
  );
}