import { ChangeHandler, FieldError, RefCallBack } from "react-hook-form";

export interface InputProps {
  type?: string;
  id: string;
  className?: string;
  reactHookFormProps: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: RefCallBack;
  };
  isError: FieldError | undefined;
  rows?: number;
}

const defaultStyles =
  "py-2 px-3 text-md w-full rounded-lg text-primary border-2 border-primary bg-secondary-900 focus:outline-none focus:ring-0 focus:border-accent | dark:text-secondary dark:bg-zinc-400 dark:border-secondary dark:focus:border-accent";

const Input: React.FC<InputProps> = ({
  type,
  id,
  reactHookFormProps,
  isError,
  className,
  rows,
  ...rest
}) => {
  const errorStyles = !!isError ? "border-red-600 dark:border-red-600" : "";

  if (rows && !type) {
    return (
      <textarea
        {...reactHookFormProps}
        id={id}
        aria-invalid={!!isError}
        className={`${defaultStyles} ${errorStyles} ${className}`}
        {...rest}
        rows={rows}
      />
    );
  }
  if (type === "checkbox") {
    return (
      <>
        <input
          {...reactHookFormProps}
          type="checkbox"
          id={id}
          className="rounded-sm peer shrink-0 appearance-none mt-[0.5px] w-4 h-4 border-2 focus:outline-none focus:ring-0 focus:border-accent dark:focus-border-accent checked:border-0 border-primary bg-secondary checked:bg-accent | dark:border-secondary dark:bg-zinc-400 dark:checked:bg-accent dark:focus:border-accent"
        />
        <svg
          className="absolute w-4 h-4 mt-[0.5px] hidden peer-checked:block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </>
    );
  }

  return (
    <input
      {...reactHookFormProps}
      id={id}
      type={type}
      aria-invalid={!!isError}
      autoComplete="true"
      className={`${defaultStyles} ${errorStyles} ${className}`}
      {...rest}
    />
  );
};

export default Input;
