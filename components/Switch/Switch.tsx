"use client";

type SwitchProps = {
  id: string;
  isChecked: boolean;
  onToggle: () => void;
};

const Switch: React.FC<SwitchProps> = ({ id, isChecked, onToggle }) => {
  return (
    <label className="relative inline-flex items-center select-none">
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        checked={isChecked}
        onChange={onToggle}
      />
      <label htmlFor={id} className="hidden"></label>
      <span className="after:absolute after:content-[''] after:top-0 after:left-0 after:w-11 after:h-6 after:rounded-full peer-focus:after:border-blue-500 peer-focus:after:border-2 h-6 w-11 cursor-pointer rounded-full bg-gray-500 before:absolute before:content-[''] before:h-5 before:w-5 before:left-0.5 before:top-0.5 before:bg-secondary peer-checked:before:translate-x-full transition-colors before:duration-200 peer-checked:bg-accent before:rounded-full" />
    </label>
  );
};

export default Switch;
