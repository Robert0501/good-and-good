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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Good and Goody
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md">
            Slice by slice, a story of tradition and taste.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/menu">
              Explore Our Menu <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Pizzas Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-12">
            Chef's Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza) => {
              const pizzaImage = PlaceHolderImages.find(p => p.id === pizza.image);
              return (
                <Card key={pizza.id} className="overflow-hidden group flex flex-col">
                  <div className="relative w-full h-64">
                    {pizzaImage && (
                      <Image
                        src={pizzaImage.imageUrl}
                        alt={pizza.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        data-ai-hint={pizzaImage.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{pizza.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-grow">{pizza.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xl font-bold text-primary">${pizza.price.toFixed(2)}</span>
                      <Button asChild variant="ghost" className="text-accent-foreground hover:text-accent-foreground hover:bg-accent/20">
                        <Link href={`/menu/${pizza.slug}`}>
                          View Details <ArrowRight className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/menu">
                See Full Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
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
            <div>
              <h2 className="font-headline text-4xl md:text-5xl mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2024, Good and Goody was born from a passion for authentic Italian pizza. We believe in using only the freshest, locally-sourced ingredients to create unforgettable culinary experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                Our dough is prepared daily and fermented for 72 hours, creating a light, airy, and digestible crust. Every pizza is a piece of our heart, served to you.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
