import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featuredPizzas = products.slice(0, 3);

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-pizza');
  const aboutImage = PlaceHolderImages.find(p => p.id === 'pizza-oven');
  const interiorImage = PlaceHolderImages.find(p => p.id === 'pizzeria-interior');

  return (
    <div className="flex flex-col animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 p-4 max-w-4xl animate-fade-in-up">
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl drop-shadow-2xl">
            Good and Goody
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-light drop-shadow-xl text-balance">
            Felie cu felie, o poveste despre tradiție și gust.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
            <Link href="/menu">
              Explorează Meniul <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Pizzas Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-5xl md:text-6xl text-center mb-12">
            Recomandările Bucătarului
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza, index) => {
              const pizzaImage = PlaceHolderImages.find(p => p.id === pizza.image);
              return (
                <Card key={pizza.id} className="overflow-hidden group flex flex-col border-2 border-transparent hover:border-primary transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms`}}>
                  <div className="relative w-full h-64 overflow-hidden">
                    {pizzaImage && (
                      <Image
                        src={pizzaImage.imageUrl}
                        alt={pizza.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={pizzaImage.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl">{pizza.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-grow">{pizza.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-2xl font-bold text-primary">${pizza.price.Normal.toFixed(2)}</span>
                      <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                        <Link href={`/menu/${pizza.slug}`}>
                          Vezi Detalii <ArrowRight className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground text-base">
              <Link href="/menu">
                Vezi Meniul Complet
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div className="animate-fade-in-up">
              <h2 className="font-headline text-5xl md:text-6xl mb-6">
                Povestea Noastră
              </h2>
              <p className="text-xl text-muted-foreground mb-4 text-balance">
                Fondată în 2024, Good and Goody s-a născut din pasiunea pentru pizza italiană autentică. Credem în folosirea doar a celor mai proaspete ingrediente, de proveniență locală, pentru a crea experiențe culinare de neuitat.
              </p>
              <p className="text-xl text-muted-foreground text-balance">
                Aluatul nostru este preparat zilnic și dospit timp de 72 de ore, creând o crustă ușoară, aerată și digerabilă. Fiecare pizza este o bucată din inima noastră, servită vouă.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground text-lg">
                <Link href="/contact">
                  Contactează-ne
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Interior Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-fade-in-up md:order-2">
              <h2 className="font-headline text-5xl md:text-6xl mb-6">
                Interiorul Nostru
              </h2>
              <p className="text-xl text-muted-foreground mb-4 text-balance">
                Pășește într-un spațiu primitor și modern, unde mirosul de pizza proaspăt coaptă te întâmpină la intrare. Designul nostru combină elemente rustice cu o estetică urbană, creând atmosfera perfectă pentru o masă relaxantă.
              </p>
              <p className="text-xl text-muted-foreground text-balance">
                Fie că ești aici pentru o cină romantică, o ieșire cu prietenii sau o masă în familie, restaurantul nostru oferă un cadru confortabil și elegant pentru orice ocazie.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl md:order-1">
              {interiorImage && (
                <Image
                  src={interiorImage.imageUrl}
                  alt={interiorImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={interiorImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
