import React from "react";
import { useLocation } from "wouter";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { QuoteModal } from "@/components/QuoteModal";

const NO_PROMO_PATHS = ["/trademark-monitoring-log", "/trademark-evidence-file"];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const suppressPromos = NO_PROMO_PATHS.includes(location);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {!suppressPromos && <FloatingCTA />}
      {!suppressPromos && <QuoteModal />}
    </div>
  );
}
