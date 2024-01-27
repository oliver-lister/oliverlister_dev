import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const ContactModal = ({
  handleClose,
  closeModal,
}: {
  handleClose: (e: React.MouseEvent) => void;
  closeModal: () => void;
}) => {
  return (
    <div
      id="modal-wrapper"
      className="fixed z-[1] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex"
      onClick={handleClose}
    >
      <dialog
        open
        className="rounded-xl relative overflow-y-auto max-h-[80vh] max-w-screen-sm w-11/12 p-6 bg-secondary | md:w-10/12"
      >
        <div className="col-span-2 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <Image src="/memoji-call.png" alt="Avatar" width="50" height="50" />
          </div>
          <button
            id="modal-exit"
            onClick={closeModal}
            className="text-3xl select-none w-10 h-10 leading-none group flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition"
          >
            <span className="w-4 h-[2px] bg-primary rotate-45 absolute group-hover:bg-secondary"></span>
            <span className="w-4 h-[2px] bg-primary -rotate-45 absolute group-hover:bg-secondary"></span>
          </button>
        </div>
        <div className="grid gap-6 mt-4">
          <ContactForm />
          <div className="m-auto hidden | sm:block"></div>
        </div>
      </dialog>
    </div>
  );
};

export default ContactModal;
