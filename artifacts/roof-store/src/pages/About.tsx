import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Shield, Users, Clock, CheckCircle2, Star } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">About The Roof Store</h1>
            <p className="text-xl text-white/80">Nearly 30 years of protecting Florida homes from the elements.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Welcome to Theroofstore.net. For nearly 30 years, we have been at the forefront of Research, Development, and Installation of High Strength Windproof, Waterproof, Weatherproof Roof Paints and Advanced Rubber Roof Coating Systems and Products.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Storm Shield Paint Systems Inc. (Contracting, Product Installation Division) is A+ BBB Rated since 1994. Our team of certified professionals has protected thousands of Florida homes from hurricanes, tropical storms, and the relentless Florida sun.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We pioneered the liquid-applied rubber roof shield system — a revolutionary alternative to costly roof replacement. Our systems are specifically designed to restore, preserve, and protect Roof Tiles and Flat roofs against weathering as well as Hurricane Force Winds and Water damage.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white" size="lg">
                <Link href="/contact">Schedule Your Free Consultation</Link>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Clock, label: "Years in Business", value: "30+" },
                  { icon: Award, label: "BBB Rating", value: "A+" },
                  { icon: Shield, label: "Homes Protected", value: "10,000+" },
                  { icon: Users, label: "Satisfied Customers", value: "5,000+" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-muted rounded-xl p-8 text-center"
                  >
                    <stat.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg">We don't just sell products — we deliver peace of mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Guaranteed Performance",
                desc: "Our products are guaranteed to perform under unusual and severe weather conditions, including hurricane force winds and torrential Florida rains.",
              },
              {
                icon: Star,
                title: "Pioneer of the Industry",
                desc: "We invented 'THE ORIGINAL LIQUID APPLIED RUBBER ROOF SHIELD SYSTEM' — and have been refining it for three decades.",
              },
              {
                icon: CheckCircle2,
                title: "Save Up to 50%",
                desc: "Our restoration and weatherproofing systems can save homeowners up to half the cost of a full roof replacement without compromising protection.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Protect Your Home?</h2>
          <p className="text-xl text-white/80 mb-10">Don't wait for the next hurricane season. Schedule a free consultation with our experts today.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Call 954-210-9614</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
