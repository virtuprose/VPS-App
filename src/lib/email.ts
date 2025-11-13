'use server';

import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;

const CONTACT_RECIPIENT_EMAIL =
  process.env.CONTACT_RECIPIENT_EMAIL ?? "info@virtuprose.com";
const CONTACT_SENDER_EMAIL =
  process.env.CONTACT_SENDER_EMAIL ?? "Virtuprose Contact <no-reply@virtuprose.com>";

export type ContactFormPayload = {
  name: string;
  email: string;
  project?: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function sendContactEmail(payload: ContactFormPayload) {
  if (!resendClient) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { name, email, project = "Not specified", message } = payload;

  const subject = `New website inquiry from ${name}`;
  const html = `
    <h2>New inquiry from virtuprose.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(project)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  await resendClient.emails.send({
    from: CONTACT_SENDER_EMAIL,
    to: CONTACT_RECIPIENT_EMAIL,
    replyTo: email,
    subject,
    html,
  });
}
