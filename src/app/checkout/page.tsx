"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/context/cart-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShoppingCart } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Numele trebuie să aibă cel puțin 2 caractere.",
  }),
  phone: z.string().min(10, {
    message: "Numărul de telefon trebuie să aibă cel puțin 10 cifre.",
  }),
  address: z.string().min(5, {
    message: "Adresa trebuie să aibă cel puțin 5 caractere.",
  }),
  city: z.string().min(2, {
    message: "Orașul trebuie să aibă cel puțin 2 caractere.",
  }),
  notes: z.string().optional(),
});

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();

  const taxRate = 0.08;
  const taxes = cartTotal * taxRate;
  const total = cartTotal + taxes;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      city: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Date comandă:", values);
    console.log("Produse comandate:", cartItems);
    toast({
      title: "Comandă Plasată!",
      description: "Mulțumim pentru comanda ta! Pizza este pe drum.",
    });
    clearCart();
    router.push("/");
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-4 font-headline text-4xl">Coșul tău este gol</h1>
        <p className="mt-2 text-lg text-muted-foreground">Nu poți finaliza comanda fără produse în coș.</p>
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
      <h1 className="font-headline text-4xl md:text-5xl mb-8">Finalizează Comanda</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-2">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Date de Livrare</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nume Complet</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon</FormLabel>
                          <FormControl>
                            <Input placeholder="0712 345 678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresă</FormLabel>
                        <FormControl>
                          <Input placeholder="Str. Pizza nr. 123, Ap. 4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Oraș</FormLabel>
                        <FormControl>
                          <Input placeholder="Orașul Aromelor" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notițe Comandă (Opțional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Fără ceapă, vă rog."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Finalizează Comanda ({total.toFixed(2)} LEI)
                  </Button>
                </form>
              </Form>
            </CardContent>
           </Card>
        </div>

        <div className="lg:col-span-1 sticky top-24 space-y-4">
            <h2 className="font-headline text-2xl">Sumar Comandă</h2>
            <Card>
                <CardContent className="p-4 space-y-4">
                {cartItems.map(item => {
                    const itemImage = PlaceHolderImages.find(p => p.id === item.image);
                    const itemPrice = item.price[item.size];
                    return (
                    <div key={item.cartItemId} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden">
                        {itemImage && (
                            <Image
                            src={itemImage.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                            />
                        )}
                        </div>
                        <div className="flex-grow">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.quantity} x {item.size}</p>
                        </div>
                        <p className="font-semibold">{(itemPrice * item.quantity).toFixed(2)} LEI</p>
                    </div>
                    );
                })}
                <Separator />
                 <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{cartTotal.toFixed(2)} LEI</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxe</span>
                    <span>{taxes.toFixed(2)} LEI</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{total.toFixed(2)} LEI</span>
                </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
