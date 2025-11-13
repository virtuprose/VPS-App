import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

const isValidEmail = (value: unknown) =>
  typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isNonEmptyString = (value: unknown) => typeof value === "string" && value.trim().length > 0;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { name, email, project, message } = (payload || {}) as Record<string, unknown>;

  if (!isNonEmptyString(name)) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  if (!isNonEmptyString(message)) {
    return NextResponse.json({ error: "Message cannot be empty." }, { status: 400 });
  }

  try {
    await sendContactEmail({
      name: String(name).trim(),
      email: String(email).trim(),
      project: typeof project === "string" ? project : undefined,
      message: String(message).trim(),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
