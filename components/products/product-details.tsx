'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import ProductFeatures from './product-features';
import RelatedProducts from './related-products';

export default function ProductDetail({ product, relatedProducts }: { product: any, relatedProducts: any[] }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Image + Info */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src={selectedVariant?.image || product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">{product.description}</p>

          {product.variants?.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant:any) => (
                  <Button
                    key={variant.id}
                    variant={selectedVariant?.id === variant.id ? 'default' : 'outline'}
                    onClick={() => setSelectedVariant(variant)}
                    className={selectedVariant?.id === variant.id ? 'bg-[#ffc733] text-black hover:bg-[#e6b32e]' : ''}
                  >
                    {variant.name}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-lg font-medium mb-3">Specifications</h3>
            <ul className="space-y-2">
              {product.specifications.map((spec:any, index:any) => (
                <li key={index} className="flex justify-between">
                  <span className="text-muted-foreground">{spec.name}</span>
                  <span className="font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="pt-4">
            <Button size="lg" className="bg-[#ffc733] text-black hover:bg-[#e6b32e]">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="features">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="py-6">
            <ProductFeatures features={product.features} />
          </TabsContent>
          <TabsContent value="installation" className="py-6">
            <div className="prose max-w-none">
              <h3>Installation Guidelines</h3>
              <ol>
                <li>Turn off power to the circuit at the circuit breaker.</li>
                <li>Remove the existing fixture if applicable.</li>
                <li>Connect the wires according to the wiring diagram.</li>
                <li>Secure the fixture to the mounting surface.</li>
                <li>Install the recommended bulbs (not included).</li>
                <li>Restore power and test.</li>
              </ol>
            </div>
          </TabsContent>
          <TabsContent value="downloads" className="py-6">
            <div className="grid gap-4">
              {['Product Specification Sheet', 'Installation Manual', 'CAD Drawing', 'Warranty Information'].map(doc => (
                <Button key={doc} variant="outline" className="justify-start">
                  <span className="mr-2">📄</span> {doc}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
