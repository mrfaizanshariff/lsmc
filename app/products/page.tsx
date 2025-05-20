'use client';

import { useState } from 'react';
import PageHeader from "@/components/ui/page-header";
import ProductGrid from "@/components/products/product-grid";
import ProductFilters from "@/components/products/product-filters";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const [category, setCategory] = useState<string | null>(null);
  
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  const categories = [
    { id: 'indoor', name: 'Indoor' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'fixtures', name: 'Lighting Fixtures' },
    { id: 'equipment', name: 'Production Equipment' },
  ];
  
  return (
    <div className="container mx-auto py-12">
      <PageHeader 
        title="Our Products" 
        subtitle="Discover our complete range of premium lighting solutions"
      />
      
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <ProductFilters 
            categories={categories}
            activeCategory={category}
            onCategoryChange={setCategory}
          />
        </div>
        
        <div className="w-full lg:w-3/4">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}