import { useEffect, useState } from "react";
import { X, ShieldCheck, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "trs_modal_dismissed";
const DELAY_MS = 30_000;

export function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setError("Please enter a 10-digit phone number, e.g. 954 333 4444.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "quote-modal" }),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      setError("Something went wrong. Please try calling us at 954-210-9614.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      <div className="fixed z-50 inset-0 flex items-center justify-center px-4 pointer-events-none">
        <div
          className="relative bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto animate-in fade-in zoom-in-95 duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Get a free quote"
        >
          <div className="bg-primary px-8 pt-8 pb-6 text-white relative">
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-white/80" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">A+ BBB Rated Since 1994</span>
            </div>

            <h2 className="text-2xl font-serif font-bold leading-tight mb-2">
              Free Roof Evaluation &amp; Contractor Installation Estimate
            </h2>
            <p className="text-white/75 text-sm">
              No pressure. No obligation. Our expert comes to you and gives you an honest assessment — free.
            </p>
          </div>

          <div className="px-8 py-6">
            {submitted ? (
              <div className="text-center py-4">
                <div className="h-14 w-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">You're all set!</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  We'll call you within 1 business day to schedule your free roof evaluation.
                </p>
                <Button onClick={dismiss} className="w-full bg-accent hover:bg-accent/90 text-white" size="lg">
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="modal-name">Your Name *</Label>
                  <Input
                    id="modal-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="modal-phone">Phone Number *</Label>
                  <Input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(954) 555-0100"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="modal-email">Email Address *</Label>
                  <Input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                  />
                </div>

                {error && (
                  <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm rounded-lg px-4 py-3">
                    {error}
                  </div>
                )}

                <Button type="submit" size="lg" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base mt-2">
                  {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Sending…</> : "Free Roof Evaluation & Estimate"}
                </Button>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <span className="text-xs text-muted-foreground">Or call us directly:</span>
                  <a href="tel:954-210-9614" className="text-xs font-bold text-accent flex items-center gap-1 hover:underline">
                    <Phone className="h-3 w-3" />
                    954-210-9614
                  </a>
                </div>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by The Roof Store.{" "}
                  <button type="button" onClick={dismiss} className="underline hover:text-foreground transition-colors">
                    No thanks
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
