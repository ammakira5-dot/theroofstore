import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Droplets, Wind, Wrench, Award, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <div className="w-full">
      <SEO
        title="The Roof Store | Rubber Roof Coating Florida — FungalShield, SmartShield & RoofShield"
        description="Florida's original liquid-applied rubber roof shield system. Save up to 50% vs. replacement. A+ BBB rated since 1994. Serving Broward, Miami-Dade & Palm Beach. Free consultation."
        canonical="/"
      />
      {/* Hero Section */}
      <section className="relative h-[85dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <img 
            src="/images/hero-bg.png" 
            alt="Beautiful weatherproofed Florida roof" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 px-4 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              A+ BBB Rated Since 1994
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Don't Re-Roof.<br />
              <span className="text-accent">Weatherproof</span> at 1/2 the Cost.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
              The Original Liquid Applied Rubber Roof Shield System. Designed for Florida's Hurricane Force Winds and Water Damage.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg w-full sm:w-auto">
                <Link href="/contact">Schedule Your Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-14 px-8 text-lg w-full sm:w-auto backdrop-blur-sm">
                <Link href="/roof-systems">Explore Our Systems</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Prop Banner */}
      <section className="bg-primary text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center p-4">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">Nearly 30 Years Experience</h3>
              <p className="text-white/80 text-sm">Pioneers in high-strength weatherproof rubber roof coating systems.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Wind className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">Hurricane Proven</h3>
              <p className="text-white/80 text-sm">Guaranteed to perform under unusual and severe Florida weather conditions.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <ShieldCheck className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">100% Weatherproof</h3>
              <p className="text-white/80 text-sm">Windproof, Waterproof, and Weatherproof protection for your home.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Premium Services</h2>
            <p className="text-muted-foreground text-lg">We provide comprehensive restoration and weatherproofing systems that save you money while delivering superior protection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Roof Tile Restoration", desc: "Complete cleaning, repair, and sealing of aging terracotta and concrete tiles.", icon: <Wrench className="h-6 w-6" /> },
              { title: "Flat Deck Rubber Paint", desc: "Seamless liquid rubber membranes that eliminate leaks on flat roofs permanently.", icon: <Droplets className="h-6 w-6" /> },
              { title: "FungalShield · SmartShield · RoofShield", desc: "Our three branded coating systems tackle algae, heat, and waterproofing — choose the right shield for your roof.", icon: <ShieldCheck className="h-6 w-6" /> }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <Link href="/roof-systems" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Ready to Protect Your Home?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Stop worrying about leaks and hurricane damage. Get a professional consultation and discover how much you can save by weatherproofing instead of replacing.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Call 954-210-9614 or Request Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
