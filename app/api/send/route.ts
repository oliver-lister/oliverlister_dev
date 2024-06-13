import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message)
      return Response.json("No name, email and or message supplied", {
        status: 401,
      });

    const { data, error } = await resend.emails.send({
      from: `Portfolio Website Enquries <noreply@emails.oliverlister.dev>`,
      to: [`${process.env.NEXT_EMAIL}`],
      subject: `New Website Enquiry from ${name}`,
      reply_to: email,
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
