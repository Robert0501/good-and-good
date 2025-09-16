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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { PizzaSize } from "@/lib/types";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<PizzaSize>("Normal");
  const { addToCart } = useCart();
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const productImage = PlaceHolderImages.find(p => p.id === product.image);

  const handleAddToCart = () => {
    addToCart(product, quantity, size);
    toast({
      title: "Adăugat în coș!",
      description: `${quantity} x ${size} ${product.name} adăugat.`,
    });
  };

  const nutritionData = product.nutrition ? Object.entries(product.nutrition) : [];
  const currentPrice = product.price[size];

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="mb-8">
        <Button asChild variant="ghost" className="text-muted-foreground">
          <Link href="/menu">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Înapoi la Meniu
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
            <h2 className="font-bold text-lg mb-2">Mărime</h2>
             <RadioGroup defaultValue="Normal" value={size} onValueChange={(value: PizzaSize) => setSize(value)} className="flex gap-4">
                {(Object.keys(product.price) as PizzaSize[]).map((sizeOption) => (
                  <div key={sizeOption} className="flex items-center space-x-2">
                    <RadioGroupItem value={sizeOption} id={`${product.id}-${sizeOption}`} />
                    <Label htmlFor={`${product.id}-${sizeOption}`} className="text-base cursor-pointer">
                      {sizeOption} (+{(product.price[sizeOption] - product.price.Normal).toFixed(2)} LEI)
                    </Label>
                  </div>
                ))}
              </RadioGroup>
          </div>

          <div className="mb-6">
            <h2 className="font-bold text-lg mb-2">Ingrediente</h2>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map(ingredient => (
                <Badge key={ingredient} variant="outline">{ingredient}</Badge>
              ))}
            </div>
          </div>
          
          {nutritionData.length > 0 && (
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2">Informații Nutriționale (per felie)</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nutrient</TableHead>
                    <TableHead className="text-right">Cantitate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nutritionData.map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="capitalize font-medium">{key}</TableCell>
                      <TableCell className="text-right">{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <div className="mt-auto pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-secondary/30 p-4 rounded-lg">
              <span className="text-3xl font-bold font-headline text-primary">{currentPrice.toFixed(2)} LEI</span>
              <div className="flex items-center gap-4">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <Button onClick={handleAddToCart} size="lg" className="flex-grow bg-accent text-accent-foreground hover:bg-accent/90">
                  Adaugă în coș
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
