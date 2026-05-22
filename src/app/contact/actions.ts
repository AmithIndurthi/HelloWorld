"use server";

import { redirect } from "next/navigation";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"first_name" | "last_name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — silently accept and redirect if a bot filled the hidden field.
  if (String(formData.get("bot-field") ?? "").trim() !== "") {
    redirect("/thank-you");
  }

  const firstName = String(formData.get("first_name") ?? "").trim();
  const lastName = String(formData.get("last_name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (firstName.length < 1) errors.first_name = "Required";
  if (lastName.length < 1) errors.last_name = "Required";
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email";
  if (message.length < 10) errors.message = "Tell us a little more (10+ characters)";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please check the highlighted fields.", errors };
  }

  // In production, send this to email/CRM (e.g. Resend) or persist it.
  console.log("New contact submission:", {
    firstName,
    lastName,
    email,
    organization: String(formData.get("organization") ?? "").trim(),
    practiceArea: String(formData.get("practice_area") ?? "").trim(),
    message,
  });

  redirect("/thank-you");
}
