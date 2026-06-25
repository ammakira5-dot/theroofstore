import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", roofType: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full">
      <SEO
        title="Contact Us — Free Roof Inspection & Consultation"
        description="Schedule a free roof inspection with The Roof Store. Call 954-210-9614 or fill out the form. Serving South Florida — Broward, Miami-Dade & Palm Beach counties."
        canonical="/contact"
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Schedule Your Free Consultation</h1>
            <p className="text-xl text-white/80">
              Our experts will inspect your roof and provide a detailed proposal — at no cost, no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-1">Call Us Directly</div>
                    <a href="tel:954-210-9614" className="text-accent font-bold text-xl hover:underline">
                      954-210-9614
                    </a>
                    <div className="text-sm text-muted-foreground mt-1">Press Option 1 for Roof Shield System</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-1">Email Us</div>
                    <a href="mailto:info@theroofstore.net" className="text-accent font-bold hover:underline">
                      info@theroofstore.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-1">Service Area</div>
                    <div className="text-muted-foreground">South Florida — Broward, Miami-Dade, and Palm Beach Counties</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-1">Hours</div>
                    <div className="text-muted-foreground">Monday – Friday: 8:00 AM – 5:00 PM</div>
                    <div className="text-muted-foreground">Saturday: 9:00 AM – 2:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6 space-y-3">
                <div className="font-bold text-foreground">What to expect from your free consultation:</div>
                {[
                  "Full roof inspection by a certified technician",
                  "Detailed written assessment of your roof's condition",
                  "Transparent pricing with no hidden fees",
                  "Recommendation for the best system for your needs",
                  "No pressure — honest advice you can trust",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {submitted ? (
                <div className="bg-accent/10 border border-accent/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle2 className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Thank You!</h3>
                  <p className="text-muted-foreground text-lg">
                    We've received your request and will contact you within 1 business day to schedule your free roof inspection.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    For faster service, call us directly at{" "}
                    <a href="tel:954-210-9614" className="text-accent font-bold hover:underline">954-210-9614</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border rounded-2xl p-8 shadow-sm space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-primary">Request a Free Consultation</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(954) 555-0100" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" name="address" value={form.address} onChange={handleChange} placeholder="123 Main St, Fort Lauderdale, FL" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="roofType">Roof Type</Label>
                    <select
                      id="roofType"
                      name="roofType"
                      value={form.roofType}
                      onChange={handleChange}
                      className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select roof type...</option>
                      <option value="tile">Tile (Clay/Concrete)</option>
                      <option value="flat">Flat / Low Slope</option>
                      <option value="metal">Metal</option>
                      <option value="shingle">Shingle</option>
                      <option value="foam">Foam / SPF</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Roof</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe any issues you're experiencing — leaks, damaged tiles, age of roof, etc."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg">
                    Request Free Consultation
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to be contacted by The Roof Store regarding your roofing inquiry.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
