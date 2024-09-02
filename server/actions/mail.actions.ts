"use server";

import { createServerActionProcedure } from "zsa";
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export const sendEmailProcedure = createServerActionProcedure()
  .input(
    z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
    })
  )
  .handler(async ({ input }) => {
    const { name, email, message } = input;

    try {
      const { data, error } = await resend.emails.send({
        from: `Portfolio Website Enquiries <noreply@emails.oliverlister.dev>`,
        to: [`${process.env.NEXT_EMAIL}`], // Ensure NEXT_EMAIL is set in your env
        subject: `New Website Enquiry from ${name}`,
        reply_to: email,
        react: EmailTemplate({
          name: name,
          email: email,
          message: message,
        }) as React.ReactElement,
      });

      if (error) {
        throw new Error(error.message);
      }

      return { status: "success", data };
    } catch (error) {
      if (error instanceof Error)
        throw new Error("Failed to send email: " + error.message);
    }
  });
