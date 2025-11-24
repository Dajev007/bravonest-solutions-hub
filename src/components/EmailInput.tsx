import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import clsx from "clsx";

type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
};

const baseClasses =
  "w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground transition-colors disabled:cursor-not-allowed";

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(function EmailInput(
  { label, className, errorMessage = "Please enter a valid email address.", required, disabled, ...props },
  ref
) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const currentValue = inputRef.current?.value ?? (typeof props.value === "string" ? props.value : "");

    // required check
    if (required && (!currentValue || currentValue.trim() === "")) {
      setIsValid(false);
      return false;
    }

    // native validity (built-in constraints)
    const nativeValid = inputRef.current ? inputRef.current.checkValidity() : true;

    // regex email check (ensure a valid-looking email)
    const regexValid = !currentValue || emailRegex.test(currentValue.trim());

    const valid = nativeValid && regexValid;
    setIsValid(valid);
    return valid;
  };

  return (
    <div>
      {label ? (
        <label className="block text-sm font-medium text-foreground mb-1">{label}</label>
      ) : null}

      <input
        {...props}
        ref={inputRef}
        type="email"
        required={required}
        disabled={disabled}
        className={clsx(
          baseClasses,
          className,
          // focus + normal state
          "focus:border-sky-500 focus:outline focus:outline-sky-500",
          // invalid state styles (applied when touched and invalid)
          touched && !isValid && "border-pink-500 text-pink-600 focus:border-pink-500 focus:outline-pink-500",
          // disabled styles
          disabled &&
            "disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
        )}
        onBlur={(e) => {
          setTouched(true);
          validate();
          if (props.onBlur) props.onBlur(e as any);
        }}
        onChange={(e) => {
          if (touched) validate();
          if (props.onChange) props.onChange(e as any);
        }}
        placeholder={props.placeholder ?? "you@company.com"}
        aria-invalid={!isValid}
      />

      {touched && !isValid ? (
        <p role="alert" className="mt-1 text-xs text-pink-600">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
});

export default EmailInput;
