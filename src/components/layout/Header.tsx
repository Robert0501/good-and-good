"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pizza, ShoppingCart, Menu as MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/menu", label: "Meniu" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className={cn(
        "text-lg font-medium transition-colors hover:text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100",
        pathname === href ? "text-primary after:scale-x-100" : "text-foreground"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <Pizza className="h-8 w-8 text-primary" />
          <span className="font-bold font-headline text-2xl">Good and Goody</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild variant="ghost" size="icon" className="relative h-12 w-12">
            <Link href="/order">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Coș de cumpărături</span>
            </Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-7 w-7"/>
                  <span className="sr-only">Comută Meniul</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-card">
                <div className="flex flex-col space-y-6 p-6">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mb-4 flex items-center space-x-2">
                     <Pizza className="h-8 w-8 text-primary" />
                     <span className="font-bold font-headline text-2xl">Good and Goody</span>
                  </Link>
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
