"use client";

import { ChangeHandler, RefCallBack } from "react-hook-form";

type SwitchProps = {
  id: string;
  reactHookFormProps?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: RefCallBack;
  };
};

const Switch: React.FC<SwitchProps> = ({ id, reactHookFormProps }) => {
  return (
    <label className="relative inline-flex items-center select-none">
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        {...reactHookFormProps}
      />
      <label htmlFor={id} className="hidden"></label>
      <span className="after:absolute after:content-[''] after:top-0 after:left-0 after:w-11 after:h-6 after:rounded-full peer-focus:after:border-blue-500 peer-focus:after:border-2 h-6 w-11 cursor-pointer rounded-full bg-primary dark:bg-secondary before:absolute before:content-[''] before:h-5 before:w-5 before:left-0.5 before:top-0.5 dark:before:bg-primary before:bg-secondary  peer-checked:before:translate-x-full transition-colors before:duration-200 peer-checked:bg-accent before:rounded-full" />
    </label>
  );
};

export default Switch;
