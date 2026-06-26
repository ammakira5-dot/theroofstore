import React from "react";
import { Link } from "wouter";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl leading-none text-white">The Roof Store</span>
                <span className="text-xs uppercase tracking-wider text-primary-foreground/70 font-bold">FungalShield · SmartShield · RoofShield</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 max-w-sm mb-6">
              The pioneer of high-strength weatherproof rubber roof coating systems. Don't Re-Roof — Weatherproof at 1/2 the cost.
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded">A+ BBB Rated Since 1994</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/roof-systems" className="text-primary-foreground/80 hover:text-accent transition-colors">Roof Systems</Link></li>
              <li><Link href="/roof-services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Projects</Link></li>
              <li><Link href="/shop" className="text-primary-foreground/80 hover:text-accent transition-colors">Buy Online</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <a href="tel:954-210-9614" className="hover:text-accent transition-colors font-medium">954-210-9614</a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <a href="mailto:info@theroofstore.net" className="hover:text-accent transition-colors">info@theroofstore.net</a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Serving South Florida & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} The Roof Store. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
