const spanClasses =
  "absolute bg-primary group-hover:bg-secondary dark:bg-secondary group-hover:dark:bg-primary";

function ModalExitButton({ closeModal }: { closeModal: () => void }) {
  return (
    <button
      id="modal-exit"
      onClick={closeModal}
      className="text-3xl select-none w-10 h-10 leading-none group flex items-center justify-center rounded-full transition-colors hover:bg-primary hover:dark:bg-secondary"
    >
      <span className={`w-4 h-[2px] rotate-45 ${spanClasses}`}></span>
      <span className={`w-4 h-[2px] -rotate-45 ${spanClasses}`}></span>
    </button>
  );
}

export default ModalExitButton;
