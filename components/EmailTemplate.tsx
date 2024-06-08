import React from "react";

interface EmailTemplateProps {
  message: string;
  name: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  name,
  email,
}) => (
  <div className="grid gap-2 bg-primary text-secondary">
    <h1 className="font-bold text-xl">Contact Form Enquiry</h1>
    <h2 className="font-semibold text-md">
      Your Portfolio Website{" "}
      <a href="https://oliverlister.dev">oliverlister.dev</a> has a new Contact
      Form Enquiry
    </h2>
    <p className="text-md">From: {`${name} ${email}`}</p>
    <p className="text-sm">Message: {message}</p>
  </div>
);
