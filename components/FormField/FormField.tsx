type FormFieldProps = {
  children: React.ReactNode;
  label: string;
  htmlFor: string;
  errorMessage: string | undefined;
  checkbox?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  htmlFor,
  errorMessage,
  checkbox,
}) => {
  if (checkbox) {
    return (
      <div className="flex gap-2 items-center">
        {children}
        <label htmlFor={htmlFor} className="text-sm">
          {label}
        </label>
        {errorMessage && (
          <p
            data-testid="error-message"
            className="text-xs italic text-red-600 w-full h-4 caret-transparent"
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-1">
      <label htmlFor={htmlFor} className="text-sm">
        {label}
      </label>
      {children}
      {errorMessage && (
        <p
          data-testid="error-message"
          className="text-xs italic text-red-600 w-full h-4 caret-transparent"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormField;
