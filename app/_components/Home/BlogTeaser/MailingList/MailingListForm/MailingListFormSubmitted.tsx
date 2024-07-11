import useIsMounted from "@/hooks/useIsMounted";
import { IconCheck } from "@tabler/icons-react";

const MailingListFormSubmitted = () => {
  const isMounted = useIsMounted();

  return (
    <div
      className={`${
        isMounted ? "scale-100" : "scale-0"
      } transition-transform flex gap-2 items-center text-sm text-accent select-none`}
    >
      <IconCheck />
      <p>Thanks for joining!</p>
    </div>
  );
};

export default MailingListFormSubmitted;
