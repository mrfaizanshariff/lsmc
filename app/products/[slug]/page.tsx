
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import ProductFeatures from '@/components/products/product-features';
import RelatedProducts from '@/components/products/related-products';
import ProductDetail from '@/components/products/product-details';


export async function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return <div className="container mx-auto py-12">Product not found</div>;
  }
  
 
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
    
    return (
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    );
}