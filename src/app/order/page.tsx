"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import QuantitySelector from "@/components/QuantitySelector";
import { Trash2, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function OrderPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const taxRate = 0.08;
  const taxes = cartTotal * taxRate;
  const total = cartTotal + taxes;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-4 font-headline text-4xl">Coșul tău este gol</h1>
        <p className="mt-2 text-lg text-muted-foreground">Se pare că nu ai adăugat încă nicio pizza delicioasă.</p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/menu">
            Mergi la Meniu
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <h1 className="font-headline text-4xl md:text-5xl mb-8">Comanda Ta</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => {
            const itemImage = PlaceHolderImages.find(p => p.id === item.image);
            const itemPrice = item.price[item.size];
            return (
              <Card key={item.cartItemId} className="flex items-center p-4">
                <div className="relative h-24 w-24 rounded-md overflow-hidden mr-4">
                  {itemImage && (
                    <Image
                      src={itemImage.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                      data-ai-hint={itemImage.imageHint}
                    />
                  )}
                </div>
                <div className="flex-grow">
                  <h2 className="font-headline text-xl">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">{item.size} - {itemPrice.toFixed(2)} LEI</p>
                </div>
                <div className="flex items-center gap-4">
                  <QuantitySelector
                    quantity={item.quantity}
                    setQuantity={(q) => updateQuantity(item.cartItemId, q)}
                  />
                   <p className="w-20 text-right font-bold text-lg">{(itemPrice * item.quantity).toFixed(2)} LEI</p>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.cartItemId)}>
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="lg:col-span-1 sticky top-24">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Sumar Comandă</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{cartTotal.toFixed(2)} LEI</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxe ({(taxRate * 100).toFixed(0)}%)</span>
              <span>{taxes.toFixed(2)} LEI</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{total.toFixed(2)} LEI</span>
            </div>
          </CardContent>
          <CardFooter>
             <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/checkout">
                  Plasează Comanda
                </Link>
              </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
