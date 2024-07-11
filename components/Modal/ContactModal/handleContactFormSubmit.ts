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

  const res = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error);
  }
};

export default handleContactFormSubmit;
