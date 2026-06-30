import { Resend } from "resend";
import nodemailer from "nodemailer";

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

// Generic SMTP fallback — works with BellSouth, Gmail, Yahoo, or any provider.
// Required env vars: SMTP_USER, SMTP_PASSWORD
// Optional env vars: SMTP_HOST (default: outbound.att.net), SMTP_PORT (default: 465), SMTP_TO (default: SMTP_USER)
export function canSendViaSmtp(): boolean {
  return !!(process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

export async function sendLeadEmailViaSmtp(data: ContactSubmission): Promise<void> {
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASSWORD!;
  const host = process.env.SMTP_HOST ?? "outbound.att.net";
  const port = parseInt(process.env.SMTP_PORT ?? "465", 10);
  const to = process.env.SMTP_TO ?? user;

  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const roofTypeLabel: Record<string, string> = {
    tile: "Tile (Clay/Concrete)",
    flat: "Flat / Low Slope",
    metal: "Metal",
    shingle: "Shingle",
    foam: "Foam / SPF",
    other: "Other / Not Sure",
  };

  const sourceLabel =
    data.source === "quote-modal" ? "Quote Pop-up" : "Contact Form";

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

  await transport.sendMail({
    from: `"The Roof Store Leads" <${user}>`,
    to,
    replyTo: data.email || user,
    subject: `New Lead: ${data.name} — ${data.phone}`,
    html,
  });
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
    to: ["theroofstore@gmail.com"],
    replyTo: data.email,
    subject: `New Lead: ${data.name} — ${data.phone}`,
    html,
  });
}

export function buildAutoResponseHtml(name: string): string {
  const firstName = name.split(" ")[0];
  return `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a1a; background: #f4f4f0;">

  <!-- HEADER -->
  <div style="background: #39505F; padding: 36px 32px; text-align: center; border-radius: 8px 8px 0 0;">
    <p style="color: rgba(255,255,255,0.6); margin: 0 0 6px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;">The Original Since 1994</p>
    <h1 style="color: #fff; margin: 0 0 4px; font-size: 28px; font-weight: bold; letter-spacing: -0.5px;">The Roof Store</h1>
    <p style="color: #28A745; margin: 0; font-size: 13px; font-weight: bold; letter-spacing: 0.05em; text-transform: uppercase;">Factory Price Menu</p>
  </div>

  <!-- INTRO -->
  <div style="background: #fff; padding: 28px 32px; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;">
    <p style="margin: 0 0 6px; font-size: 16px; color: #39505F;">Hi ${firstName},</p>
    <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #6b7280;">
      Thanks for reaching out! A sales associate will contact you soon. In the meantime, here is our <strong style="color: #1a1a1a;">factory price menu</strong> — pick your roof type and system to get a clear idea of cost. All prices include <strong>labor &amp; materials</strong>.
    </p>
  </div>

  <!-- DIVIDER -->
  <div style="background: #39505F; height: 3px;"></div>

  <!-- ═══════════════════════════════════════ -->
  <!-- MENU ITEM 1: FUNGALSHIELD              -->
  <!-- ═══════════════════════════════════════ -->
  <div style="background: #fff; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; padding: 28px 32px;">

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 6px;">
      <tr>
        <td>
          <span style="background: #dcfce7; color: #166534; font-size: 10px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 20px;">Entry Level</span>
          <h2 style="margin: 8px 0 2px; color: #39505F; font-size: 20px;">FungalShield&nbsp;<span style="font-size: 13px; color: #9ca3af; font-weight: normal;">(RP1)</span></h2>
          <p style="margin: 0; font-size: 13px; color: #6b7280;">Clear anti-fungal &amp; anti-algae coating — roofs or walls</p>
        </td>
        <td style="text-align: right; vertical-align: top; padding-top: 10px;">
          <span style="font-size: 13px; color: #28A745; font-weight: bold;">from 50¢/sq ft</span>
        </td>
      </tr>
    </table>

    <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px;">
      <thead>
        <tr style="background: #f9fafb;">
          <th style="text-align: left; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">Roof Type</th>
          <th style="text-align: center; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">2/12–4/12 Pitch</th>
          <th style="text-align: center; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">5/12 Pitch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; color: #374151;">Flat Smooth Tile</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">50¢ – 70¢</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">70¢ – 90¢</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; color: #374151;">Flat Broom Swept Tile</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">70¢ – 90¢</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">90¢ – $1.25</td>
        </tr>
        <tr>
          <td style="padding: 9px 12px; color: #374151;">S-Tile (Barrel / Spanish)</td>
          <td style="padding: 9px 12px; text-align: center; font-weight: bold; color: #39505F;">90¢ – $1.25</td>
          <td style="padding: 9px 12px; text-align: center; font-weight: bold; color: #39505F;">$1.25 – $1.45</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- DIVIDER -->
  <div style="background: #e5e7eb; height: 1px; margin: 0 32px;"></div>

  <!-- ═══════════════════════════════════════ -->
  <!-- MENU ITEM 2: SMARTSHIELD              -->
  <!-- ═══════════════════════════════════════ -->
  <div style="background: #fff; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; padding: 28px 32px;">

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 6px;">
      <tr>
        <td>
          <span style="background: #dbeafe; color: #1e40af; font-size: 10px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 20px;">Most Popular</span>
          <h2 style="margin: 8px 0 2px; color: #39505F; font-size: 20px;">SmartShield&nbsp;<span style="font-size: 13px; color: #9ca3af; font-weight: normal;">(RP2)</span></h2>
          <p style="margin: 0; font-size: 13px; color: #6b7280;">Waterproofing — tile roofs, walls &amp; flat decks · 3,000+ colors</p>
        </td>
        <td style="text-align: right; vertical-align: top; padding-top: 10px;">
          <span style="font-size: 13px; color: #28A745; font-weight: bold;">from $1.90/sq ft</span>
        </td>
      </tr>
    </table>

    <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px;">
      <thead>
        <tr style="background: #f9fafb;">
          <th style="text-align: left; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">Roof Type</th>
          <th style="text-align: center; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">2/12–4/12 Pitch</th>
          <th style="text-align: center; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">5/12 Pitch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; color: #374151;">Flat Deck</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;" colspan="2">$2.35 – $2.75</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; color: #374151;">Flat Smooth Tile</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">$1.90 – $2.25</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">$2.25 – $2.50</td>
        </tr>
        <tr>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; color: #374151;">Flat Broom Swept Tile</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">$2.15 – $2.35</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">$2.35 – $2.50</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 9px 12px; color: #374151;">S-Tile (Barrel / Spanish)</td>
          <td style="padding: 9px 12px; text-align: center; font-weight: bold; color: #39505F;">$2.35 – $2.50</td>
          <td style="padding: 9px 12px; text-align: center; font-weight: bold; color: #39505F;">$2.50 – $2.75</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- DIVIDER -->
  <div style="background: #e5e7eb; height: 1px; margin: 0 32px;"></div>

  <!-- ═══════════════════════════════════════ -->
  <!-- MENU ITEM 3: ROOFSHIELD               -->
  <!-- ═══════════════════════════════════════ -->
  <div style="background: #fff; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; padding: 28px 32px;">

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 6px;">
      <tr>
        <td>
          <span style="background: #fef3c7; color: #92400e; font-size: 10px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 20px;">Premium · Flagship</span>
          <h2 style="margin: 8px 0 2px; color: #39505F; font-size: 20px;">RoofShield&nbsp;<span style="font-size: 13px; color: #9ca3af; font-weight: normal;">(RP3)</span></h2>
          <p style="margin: 0; font-size: 13px; color: #6b7280;">Full weatherproofing retrofit · World's only TAS-106 Dade County rated coating · Lifetime warranty</p>
        </td>
        <td style="text-align: right; vertical-align: top; padding-top: 10px;">
          <span style="font-size: 13px; color: #28A745; font-weight: bold;">from $2.70/sq ft</span>
        </td>
      </tr>
    </table>

    <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px;">
      <thead>
        <tr style="background: #f9fafb;">
          <th style="text-align: left; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">Roof Type</th>
          <th style="text-align: center; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">2/12–4/12 Pitch</th>
          <th style="text-align: center; padding: 8px 12px; color: #6b7280; font-weight: 600; border-bottom: 1px solid #e5e7eb;">5/12 Pitch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; color: #374151;">Flat Deck</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;" colspan="2">$2.75 – $3.50</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; color: #374151;">Flat Smooth Tile</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;" colspan="2">$2.70 – $3.00</td>
        </tr>
        <tr>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; color: #374151;">Flat Broom Swept Tile</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">$3.25 – $3.50</td>
          <td style="padding: 9px 12px; border-bottom: 1px solid #f3f4f6; text-align: center; font-weight: bold; color: #39505F;">$3.65 – $3.85</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 9px 12px; color: #374151;">S-Tile (Barrel / Spanish)</td>
          <td style="padding: 9px 12px; text-align: center; font-weight: bold; color: #39505F;">$4.00 – $4.20</td>
          <td style="padding: 9px 12px; text-align: center; font-weight: bold; color: #39505F;">$4.45 – $4.75</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- DIVIDER -->
  <div style="background: #39505F; height: 3px;"></div>

  <!-- NOTES BAR -->
  <div style="background: #f9fafb; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; padding: 20px 32px;">
    <p style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.7;">
      All prices include labor &amp; materials. Minor restoration on flat decks and seam taping included where designated. Variance based on warranty type, pitch, access, and surface condition. 
      <strong style="color: #6b7280;">Barrel tile sq ft tip:</strong> Take interior sq ft under air × 1.20 (flat cement tile × 1.10).
    </p>
  </div>

  <!-- INSPECTION NOTE -->
  <div style="background: #fefce8; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; margin: 0 0; padding: 20px 32px; border-right: 1px solid #fde68a;">
    <p style="margin: 0 0 4px; font-size: 13px; font-weight: bold; color: #92400e;">Manufacturer's Onsite Inspection — $150 <span style="font-weight: normal;">(RoofShield warranty only · 100% refundable)</span></p>
    <p style="margin: 0; font-size: 12px; color: #78350f; line-height: 1.7;">
      Required to confirm roof soundness for the full RoofShield warranty. Fee is fully refundable if you provide a recent wind mitigation report, structural issues disqualify the roof, or you purchase products direct ($1,000+ order). <strong>There is never a charge for a standard onsite price quote.</strong>
    </p>
  </div>

  <!-- CALL TO ACTION -->
  <div style="background: #39505F; padding: 28px 32px; text-align: center;">
    <p style="color: rgba(255,255,255,0.8); margin: 0 0 8px; font-size: 13px;">Ready to move forward? Simply reply to this email with:</p>
    <p style="color: #fff; margin: 0 0 4px; font-size: 14px; font-weight: bold;">"I want the RoofShield inspection"</p>
    <p style="color: rgba(255,255,255,0.5); margin: 0 0 16px; font-size: 12px;">— or —</p>
    <p style="color: #fff; margin: 0 0 16px; font-size: 14px; font-weight: bold;">"I want a free onsite price quote"</p>
    <p style="color: rgba(255,255,255,0.6); margin: 0 0 16px; font-size: 12px;">Appointments confirmed within 24–48 hrs (excl. weekends &amp; holidays)</p>
    <a href="tel:9542109614" style="display: inline-block; background: #28A745; color: #fff; font-size: 20px; font-weight: bold; text-decoration: none; padding: 14px 36px; border-radius: 6px; letter-spacing: 0.5px;">📞 954-210-9614</a>
  </div>

  <!-- FOOTER -->
  <div style="background: #2d3e4a; padding: 20px 32px; border-radius: 0 0 8px 8px; text-align: center;">
    <p style="margin: 0; font-size: 11px; color: rgba(255,255,255,0.4); line-height: 1.8;">
      The Roof Store · Storm Shield Paint Systems Inc. · Davie, FL 33314<br>
      <a href="https://www.theroofstore.net" style="color: rgba(255,255,255,0.4);">theroofstore.net</a> · info@theroofstore.net · 954-210-9614<br>
      Copyright &copy; ${new Date().getFullYear()} theroofstore.net · A+ BBB Rated Since 1994
    </p>
  </div>

</body>
</html>`;
}

export async function sendAutoResponse(data: ContactSubmission): Promise<void> {
  if (!data.email) return;
  const resend = getResend();
  const firstName = data.name.split(" ")[0];
  const html = buildAutoResponseHtml(data.name);

  await resend.emails.send({
    from: "The Roof Store <info@theroofstore.net>",
    to: [data.email],
    replyTo: "info@theroofstore.net",
    subject: `We received your request, ${firstName} — The Roof Store`,
    html,
  });
}
