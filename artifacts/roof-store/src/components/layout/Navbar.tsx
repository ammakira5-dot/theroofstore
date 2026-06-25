import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Shield, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/roof-systems", label: "Roof Systems" },
  { href: "/roof-services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/products", label: "Products" },
  { href: "/factory", label: "Factory" },
  { href: "/videos", label: "Videos" },
  { href: "/distributorships", label: "Distributorships" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Shield className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-primary">The Roof Store</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Storm Shield Paint Systems Inc.</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-accent transition-colors whitespace-nowrap ${location === link.href ? "text-accent font-semibold" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 ml-4 pl-6 border-l shrink-0">
            <a href="tel:954-210-9614" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              954-210-9614
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] sm:w-[340px] bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none text-primary">The Roof Store</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Storm Shield Paint Systems</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="p-1.5 rounded-md hover:bg-muted transition-colors" aria-label="Close menu">
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <nav className="flex flex-col flex-1 overflow-y-auto py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between px-6 py-4 text-base font-medium border-b border-border/40 hover:bg-muted hover:text-accent transition-colors ${location === link.href ? "text-accent bg-accent/5" : "text-foreground"}`}
            >
              {link.label}
              <ChevronRight className="h-4 w-4 opacity-40" />
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t space-y-3 bg-muted/50">
          <a
            href="tel:954-210-9614"
            className="flex items-center gap-3 text-primary font-bold hover:text-accent transition-colors text-lg"
          >
            <Phone className="h-5 w-5" />
            954-210-9614
          </a>
          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white" size="lg">
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
