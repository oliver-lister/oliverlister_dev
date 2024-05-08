"use client";

import ContactForm from "@/components/modals/ContactModal/ContactForm";
import { useEffect, useState } from "react";

const ContactModal = ({
  handleClose,
  closeModal,
}: {
  handleClose: (e: React.MouseEvent) => void;
  closeModal: () => void;
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // On Open
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const dialogClass = isMounted
    ? "translate-y-0 transition-transform duration-300 ease-in-out rounded-xl relative overflow-y-auto max-h-[80vh] max-w-screen-sm w-11/12 p-6 bg-secondary | md:w-10/12"
    : "translate-y-[-100vh] transition-transform duration-300 ease-in-out rounded-xl relative overflow-y-auto max-h-[80vh] max-w-screen-sm w-11/12 p-6 bg-secondary | md:w-10/12";

  return (
    <div
      id="modal-wrapper"
      className="fixed z-[1] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex"
      onClick={handleClose}
    >
      <dialog open className={dialogClass}>
        <div className="col-span-2 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <button
            id="modal-exit"
            onClick={closeModal}
            className="text-3xl select-none w-10 h-10 leading-none group flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition"
          >
            <span className="w-4 h-[2px] bg-primary rotate-45 absolute group-hover:bg-secondary"></span>
            <span className="w-4 h-[2px] bg-primary -rotate-45 absolute group-hover:bg-secondary"></span>
          </button>
        </div>
        <div className="mt-4">
          <ContactForm />
        </div>
      </dialog>
    </div>
  );
};

export default ContactModal;
