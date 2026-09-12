"use server";

import { prisma } from "@workspace/db";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const fullMessage = company ? `Company: ${company}\n\n${message}` : message;

  try {
    await prisma.lead.create({
      data: { name, email, message: fullMessage },
    });
    return { success: true };
  } catch (err) {
    console.error("Failed to save lead:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
