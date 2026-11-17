"use server";
import nodemailer from "nodemailer";

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  category: string;
  projectScale: string;
  location?: string;
  details: string;
}

export async function sendQuoteAction(formData: QuoteFormData) {
  try {
    const zohoUser = process.env.ZOHO_USER || "sales@callhub.com.ng";
    const zohoPass = process.env.ZOHO_APP_PASS;

    const emailBody = `
======================================================
NEW CLEAN ENERGY QUOTE INQUIRY (via CallHub Energy)
======================================================
Full Name:        ${formData.name || "N/A"}
Email Address:    ${formData.email || "N/A"}
Phone Number:     ${formData.phone || "N/A"}
Company/Org:      ${formData.company || "Individual / Not specified"}
Location / City:  ${formData.location || "Not specified"}
Product Category: ${formData.category || "General Energy Inquiry"}
Project Scale:    ${formData.projectScale || "Standard"}

Project & Load Requirements:
${formData.details || "No additional parameters provided."}
======================================================
Equipment interest: Genuine Deye Inverters, Batteries, Solar HVAC & Dehumidifiers.
Supplied & Serviced by CallHub Nigeria.
`;

    if (!zohoPass) {
      console.warn("ZOHO_APP_PASS is not configured. Logging quote request locally:", emailBody);
      return {
        success: true,
        message: "Thank you! Your quote request has been received. A CallHub Energy specialist will reach out shortly.",
      };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: zohoUser,
        pass: zohoPass,
      },
    });

    await transporter.sendMail({
      from: `"CallHub Energy Quote Desk" <${zohoUser}>`,
      to: zohoUser,
      replyTo: formData.email,
      subject: `New Deye System Quote Request: ${formData.name} (${formData.category})`,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <div style="background: #22282a; padding: 18px 24px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #66E8FA; margin: 0; font-size: 20px;">CallHub Clean Energy | Quote Inquiry</h2>
            <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 13px;">Inquiry for genuine Deye clean energy systems</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; width: 35%; border-bottom: 1px solid #e2e8f0;">Full Name:</td>
              <td style="padding: 8px 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Email:</td>
              <td style="padding: 8px 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone Number:</td>
              <td style="padding: 8px 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="tel:${formData.phone}">${formData.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Company / Org:</td>
              <td style="padding: 8px 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${formData.company || "Individual"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Category:</td>
              <td style="padding: 8px 12px; color: #0284c7; font-weight: bold; border-bottom: 1px solid #e2e8f0;">${formData.category}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Project Scale:</td>
              <td style="padding: 8px 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${formData.projectScale}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Location:</td>
              <td style="padding: 8px 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${formData.location || "N/A"}</td>
            </tr>
          </table>

          <div style="background: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #334155;">Requirements & Specifications:</p>
            <p style="margin: 0; white-space: pre-line; color: #1e293b; line-height: 1.5;">${formData.details || "No details provided."}</p>
          </div>

          <p style="font-size: 11px; color: #94a3b8; margin-top: 20px; text-align: center;">
            CallHub Nigeria &bull; Independent Supplier &amp; Installer of Genuine Deye Clean Energy Systems.<br />
            Hotlines: 09134280508, 09138975362 &bull; deye@callhub.com.ng
          </p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Quote request received! Our CallHub energy engineering team will contact you shortly.",
    };
  } catch (err: unknown) {
    console.error("Failed to dispatch quote email via Nodemailer:", err);
    return {
      success: false,
      message: "Could not send automated email at this moment. Please call our desk directly at 09134280508 or email deye@callhub.com.ng.",
    };
  }
}
