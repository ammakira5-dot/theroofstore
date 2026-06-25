import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

const faqs = [
  {
    q: "What is a liquid-applied rubber roof coating system?",
    a: "A liquid-applied rubber roof coating is a seamless, elastomeric membrane applied directly to your existing roof surface. Unlike traditional roofing materials, it's applied as a liquid and cures into a solid, fully-adhered rubber membrane with no seams or joints — which are the primary entry points for water in conventional roofing systems.",
  },
  {
    q: "How does roof coating compare to full roof replacement?",
    a: "Roof coating typically costs 40–60% less than full replacement, can be applied over your existing roof (avoiding landfill waste), and can extend the life of your roof by 10–25 years. It also qualifies as a roofing maintenance cost in many tax and insurance scenarios. However, if your roof has severe structural damage, replacement may be the better option — our team will give you an honest assessment.",
  },
  {
    q: "Will a roof coating hold up to Florida hurricanes?",
    a: "Our Storm Shield systems are specifically engineered for Florida's severe weather environment. The elastomeric formulation flexes and stretches under wind loads rather than cracking or separating. Our systems are tested and guaranteed against hurricane force winds. We have thousands of installations that have survived multiple hurricane seasons with zero failures.",
  },
  {
    q: "How long does the coating last?",
    a: "Our premium roof coating systems are designed to last 10–25 years depending on the system selected, application thickness, roof condition, and maintenance. We provide written performance guarantees on all of our installations. Annual inspections and minor touch-ups can extend the life further.",
  },
  {
    q: "Can you coat any type of roof?",
    a: "We work with a wide range of roof types including clay and concrete tile, flat and low-slope roofs, modified bitumen, metal roofs, and more. Not all roofs are candidates for coating — during your free consultation, our technicians will inspect your roof and advise whether coating or restoration is appropriate for your situation.",
  },
  {
    q: "How long does the installation take?",
    a: "Most residential roof coating projects are completed in 1–3 days depending on roof size and system complexity. Flat roof applications may be completed in a single day. We'll give you a detailed timeline during your consultation.",
  },
  {
    q: "Will the coating affect my energy bills?",
    a: "Yes — positively. Our coatings are highly UV-reflective, which reduces heat absorption and can lower your cooling costs by 15–25% during Florida's hot summer months. This makes them 'cool roof' products that may qualify for energy efficiency incentives in some programs.",
  },
  {
    q: "What is Roof Tile Reglazing?",
    a: "Reglazing restores the protective glaze layer on ceramic or concrete roof tiles. Over time, tiles become porous and lose their protective finish — leading to water absorption, algae growth, and discoloration. Reglazing seals the tile surface, restoring its original color and protective properties at a fraction of the cost of tile replacement.",
  },
  {
    q: "Do you offer warranties?",
    a: "Yes. We provide written performance warranties on all our installations. Warranty terms vary by system — from 5-year maintenance warranties to 15+ year performance guarantees on our premium systems. Ask our team for full warranty details during your consultation.",
  },
  {
    q: "How do I get started?",
    a: "Simply call us at 954-210-9614 or use our online contact form to schedule a free roof inspection and consultation. One of our certified technicians will come to your property, assess your roof, and provide a detailed written proposal at no charge.",
  },
];

export default function Faq() {
  return (
    <div className="w-full">
      <SEO
        title="FAQ — Rubber Roof Coating Questions Answered"
        description="Answers to common questions about rubber roof coatings, tile restoration, hurricane performance, warranties, and how roof coating compares to full replacement."
        canonical="/faq"
      />
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80">
              Everything you need to know about roof coating, restoration, and weatherproofing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem value={`item-${i}`} className="bg-card border rounded-xl px-6" data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="text-left font-serif font-bold text-lg text-foreground hover:text-primary py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-white/80 mb-10">Our experts are standing by to answer any questions you have about your specific roof situation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <a href="tel:954-210-9614" className="text-white/80 hover:text-white font-bold text-lg transition-colors">
              Call 954-210-9614
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
