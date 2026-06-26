import React from "react";
import { Link } from "wouter";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

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
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded">A+ BBB Rated Since 1994</div>
            </div>
            <div>
              <p className="text-primary-foreground/60 text-xs uppercase tracking-wider font-semibold mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
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
