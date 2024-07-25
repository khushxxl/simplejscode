import { WelcomeEmailTemplate } from "@/email/email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.resend_key);

export async function POST(request: Request) {
  const { reciever } = await request.json();

  console.log("Receiver from api :", reciever);
  await resend.emails.send({
    from: "Khushaal <khushaal@khushcodezz.net>",
    to: reciever,
    subject: "Welcome to Simple JS Code",
    react: WelcomeEmailTemplate({ email: reciever }),
  });

  return NextResponse.json({
    status: "Okayy",
  });
}
