import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Shield, Menu, X, ChevronRight, ChevronDown, Leaf, Sun, ShieldCheck, FileText, Download, HelpCircle, LayoutGrid, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/roof-systems", label: "Roof Systems" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact Us" },
];

const moreLinks = [
  { href: "/roof-services", label: "Services" },
  { href: "/roof-coating-florida", label: "Roof Coating Guide" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
  { href: "/factory", label: "Factory" },
  { href: "/commercial-roofs", label: "Commercial Roofs" },
  { href: "/blog", label: "Blog" },
  { href: "/videos", label: "Videos" },
  { href: "/distributorships", label: "Distributorships" },
  { href: "/partner-network", label: "Distributor & Installer Network" },
];

const productDropdown = {
  label: "Products",
  href: "/products",
  items: [
    {
      group: "Product Lines",
      links: [
        { href: "/products", label: "All Products", icon: LayoutGrid, desc: "Overview of all three systems" },
        { href: "/products/fungalshield", label: "Fungal Shield (RP1)", icon: Leaf, desc: "Anti-fungal & anti-algae coating" },
        { href: "/products/smartshield", label: "Smart Shield (RP2)", icon: Sun, desc: "Energy-reflective cool pigment coating" },
        { href: "/products/roofshield", label: "Roof Shield (RP3)", icon: ShieldCheck, desc: "Hurricane-proof waterproofing system" },
      ],
    },
    {
      group: "Resources",
      links: [
        { href: "/questions", label: "Questions to Ask", icon: HelpCircle, desc: "What every buyer should know" },
        { href: "/shop", label: "Buy Online", icon: ShoppingCart, desc: "Order direct — RP1 · RP2 · RP3" },
      ],
    },
    {
      group: "Downloads",
      links: [
        {
          href: "/docs/roofprotect-product-presentation.pdf",
          label: "Smart Shield (RP2) PDF",
          icon: FileText,
          desc: "Product presentation",
          external: true,
        },
        {
          href: "/docs/roofshield-strength-data-sheet.pdf",
          label: "Roof Shield (RP3) PDF",
          icon: FileText,
          desc: "Strength data sheet",
          external: true,
        },
      ],
    },
  ],
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const moreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMoreOpen(false);
    setMobileMoreOpen(false);
  }, [location]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  const handleMoreEnter = () => {
    if (moreTimerRef.current) clearTimeout(moreTimerRef.current);
    setMoreOpen(true);
  };

  const handleMoreLeave = () => {
    moreTimerRef.current = setTimeout(() => setMoreOpen(false), 120);
  };

  const isMoreActive = moreLinks.some((l) => location === l.href);
  const isProductsActive = location.startsWith("/products") || location === "/questions";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/logo-badge.png" alt="The Roof Store" className="h-12 xl:h-14 w-auto" />
            <div className="hidden sm:flex flex-col items-center">
              <span className="font-serif font-bold text-xl leading-none text-primary">The Roof Store</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Fungal Shield · Smart Shield · Roof Shield</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-3 text-sm font-medium text-foreground">
            {/* Products dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 hover:text-accent transition-colors whitespace-nowrap ${isProductsActive ? "text-accent font-semibold" : ""}`}
              >
                Products
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-xl border min-w-[340px] overflow-hidden">
                    {productDropdown.items.map((group, gi) => (
                      <div key={gi}>
                        {gi > 0 && <div className="border-t mx-3" />}
                        <div className="px-3 pt-3 pb-1">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-2 mb-1">{group.group}</div>
                          {group.links.map((item, ii) => {
                            const isExt = "external" in item && item.external;
                            const content = (
                              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group cursor-pointer">
                                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                  <item.icon className="h-4 w-4 text-accent" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-bold text-sm text-foreground group-hover:text-accent transition-colors leading-tight">{item.label}</div>
                                  <div className="text-xs text-muted-foreground truncate">{item.desc}</div>
                                </div>
                                {isExt && <Download className="h-3.5 w-3.5 text-muted-foreground shrink-0" />}
                              </div>
                            );
                            if (isExt) {
                              return (
                                <a key={ii} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                                  {content}
                                </a>
                              );
                            }
                            return (
                              <Link key={ii} href={item.href} className="block" onClick={() => setDropdownOpen(false)}>
                                {content}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    <div className="px-3 pb-3 pt-1 border-t mx-0 bg-muted/40 mt-1">
                      <p className="text-[10px] text-muted-foreground px-3 py-1">
                        MSDS · TAS-106 tech data · brochure available on request — call 954-210-9614
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regular nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-accent transition-colors whitespace-nowrap ${location === link.href ? "text-accent font-semibold" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div
              ref={moreRef}
              className="relative"
              onMouseEnter={handleMoreEnter}
              onMouseLeave={handleMoreLeave}
            >
              <button
                className={`flex items-center gap-1 hover:text-accent transition-colors whitespace-nowrap ${isMoreActive ? "text-accent font-semibold" : ""}`}
              >
                More
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              {moreOpen && (
                <div
                  className="absolute top-full right-0 pt-2 z-50"
                  onMouseEnter={handleMoreEnter}
                  onMouseLeave={handleMoreLeave}
                >
                  <div className="bg-white rounded-2xl shadow-xl border min-w-[200px] overflow-hidden py-2">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-sm hover:bg-muted hover:text-accent transition-colors ${location === link.href ? "text-accent font-semibold bg-muted" : ""}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden xl:flex items-center gap-3 ml-2 pl-4 border-l shrink-0">
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
            className="xl:hidden p-2 rounded-md hover:bg-muted transition-colors"
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
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Fungal Shield · Smart Shield · Roof Shield</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="p-1.5 rounded-md hover:bg-muted transition-colors" aria-label="Close menu">
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <nav className="flex flex-col flex-1 overflow-y-auto py-2">
          {/* Products expandable in mobile */}
          <div className="border-b border-border/40">
            <button
              className={`w-full flex items-center justify-between px-6 py-4 text-base font-medium hover:bg-muted hover:text-accent transition-colors ${isProductsActive ? "text-accent bg-accent/5" : "text-foreground"}`}
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Products
              <ChevronDown className={`h-4 w-4 opacity-60 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileProductsOpen && (
              <div className="bg-muted/40 border-t border-border/30">
                {productDropdown.items.map((group, gi) => (
                  <div key={gi}>
                    <div className="px-6 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{group.group}</div>
                    {group.links.map((item, ii) => {
                      const isExt = "external" in item && item.external;
                      const inner = (
                        <div className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors">
                          <item.icon className="h-4 w-4 text-accent shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-foreground">{item.label}</div>
                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                          </div>
                          {isExt && <Download className="h-3.5 w-3.5 text-muted-foreground ml-auto shrink-0" />}
                        </div>
                      );
                      if (isExt) {
                        return (
                          <a key={ii} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                            {inner}
                          </a>
                        );
                      }
                      return (
                        <Link key={ii} href={item.href} className="block" onClick={() => setOpen(false)}>
                          {inner}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>

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

          {/* More — mobile */}
          <div className="border-b border-border/40">
            <button
              className={`w-full flex items-center justify-between px-6 py-4 text-base font-medium hover:bg-muted hover:text-accent transition-colors ${isMoreActive ? "text-accent bg-accent/5" : "text-foreground"}`}
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
            >
              More
              <ChevronDown className={`h-4 w-4 opacity-60 transition-transform duration-200 ${mobileMoreOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileMoreOpen && (
              <div className="bg-muted/40 border-t border-border/30">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-8 py-3.5 text-sm font-medium hover:bg-muted hover:text-accent transition-colors ${location === link.href ? "text-accent bg-accent/5" : "text-foreground"}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 opacity-40" />
                  </Link>
                ))}
              </div>
            )}
          </div>
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
