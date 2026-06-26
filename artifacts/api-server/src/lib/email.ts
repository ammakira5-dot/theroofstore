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
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
  <div style="background: #39505F; padding: 28px 32px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: #fff; margin: 0; font-size: 24px; font-weight: bold;">The Roof Store</h1>
    <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 14px;">Storm Shield Paint Systems Inc.</p>
  </div>

  <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 36px 32px;">
    <h2 style="color: #39505F; font-size: 22px; margin: 0 0 16px;">Thanks, ${firstName}! We received your request.</h2>

    <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 0 0 16px;">
      Thank you for reaching out to The Roof Store. One of our roofing specialists will contact you within <strong>1 business day</strong> to schedule your free roof inspection.
    </p>

    <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 0 0 24px;">
      If you'd like to speak with someone right away, give us a call — we're happy to help.
    </p>

    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px 24px; margin-bottom: 28px; text-align: center;">
      <p style="margin: 0 0 6px; font-size: 13px; font-weight: 600; color: #166534; text-transform: uppercase; letter-spacing: 0.05em;">Call Us Directly</p>
      <a href="tel:9542109614" style="font-size: 28px; font-weight: bold; color: #28A745; text-decoration: none;">954-210-9614</a>
      <p style="margin: 6px 0 0; font-size: 13px; color: #6b7280;">Monday – Friday 8AM–5PM · Saturday 9AM–2PM</p>
    </div>

    <div style="border-top: 1px solid #f3f4f6; padding-top: 24px;">
      <p style="font-size: 14px; font-weight: 600; color: #39505F; margin: 0 0 12px;">What happens next:</p>
      <ul style="margin: 0; padding-left: 20px; color: #6b7280; font-size: 14px; line-height: 2;">
        <li>We review your request and assign a local technician</li>
        <li>You receive a call to confirm your inspection appointment</li>
        <li>A certified technician inspects your roof at no cost</li>
        <li>You receive a written proposal with transparent pricing</li>
      </ul>
    </div>
  </div>

  <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 20px;">
    The Roof Store · Storm Shield Paint Systems Inc. · Davie, FL 33314<br>
    <a href="mailto:info@theroofstore.net" style="color: #9ca3af;">info@theroofstore.net</a> · 954-210-9614
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
