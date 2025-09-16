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
const displayCategories: ProductCategory[] = ["Pizza", "Panini", "Desert", "Cafea", "Bauturi"];

const categorySubtitles: Partial<Record<ProductCategory, string>> = {
  Pizza: "Pizza artizanală, coaptă pe vatră, cu ingrediente proaspete.",
  Panini: "Sandvișuri calde și crocante, pline de gust.",
  Desert: "Finalul dulce perfect pentru masa ta.",
  Cafea: "Cafea de specialitate, proaspăt măcinată.",
  Bauturi: "Băuturi răcoritoare pentru a-ți potoli setea.",
};


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
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {filter === 'Toate' ? (
            <div className="space-y-16">
              {displayCategories.map(category => {
                const categoryProducts = products.filter(p => p.category === category);
                if (categoryProducts.length === 0) return null;
                return (
                  <div key={category}>
                    <div className="text-center mb-12">
                      <h2 className="font-headline text-4xl md:text-5xl">{category}</h2>
                      {categorySubtitles[category] && (
                        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                          {categorySubtitles[category]}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {categoryProducts.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
             <div>
                <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl">{filter}</h2>
                   {categorySubtitles[filter] && (
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                      {categorySubtitles[filter]}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
            </div>
          )}
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
