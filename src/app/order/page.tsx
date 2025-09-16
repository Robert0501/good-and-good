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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";


export default function OrderPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const router = useRouter();

  const taxRate = 0.08;
  const taxes = cartTotal * taxRate;
  const total = cartTotal + taxes;

  const handlePlaceOrder = () => {
    // In a real app, this would trigger payment and order processing.
    // Here, we just clear the cart and redirect.
    clearCart();
    router.push("/");
  };


  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-4 font-headline text-4xl">Your Cart is Empty</h1>
        <p className="mt-2 text-lg text-muted-foreground">Looks like you haven't added any delicious pizzas yet.</p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/menu">
            Go to Menu
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <h1 className="font-headline text-4xl md:text-5xl mb-8">Your Order</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => {
            const itemImage = PlaceHolderImages.find(p => p.id === item.image);
            return (
              <Card key={item.id} className="flex items-center p-4">
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
                  <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <QuantitySelector
                    quantity={item.quantity}
                    setQuantity={(q) => updateQuantity(item.id, q)}
                  />
                   <p className="w-20 text-right font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="lg:col-span-1 sticky top-24">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxes ({(taxRate * 100).toFixed(0)}%)</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Place Order
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Your Order?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This is a demo application. Pressing 'Confirm' will clear your cart and take you to the homepage. No real order will be placed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handlePlaceOrder}>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
