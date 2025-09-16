"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import QuantitySelector from "@/components/QuantitySelector";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const productImage = PlaceHolderImages.find(p => p.id === product.image);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${product.name} added.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="mb-8">
        <Button asChild variant="ghost" className="text-muted-foreground">
          <Link href="/menu">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Menu
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              data-ai-hint={productImage.imageHint}
            />
          )}
        </div>
        <div className="flex flex-col h-full">
          <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl mb-4">{product.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">{product.longDescription}</p>
          
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-2">Ingredients</h2>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map(ingredient => (
                <Badge key={ingredient} variant="outline">{ingredient}</Badge>
              ))}
            </div>
          </div>
          
          <div className="mt-auto pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-secondary/30 p-4 rounded-lg">
              <span className="text-3xl font-bold font-headline text-primary">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-4">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <Button onClick={handleAddToCart} size="lg" className="flex-grow bg-accent text-accent-foreground hover:bg-accent/90">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
