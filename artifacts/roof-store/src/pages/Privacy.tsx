import React from "react";
import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-serif font-bold text-4xl text-primary mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Information We Collect</h2>
            <p>When you contact us through our website, request a free consultation, or submit a form, we may collect the following information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Your name and contact information (phone number, email address)</li>
              <li>Your property address or service location</li>
              <li>Details about your roofing needs</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <p className="mt-3">We also collect standard website usage data (such as browser type and pages visited) through analytics tools to help us improve our website.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Provide roofing services and follow up on estimates</li>
              <li>Send you information about our products and services that may be of interest</li>
              <li>Improve our website and customer experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided those parties agree to keep this information confidential.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Data Security</h2>
            <p>We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some parts of our site may not function properly.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="mailto:theroofstore@gmail.com" className="text-accent hover:underline">theroofstore@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl text-primary mb-3">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>The Roof Store</strong> (Storm Shield Paint Systems Inc.)</p>
              <p>Phone: <a href="tel:954-210-9614" className="text-accent hover:underline">954-210-9614</a></p>
              <p>Email: <a href="mailto:theroofstore@gmail.com" className="text-accent hover:underline">theroofstore@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
