"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const productImage = PlaceHolderImages.find(p => p.id === product.image);

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast({
      title: "Added to cart!",
      description: `${product.name} is waiting for you.`,
    });
  };

  return (
    <Card className="overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-primary animate-fade-in-up">
      <Link href={`/menu/${product.slug}`} className="block overflow-hidden">
        <div className="relative w-full h-56">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              data-ai-hint={productImage.imageHint}
            />
          )}
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-3xl h-16">
          <Link href={`/menu/${product.slug}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-base line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-4">
        <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
        <Button onClick={handleAddToCart} aria-label={`Add ${product.name} to cart`} className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground rounded-full h-12 w-12">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </CardFooter>
    </Card>
  );
}
