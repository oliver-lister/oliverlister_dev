import useIsMounted from "../../../../hooks/useIsMounted";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

const ContactFormSubmission: React.FC = () => {
  const isMounted = useIsMounted();

  const iconClasses = `${
    isMounted ? "scale-100" : "scale-0"
  } transition-transform ease-in-out duration-300 bg-primary text-secondary rounded-full p-2 | dark:bg-secondary dark:text-primary`;

  return (
    <div className="grid h-full py-20 justify-center items-center">
      <div className="grid place-items-center gap-2 text-center">
        <IconCheck size={75} className={iconClasses} aria-hidden="true" />
        <p className="font-bold">Sent! I&apos;ll be in touch soon.</p>
      </div>
    </div>
  );
};

export default ContactFormSubmission;
