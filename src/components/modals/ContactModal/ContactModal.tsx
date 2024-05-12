"use client";

import ContactForm from "@/components/modals/ContactModal/ContactForm";
import { useEffect, useState } from "react";
import ModalExitButton from "../components/ModalExitButton";
import { IconMail } from "@tabler/icons-react";

const ContactModal = ({ closeModal }: { closeModal: () => void }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // On Open
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const dialogClass = `${
    isMounted ? "translate-y-0" : "translate-y-[-100vh]"
  } transition-transform duration-300 ease-in-out rounded-xl relative overflow-y-auto max-h-[80vh] max-w-screen-sm w-11/12 p-6 top-10 bg-secondary dark:bg-primary | md:w-10/12`;

  return (
    <div
      id="modal-wrapper"
      className="fixed z-[1] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex"
    >
      <dialog open className={dialogClass}>
        <div className="col-span-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <IconMail size={30} />
            <h2 className="text-3xl font-bold">Contact Me</h2>
          </div>
          <ModalExitButton closeModal={closeModal} />
        </div>
        <div>
          <h3 className="text-sm opacity-80">
            Please reach out, I&apos;d love to hear from you!
          </h3>
        </div>
        <div className="mt-4">
          <ContactForm />
        </div>
      </dialog>
    </div>
  );
};

export default ContactModal;
