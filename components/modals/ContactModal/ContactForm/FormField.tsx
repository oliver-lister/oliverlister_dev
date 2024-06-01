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
      <div className="mt-2 flex justify-center gap-2">
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
