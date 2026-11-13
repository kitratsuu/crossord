import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export const isMailConfigured = () =>
    Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);

export async function sendMail(opts: { to: string; subject: string; html: string; replyTo?: string }) {
    return transporter.sendMail({
        from: `"Crossord" <${process.env.SMTP_USER}>`,
        ...opts,
    });
}

// Lead fields are user input, so escape them before putting them in HTML.
const escape = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export function leadNotificationEmail(lead: {
    name: string; email: string; phone?: string | null; service?: string | null; message: string;
}) {
    return `
    <h2>New Lead</h2>
    <p><strong>Name:</strong> ${escape(lead.name)}</p>
    <p><strong>Email:</strong> ${escape(lead.email)}</p>
    ${lead.phone ? `<p><strong>Phone:</strong> ${escape(lead.phone)}</p>` : ""}
    ${lead.service ? `<p><strong>Service:</strong> ${escape(lead.service)}</p>` : ""}
    <p><strong>Message:</strong><br/>${escape(lead.message).replace(/\n/g, "<br/>")}</p>
  `;
}

export function leadConfirmationEmail(name: string) {
    return `
    <p>Hi ${escape(name)},</p>
    <p>Thanks for reaching out to Crossord. We've received your message and will get back to you within a business day.</p>
    <p>— The Crossord Team</p>
  `;
}
