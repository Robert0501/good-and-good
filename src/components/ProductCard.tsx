"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/cart-context";
import type { Product, PizzaSize } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import QuantitySelector from "./QuantitySelector";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const productImage = PlaceHolderImages.find(p => p.id === product.image);
  
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<PizzaSize>("Normal");

  const currentPrice = product.price[size] ?? product.price.Normal;

  const handleAddToCart = () => {
    addToCart(product, quantity, size);
    toast({
      title: "Adăugat în coș!",
      description: `${quantity} x ${size} ${product.name} a fost adăugat în coș.`,
    });
  };

  const isPizza = product.category === 'Pizza';

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
        <CardTitle className="font-headline text-2xl h-14">
          <Link href={`/menu/${product.slug}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-2 h-10">{product.description}</p>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Ingrediente:</h3>
          <div className="flex flex-wrap gap-1">
            {product.ingredients.map(ingredient => (
              <Badge key={ingredient} variant="outline" className="text-xs">{ingredient}</Badge>
            ))}
          </div>
        </div>

        {isPizza && (
          <div>
            <h3 className="font-semibold text-sm mb-2">Alege mărimea:</h3>
            <RadioGroup defaultValue="Normal" value={size} onValueChange={(value: PizzaSize) => setSize(value)} className="flex gap-4">
              {(Object.keys(product.price) as PizzaSize[]).filter(sizeOption => product.price[sizeOption] > 0).map((sizeOption) => (
                <div key={sizeOption} className="flex items-center space-x-2">
                  <RadioGroupItem value={sizeOption} id={`${product.id}-${sizeOption}-card`} />
                  <Label htmlFor={`${product.id}-${sizeOption}-card`} className="text-sm cursor-pointer">
                    {sizeOption}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
        <span className="text-2xl font-bold text-primary whitespace-nowrap">{currentPrice.toFixed(2)} LEI</span>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <Button onClick={handleAddToCart} aria-label={`Adaugă ${product.name} în coș`} className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground h-10 w-10 p-0 flex-shrink-0">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
