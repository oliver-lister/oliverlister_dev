import ModalExitButton from "./components/ModalExitButton";

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  return (
    <div
      id="modal-wrapper"
      className="fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center"
    >
      <dialog
        open
        className="relative animate-in rounded-xl max-w-screen-sm w-11/12 md:w-10/12 max-h-screen overflow-y-auto p-6 bg-secondary dark:bg-primary"
      >
        <ModalExitButton
          closeModal={closeModal}
          className="absolute top-6 right-6"
        />
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
