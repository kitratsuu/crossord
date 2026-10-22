"use server";

import { prisma } from "@workspace/db";
import {
  isMailConfigured,
  leadConfirmationEmail,
  leadNotificationEmail,
  sendMail,
} from "@workspace/email";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("website")) return { success: true };

  const field = (key: string, max: number) =>
    formData.get(key)?.toString().trim().slice(0, max) || undefined;

  const name = field("name", 120);
  const email = field("email", 200);
  const phone = field("phone", 40);
  const company = field("company", 160);
  const service = field("service", 120);
  const budget = field("budget", 60);
  const message = field("message", 5000);

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const details = [
    company && `Company: ${company}`,
    budget && `Budget: ${budget}`,
  ].filter(Boolean);
  const fullMessage = details.length ? `${details.join("\n")}\n\n${message}` : message;

  try {
    await prisma.lead.create({
      data: { name, email, phone, service, message: fullMessage },
    });
  } catch (err) {
    console.error("Failed to save lead:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  // The lead is already saved, so email failures shouldn't fail the form.
  if (isMailConfigured()) {
    const notifyTo = process.env.LEAD_NOTIFY_EMAIL || "info@crossord.com";
    const results = await Promise.allSettled([
      sendMail({
        to: notifyTo,
        replyTo: email,
        subject: `New lead: ${name}${service ? ` — ${service}` : ""}`,
        html: leadNotificationEmail({ name, email, phone, service, message: fullMessage }),
      }),
      sendMail({
        to: email,
        subject: "Thanks for contacting Crossord",
        html: leadConfirmationEmail(name),
      }),
    ]);
    results
      .filter((r) => r.status === "rejected")
      .forEach((r) => console.error("Failed to send lead email:", (r as PromiseRejectedResult).reason));
  }

  return { success: true };
}
