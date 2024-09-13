import { CopyButton } from "@/components/Button/CopyButton";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PreProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
  raw?: string;
  "data-language"?: string;
}

const Pre: React.FC<PreProps> = ({ children, raw, ...props }) => {
  const lang = props["data-language"];
  return (
    <pre
      {...props}
      className="bg-black text-secondary grid rounded-lg relative border-2 border-accent-200 dark:border-accent-900 overflow-hidden"
    >
      <div className="flex p-2 px-4 border-b-2 border-accent-900 justify-between items-center bg-accent-900">
        <p>action.ts</p>
        <CopyButton text={raw} />
      </div>
      <div className="p-4">{children}</div>
    </pre>
  );
};

export default Pre;
