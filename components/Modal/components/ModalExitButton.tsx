import Button from "@/components/Button/Button";

const spanClasses =
  "absolute bg-primary group-hover:bg-secondary dark:bg-secondary group-hover:dark:bg-primary";

const ModalExitButton = ({
  closeModal,
  className,
  ...props
}: {
  closeModal: () => void;
  className: string;
}) => {
  return (
    <Button
      id="modal-exit"
      onClick={closeModal}
      className={`text-3xl select-none w-10 h-10 leading-none group flex items-center justify-center rounded-full transition active:scale-95 hover:bg-primary hover:dark:bg-secondary ${className}`}
      {...props}
    >
      <span className={`w-4 h-[2px] rotate-45 ${spanClasses}`}></span>
      <span className={`w-4 h-[2px] -rotate-45 ${spanClasses}`}></span>
    </Button>
  );
};

export default ModalExitButton;
