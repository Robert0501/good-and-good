"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product, ProductCategory } from "@/lib/types";

const categories: ProductCategory[] = ["Toate", "Pizza", "Panini", "Desert", "Cafea", "Bauturi"];

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as ProductCategory;
  
  const [filter, setFilter] = useState<ProductCategory>(
    initialCategory && categories.includes(initialCategory) ? initialCategory : "Toate"
  );
  
  const menuBanner = PlaceHolderImages.find(p => p.id === 'menu-banner');

  const filteredProducts = filter === "Toate"
    ? products
    : products.filter(p => p.category === filter);

  useEffect(() => {
    const category = searchParams.get("category") as ProductCategory;
    if (category && categories.includes(category)) {
      setFilter(category);
    }
  }, [searchParams]);
    
  return (
    <div>
      <section className="relative w-full h-[30vh] flex items-center justify-center text-center text-white">
        {menuBanner && (
          <Image
            src={menuBanner.imageUrl}
            alt={menuBanner.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={menuBanner.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
          <h1 className="font-headline text-5xl md:text-7xl drop-shadow-lg">
            Meniul Nostru
          </h1>
          <p className="mt-2 text-lg md:text-xl font-light drop-shadow-md">
            Creat cu pasiune, copt la perfecțiune.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <Tabs value={filter} onValueChange={(value) => setFilter(value as ProductCategory)}>
              <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6">
                {categories.map(category => (
                  <TabsTrigger key={category} value={category}>
                    {category === 'Toate' ? 'Toate' : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


export default function MenuPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuContent />
    </Suspense>
  )
}
