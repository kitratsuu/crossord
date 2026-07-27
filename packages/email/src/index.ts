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

export async function sendMail(opts: { to: string; subject: string; html: string }) {
    return transporter.sendMail({
        from: `"Crossord" <${process.env.SMTP_USER}>`,
        ...opts,
    });
}

export function leadNotificationEmail(lead: {
    name: string; email: string; phone?: string | null; service?: string | null; message: string;
}) {
    return `
    <h2>New Lead</h2>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    ${lead.phone ? `<p><strong>Phone:</strong> ${lead.phone}</p>` : ""}
    ${lead.service ? `<p><strong>Service:</strong> ${lead.service}</p>` : ""}
    <p><strong>Message:</strong><br/>${lead.message}</p>
  `;
}

export function leadConfirmationEmail(name: string) {
    return `
    <p>Hi ${name},</p>
    <p>Thanks for reaching out to Crossord. We've received your message and will get back to you within a business day.</p>
    <p>— The Crossord Team</p>
  `;
}