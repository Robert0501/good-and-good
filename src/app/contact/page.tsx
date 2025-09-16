"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

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
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Numele trebuie să aibă cel puțin 2 caractere.",
  }),
  email: z.string().email({
    message: "Vă rugăm să introduceți o adresă de email validă.",
  }),
  message: z.string().min(10, {
    message: "Mesajul trebuie să aibă cel puțin 10 caractere.",
  }),
});

export default function ContactPage() {
  const contactBanner = PlaceHolderImages.find(p => p.id === 'contact-banner');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // In a real app, you'd send this to a server
    toast({
      title: "Mesaj Trimis!",
      description: "Mulțumim că ne-ai contactat. Vom reveni cu un răspuns în curând.",
    });
    form.reset();
  }

  return (
    <div>
      <section className="relative w-full h-[30vh] flex items-center justify-center text-center text-white">
        {contactBanner && (
          <Image
            src={contactBanner.imageUrl}
            alt={contactBanner.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={contactBanner.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
          <h1 className="font-headline text-5xl md:text-7xl drop-shadow-lg">
            Contactează-ne
          </h1>
          <p className="mt-2 text-lg md:text-xl font-light drop-shadow-md">
            Ne-ar plăcea să auzim de la tine.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl mb-4">Intră în contact</h2>
                <p className="text-muted-foreground">
                  Ai o întrebare, o sugestie sau vrei doar să ne saluți? Completează formularul și echipa noastră îți va răspunde cât mai curând posibil. Pentru rezervări, te rugăm să ne suni.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">Str. Pizza nr. 123, Orașul Aromelor, 12345</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">salut@goodandgoody.com</span>
                </div>
              </div>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nume</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@exemplu.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mesaj</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Spune-ne ce te frământă..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
                    Trimite Mesaj
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
