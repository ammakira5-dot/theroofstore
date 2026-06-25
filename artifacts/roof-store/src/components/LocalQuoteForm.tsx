import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Phone } from "lucide-react";

interface LocalQuoteFormProps {
  location: string;
  source?: string;
}

export function LocalQuoteForm({ location, source = "service-area-form" }: LocalQuoteFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: `Inquiry from service area page: ${location}`,
          source,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call 954-210-9614.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="h-6 w-6 text-white" />
        </div>
        <p className="text-white font-bold mb-1">Request received!</p>
        <p className="text-white/75 text-sm">
          We'll call you within 1 business day to schedule your free inspection in {location}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor={`sq-name-${source}`} className="text-white/80 text-xs font-semibold uppercase tracking-wide">
          Your Name *
        </Label>
        <Input
          id={`sq-name-${source}`}
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="John Smith"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-accent"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`sq-phone-${source}`} className="text-white/80 text-xs font-semibold uppercase tracking-wide">
          Phone Number *
        </Label>
        <Input
          id={`sq-phone-${source}`}
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="(954) 555-0100"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-accent"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`sq-email-${source}`} className="text-white/80 text-xs font-semibold uppercase tracking-wide">
          Email
        </Label>
        <Input
          id={`sq-email-${source}`}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@email.com"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-accent"
        />
      </div>

      {error && (
        <p className="text-xs text-red-300 bg-red-900/30 rounded px-3 py-2">{error}</p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-accent hover:bg-accent/90 text-white h-11"
        size="lg"
      >
        {loading ? (
          <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Sending…</>
        ) : (
          "Request Free Inspection"
        )}
      </Button>

      <div className="flex items-center justify-center gap-1.5 pt-1">
        <Phone className="h-3 w-3 text-white/50" />
        <a href="tel:954-210-9614" className="text-white/60 text-xs hover:text-white transition-colors">
          Or call 954-210-9614
        </a>
      </div>
    </form>
  );
}
