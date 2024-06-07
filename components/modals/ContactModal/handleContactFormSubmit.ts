import { ContactFormData } from "./ContactForm/ContactForm";

const handleContactFormSubmit = async (formData: ContactFormData) => {
  if (formData.mailingList) {
    const res = await fetch("/api/addToMailingList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }
  }
  const RESEND_API_KEY = process.env.NEXT_RESEND_API_KEY;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `${formData.name} <${formData.email}>`,
      to: [process.env.NEXT_EMAIL],
      subject: "Website Enquiry | oliverlister.dev",
      html: `<h1>oliverlister.dev website enquiry:</h1><p>${formData.message}</p>`,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error);
  }
};

export default handleContactFormSubmit;
