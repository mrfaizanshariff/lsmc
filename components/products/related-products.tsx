import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { ProductType } from '@/lib/products';

interface RelatedProductsProps {
  products: ProductType[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link href={`/products/${product.slug}`} key={product.id} className="group">
          <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1 group-hover:text-[#ffc733] transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {product.description}
              </p>
              <div className="mt-2 flex items-center">
                <span className="inline-flex items-center text-xs font-medium group-hover:text-[#ffc733] transition-colors">
                  View
                  <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}