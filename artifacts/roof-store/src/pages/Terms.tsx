import React from "react";
import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service — The Roof Store" description="Terms of service for theroofstore.net — Storm Shield Paint Systems Inc., Davie, FL." canonical="/terms" noindex />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-serif font-bold text-4xl text-primary mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Acceptance of Terms</h2>
            <p>By accessing and using the website of The Roof Store (Storm Shield Paint Systems Inc.), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Use of Website</h2>
            <p>This website is provided for informational purposes and to facilitate contact with our roofing services company. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Accuracy of Information</h2>
            <p>We strive to provide accurate and up-to-date information on our website. However, we make no warranties or representations as to the accuracy, completeness, or timeliness of any content. Pricing, product availability, and service details are subject to change without notice.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Intellectual Property</h2>
            <p>All content on this website — including text, images, logos, product names (Fungal Shield, Smart Shield, Roof Shield), and graphics — is the property of Storm Shield Paint Systems Inc. and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content without our express written permission.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Service Estimates</h2>
            <p>Any estimates, quotes, or pricing information provided through this website or during a free consultation are non-binding until a formal written contract is executed between you and The Roof Store. Final pricing may vary based on site inspection and scope of work.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, The Roof Store shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information contained herein.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Governing Law</h2>
            <p>These Terms of Service are governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>The Roof Store</strong> (Storm Shield Paint Systems Inc.)</p>
              <p>Phone: <a href="tel:954-210-9614" className="text-accent hover:underline">954-210-9614</a></p>
              <p>Email: <a href="mailto:theroofstore@gmail.com" className="text-accent hover:underline">theroofstore@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
