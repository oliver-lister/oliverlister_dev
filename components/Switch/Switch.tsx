"use client";

type SwitchProps = {
  checked: boolean;
  onChange: React.ChangeEventHandler;
};

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center select-none">
      <input
        id="switch"
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="switch" className="hidden"></label>
      <div className="peer h-6 w-11 rounded-full dark:bg-zinc-200 bg-zinc-600 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-secondary dark:after:bg-primary after:transition-all after:content-[''] peer-checked:bg-accent peer-checked:after:translate-x-full"></div>
    </label>
  );
};

export default Switch;
