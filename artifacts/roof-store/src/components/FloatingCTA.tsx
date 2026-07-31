import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 z-40 flex justify-center gap-3 px-4 transition-all duration-300 xl:hidden pointer-events-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <a
        href="tel:954-210-9614"
        className="pointer-events-auto flex items-center gap-2 bg-primary text-white font-bold px-5 py-3.5 rounded-full shadow-xl hover:bg-primary/90 transition-colors text-sm"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="pointer-events-auto flex items-center gap-2 bg-accent text-white font-bold px-5 py-3.5 rounded-full shadow-xl hover:bg-accent/90 transition-colors text-sm"
      >
        Free Evaluation &amp; Estimate
      </Link>
    </div>
  );
}
