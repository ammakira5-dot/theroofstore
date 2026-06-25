import React from "react";
import { Link } from "wouter";
import { Phone, Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-none text-primary">The Roof Store</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Storm Shield Paint Systems Inc.</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium text-foreground">
            <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
            <Link href="/roof-systems" className="hover:text-accent transition-colors">Roof Systems</Link>
            <Link href="/roof-services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link href="/reviews" className="hover:text-accent transition-colors">Reviews</Link>
          </nav>
          
          <div className="flex items-center gap-4 ml-4 pl-6 border-l">
            <a href="tel:954-210-9614" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              954-210-9614
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
