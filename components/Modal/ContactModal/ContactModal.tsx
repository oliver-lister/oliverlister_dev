"use client";

import ContactForm, { ContactFormData } from "./ContactForm/ContactForm";
import { useState } from "react";
import { IconMail } from "@tabler/icons-react";
import ContactFormSubmission from "./ContactForm/ContactFormSubmission";
import Modal from "../Modal";
import { addToMailingList, sendEmail } from "@/server/actions/mail.actions";

const ContactModal = ({ closeModal }: { closeModal: () => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = async (formData: ContactFormData) => {
    try {
      const { email, message, name } = formData;
      setIsLoading(true);
      if (formData.mailingList) {
        const [data, error] = await addToMailingList({
          email,
        });
        if (error) throw error;
      }

      const [data, error] = await sendEmail({
        message,
        email,
        name,
      });

      if (error) throw error;

      setIsLoading(false);
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error submitting form: ${err.message}`);
      setIsLoading(false);
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="flex items-center gap-2">
        <IconMail size={30} />
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </div>
      {!submitted ? (
        <ContactForm onSubmit={onSubmit} isLoading={isLoading} />
      ) : (
        <ContactFormSubmission />
      )}
    </Modal>
  );
};

export default ContactModal;
