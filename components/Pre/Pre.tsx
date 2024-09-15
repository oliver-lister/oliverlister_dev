import { CopyButton } from "@/components/Button/CopyButton";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PreProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
  raw?: string;
  filename?: string;
}

const Pre: React.FC<PreProps> = ({ children, raw, filename, ...props }) => {
  return (
    <pre
      {...props}
      className="bg-black text-secondary grid rounded-lg relative border-2 border-accent-200 dark:border-accent-900 overflow-hidden"
    >
      <div className="flex py-2 px-4 justify-between items-center">
        <p className="text-sm text-gray-400 ">{filename ? filename : "code"}</p>
        <CopyButton text={raw} />
      </div>
      <div className="px-4 pb-4">{children}</div>
    </pre>
  );
};

export default Pre;
