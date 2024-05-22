"use client";

import ContactForm, {
  ContactFormData,
} from "@/components/modals/ContactModal/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import ModalExitButton from "../components/ModalExitButton";
import { IconMail } from "@tabler/icons-react";
import ContactFormSubmission from "./ContactForm/ContactFormSubmission";
import useIsMounted from "@/hooks/useIsMounted";

const ContactModal = ({ closeModal }: { closeModal: () => void }) => {
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (formData: ContactFormData) => {
    try {
      setIsLoading(true);
      console.log(formData);
      setIsLoading(false);
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error submitting form: ${err.message}`);
      setIsLoading(false);
    }
  };

  const dialogClass = `${
    isMounted ? "translate-y-0" : "translate-y-[-100vh]"
  } transition-transform duration-300 ease-in-out rounded-xl max-w-screen-sm w-11/12 md:w-10/12 overflow-y-scroll h-[90%] sm:h-auto p-6 bg-secondary dark:bg-primary`;

  return (
    <div
      id="modal-wrapper"
      className="fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center"
    >
      <dialog open className={dialogClass}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <IconMail size={30} />
            <h2 className="text-3xl font-bold">Contact Me</h2>
          </div>
          <ModalExitButton closeModal={closeModal} />
        </div>
        {!submitted ? (
          <ContactForm onSubmit={onSubmit} isLoading={isLoading} />
        ) : (
          <ContactFormSubmission />
        )}
      </dialog>
    </div>
  );
};

export default ContactModal;
