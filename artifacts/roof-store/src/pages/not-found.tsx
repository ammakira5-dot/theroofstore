import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Home, Wrench, Star, MapPin, Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container px-4 py-24 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-8 mx-auto">
          <span className="text-4xl font-serif font-bold text-primary">404</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          The page you're looking for may have moved when we rebuilt our site. Use the links below to find what you need, or give us a call — we're happy to help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 text-left">
          {[
            { icon: Home, label: "Home", href: "/", desc: "Back to the homepage" },
            { icon: Package, label: "Our Products", href: "/products", desc: "Fungal Shield · Smart Shield · Roof Shield" },
            { icon: Wrench, label: "Services", href: "/roof-services", desc: "Roof coating, waterproofing & restoration" },
            { icon: MapPin, label: "Service Areas", href: "/service-areas", desc: "Broward, Miami-Dade, Palm Beach & more" },
            { icon: Star, label: "Reviews", href: "/reviews", desc: "What our customers say" },
            { icon: ArrowRight, label: "Contact Us", href: "/contact", desc: "Free consultation — no sales pressure" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="flex items-start gap-3 bg-card border rounded-xl p-4 hover:shadow-md hover:border-accent/40 transition-all group">
              <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors mt-0.5">
                <item.icon className="h-4 w-4 text-accent" />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-primary text-white rounded-2xl p-8 max-w-md mx-auto">
          <p className="font-serif font-bold text-lg mb-2">Can't find what you need?</p>
          <p className="text-white/80 text-sm mb-5">30 years of South Florida experience. We'll answer any question — free, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:9542109614">
                <Phone className="h-4 w-4 mr-2" />
                954-210-9614
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
