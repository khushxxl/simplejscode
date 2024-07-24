import { WelcomeEmailTemplate } from "@/email/email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Nu7RJ4SJ_Abo8LVTSnSx6kNRKUncMcvpZ");

export async function POST(request: Request) {
  const { reciever } = await request.json();
  await resend.emails.send({
    from: "Khushaal <khushaal@khushcodezz.net>",
    to: "khushaal.choithramani@gmail.com",
    subject: "Welcome to Simple JS Code",
    react: WelcomeEmailTemplate({ email: reciever }),
  });

  return NextResponse.json({
    status: "Okayy",
  });
}
