import { Resend } from "resend";

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

export interface ContactSubmission {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  roofType?: string;
  message?: string;
  source: "contact-form" | "quote-modal" | "city-page-form" | "county-page-form" | "service-area-form";
}

export async function sendLeadEmail(data: ContactSubmission): Promise<void> {
  const resend = getResend();

  const roofTypeLabel: Record<string, string> = {
    tile: "Tile (Clay/Concrete)",
    flat: "Flat / Low Slope",
    metal: "Metal",
    shingle: "Shingle",
    foam: "Foam / SPF",
    other: "Other / Not Sure",
  };

  const sourceLabel = data.source === "quote-modal" ? "Quote Pop-up" : "Contact Form";

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
  <div style="background: #39505F; padding: 28px 32px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 22px;">New Lead — The Roof Store</h1>
    <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 14px;">Via ${sourceLabel}</p>
  </div>
  <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; width: 40%; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 15px;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 15px;"><a href="tel:${data.phone}" style="color: #28A745; font-weight: 600;">${data.phone}</a></td>
      </tr>
      ${data.email ? `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 15px;"><a href="mailto:${data.email}" style="color: #28A745;">${data.email}</a></td>
      </tr>` : ""}
      ${data.address ? `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Address</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 15px;">${data.address}</td>
      </tr>` : ""}
      ${data.roofType ? `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Roof Type</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 15px;">${roofTypeLabel[data.roofType] ?? data.roofType}</td>
      </tr>` : ""}
      ${data.message ? `
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
        <td style="padding: 10px 0; font-size: 15px; white-space: pre-wrap;">${data.message}</td>
      </tr>` : ""}
    </table>

    <div style="margin-top: 24px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px 20px;">
      <p style="margin: 0; font-size: 13px; color: #166534;">
        <strong>Action needed:</strong> Call <a href="tel:${data.phone}" style="color: #15803d;">${data.phone}</a> to schedule their free roof inspection.
      </p>
    </div>
  </div>
  <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 20px;">The Roof Store · Storm Shield Paint Systems Inc. · 954-210-9614</p>
</body>
</html>`;

  await resend.emails.send({
    from: "The Roof Store <leads@theroofstore.net>",
    to: ["info@theroofstore.net"],
    replyTo: data.email,
    subject: `New Lead: ${data.name} — ${data.phone}`,
    html,
  });
}

export async function sendAutoResponse(data: ContactSubmission): Promise<void> {
  if (!data.email) return;
  const resend = getResend();

  const firstName = data.name.split(" ")[0];

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #1a1a1a; background: #f9fafb;">

  <div style="background: #39505F; padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="color: #fff; margin: 0 0 6px; font-size: 22px; font-weight: bold;">The Roof Store</h1>
    <p style="color: rgba(255,255,255,0.75); margin: 0; font-size: 13px; letter-spacing: 0.05em; text-transform: uppercase;">The Original Liquid Applied Rubber Roof Shield Systems</p>
  </div>

  <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 36px 32px;">

    <h2 style="color: #39505F; font-size: 20px; margin: 0 0 12px;">Hi ${firstName}, we received your information!</h2>
    <p style="font-size: 15px; line-height: 1.7; color: #374151; margin: 0 0 20px;">
      One of our sales associates will be contacting you soon. In the meantime, the theroofstore.net team has provided the most important information for clarification purposes:
    </p>

    <div style="background: #f0fdf4; border-left: 4px solid #28A745; border-radius: 4px; padding: 20px 24px; margin-bottom: 28px;">
      <ul style="margin: 0; padding-left: 18px; color: #374151; font-size: 14px; line-height: 2;">
        <li>Our system is the <strong>only tile roof coating system</strong> with the Dade County TAS-106 Wind Uplift Test certification.</li>
        <li>We are the <strong>only contracting &amp; manufacturing firm</strong> with side-by-side evidence of hurricane-coated resistant roofs.</li>
        <li>Our products are <strong>industrial strength, environmentally safe</strong>, resin weatherproof rubber submersible coating materials.</li>
        <li>Our <strong>transferable product warranty</strong> may include a hurricane uplift rating which can lower your insurance premiums.</li>
        <li>Our product <strong>Fire rating</strong> may qualify for a discount to lower your insurance premiums.</li>
        <li>Roof Shield is a <strong>retrofit property improvement</strong> which is tax deductible.</li>
        <li>Our <strong>white reflective products</strong> honor the FP&amp;L discount of up to 45¢ per sq ft for energy efficiency.</li>
        <li>Roof Shield System qualifies for the <strong>State of Florida Roof Life Certification</strong> for an additional 10 years on 50+ year old roofs.</li>
        <li>Our Florida corporation has been <strong>servicing Floridians since 1994</strong> — A Licensed commercial and residential contracting firm.</li>
      </ul>
    </div>

    <div style="text-align: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px 24px; margin-bottom: 32px;">
      <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #166534; text-transform: uppercase; letter-spacing: 0.05em;">Reach Us Directly</p>
      <a href="tel:9542109614" style="font-size: 28px; font-weight: bold; color: #28A745; text-decoration: none;">954-210-9614</a>
      <p style="margin: 4px 0 0; font-size: 12px; color: #6b7280;">Mon–Fri 8AM–5PM · Sat 9AM–2PM</p>
    </div>

    <h3 style="color: #39505F; font-size: 17px; margin: 0 0 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Our Pricing <span style="font-size: 13px; font-weight: normal; color: #6b7280;">(certain discounts may apply with rebate program)</span></h3>

    <div style="margin-bottom: 20px;">
      <p style="font-weight: bold; color: #28A745; margin: 0 0 8px; font-size: 15px;">FungalShield System — Clear (Roofs or Walls)</p>
      <p style="margin: 0 0 4px; font-size: 13px; color: #374151;"><strong>A)</strong> Flat smooth tile, 2/12–4/12 pitch: 50¢–70¢/sq ft &nbsp;|&nbsp; 5/12 pitch: 70¢–90¢/sq ft</p>
      <p style="margin: 0 0 4px; font-size: 13px; color: #374151;"><strong>B)</strong> Flat broom swept tile, 2/12–4/12 pitch: 70¢–90¢/sq ft &nbsp;|&nbsp; 5/12 pitch: 90¢–$1.25/sq ft</p>
      <p style="margin: 0; font-size: 13px; color: #374151;"><strong>C)</strong> S-Tile, 2/12–4/12 pitch: 90¢–$1.25/sq ft &nbsp;|&nbsp; 5/12 pitch: $1.25–$1.45/sq ft</p>
    </div>

    <div style="margin-bottom: 20px;">
      <p style="font-weight: bold; color: #28A745; margin: 0 0 8px; font-size: 15px;">SmartShield System — Waterproofing (Tile, Walls &amp; Flat Decks)</p>
      <p style="margin: 0 0 4px; font-size: 13px; color: #374151;"><strong>A)</strong> Flat decks: $2.35–$2.75/sq ft</p>
      <p style="margin: 0 0 4px; font-size: 13px; color: #374151;"><strong>B)</strong> Flat smooth tile, 2/12–4/12 pitch: $1.90–$2.25/sq ft &nbsp;|&nbsp; 5/12 pitch: $2.25–$2.50/sq ft</p>
      <p style="margin: 0 0 4px; font-size: 13px; color: #374151;"><strong>C)</strong> Flat broom swept tile, 2/12–4/12: $2.15–$2.35/sq ft &nbsp;|&nbsp; 5/12: $2.35–$2.50/sq ft</p>
      <p style="margin: 0; font-size: 13px; color: #374151;"><strong>D)</strong> S-Tile, 2/12–4/12: $2.35–$2.50/sq ft &nbsp;|&nbsp; 5/12: $2.50–$2.75/sq ft</p>
    </div>

    <div style="margin-bottom: 24px;">
      <p style="font-weight: bold; color: #28A745; margin: 0 0 8px; font-size: 15px;">RoofShield System — Weatherproofing Retrofit</p>
      <p style="margin: 0 0 4px; font-size: 13px; color: #374151;"><strong>A)</strong> Flat decks: $2.75–$3.50/sq ft</p>
      <p style="margin: 0 0 4px; font-size: 13px; color: #374151;"><strong>B)</strong> Flat smooth tile, 2/12–4/12: $2.70–$3.00/sq ft</p>
      <p style="margin: 0 0 4px; font-size: 13px; color: #374151;"><strong>C)</strong> Flat broom swept tile, 2/12–4/12: $3.25–$3.50/sq ft &nbsp;|&nbsp; 5/12: $3.65–$3.85/sq ft</p>
      <p style="margin: 0; font-size: 13px; color: #374151;"><strong>D)</strong> S-Tile, 2/12–4/12: $4.00–$4.20/sq ft &nbsp;|&nbsp; 5/12: $4.45–$4.75/sq ft</p>
    </div>

    <p style="font-size: 13px; color: #6b7280; line-height: 1.6; margin-bottom: 24px; font-style: italic;">
      Variance in price is predicated on type and length of warranty, additional preparation, access, pitch and shape of the tile or structure. Prices include all required materials, labor, and some minor restoration. For an approximate sq ft on a Barrel Tile roof, take the interior space under air and multiply by 20% (Flat cement tile × 10%).
    </p>

    <div style="background: #fefce8; border: 1px solid #fde68a; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
      <p style="font-weight: bold; color: #92400e; margin: 0 0 10px; font-size: 15px;">Manufacturer's Onsite Inspection — $150.00</p>
      <p style="font-size: 13px; color: #374151; line-height: 1.7; margin: 0 0 10px;">
        Required for the complete <strong>RoofShield System warranty</strong>. The inspection report confirms stable surfaces and edges, and may help qualify your roof for the State of Florida additional Roof Life Certification. The $150 fee is <strong>100% refundable</strong> if:
      </p>
      <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #374151; line-height: 1.9;">
        <li>You provide a recent 4-point exam including roof wind mitigation within the last 6 months</li>
        <li>Inordinate structural issues are found that do not meet our minimum warranty standards</li>
        <li>You decide to purchase our products and install them yourself (minimum $1,000 product order)</li>
        <li>You retain our licensed contracting firm or an authorized distributor to apply the system</li>
      </ul>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px 24px; margin-bottom: 28px;">
      <p style="font-weight: bold; color: #39505F; margin: 0 0 10px;">To Confirm Your Appointment, Please Reply With One of the Following:</p>
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; color: #374151; line-height: 2;">
        <li><strong>"I want the inspection for the Complete RoofShield System"</strong></li>
        <li><strong>"I want an onsite price quote"</strong> (no charge)</li>
      </ul>
      <p style="font-size: 13px; color: #6b7280; margin: 12px 0 0;">
        On-site appointments guaranteed within <strong>24–48 hours</strong> of your written request (excluding weekends and holidays).
      </p>
    </div>

    <p style="font-size: 13px; color: #6b7280; line-height: 1.6; margin: 0;">
      There is <strong>never a charge for an onsite price quote</strong>. Structural repairs must be undertaken before application and are the responsibility of the owner. Please inquire for minimum project sizes. Commercial projects may not include the standard fee agreement or turnaround guarantee.
    </p>

  </div>

  <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 20px; line-height: 1.8;">
    Thank you for your interest in our products.<br>
    <strong style="color: #6b7280;">The Original Liquid Applied Rubber Roof Shield Systems</strong><br>
    <a href="https://www.theroofstore.net" style="color: #9ca3af;">theroofstore.net</a> · 
    <a href="mailto:info@theroofstore.net" style="color: #9ca3af;">info@theroofstore.net</a> · 954-210-9614<br>
    Copyright &copy; ${new Date().getFullYear()} theroofstore.net
  </p>

</body>
</html>`;

  await resend.emails.send({
    from: "The Roof Store <info@theroofstore.net>",
    to: [data.email],
    replyTo: "info@theroofstore.net",
    subject: `We received your request, ${firstName} — The Roof Store`,
    html,
  });
}
