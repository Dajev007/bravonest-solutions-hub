import React, { useRef } from "react";

/**
 * EmailFormExample
 * Demonstrates a corrected form using Tailwind `peer` utilities so the
 * validation message becomes visible when the input is invalid.
 *
 * - Uses native browser validation (`type="email" required`) together with
 *   `peer` + `peer-invalid:visible` classes.
 * - `noValidate` is NOT set on the form so the browser can participate in
 *   validation; we call `reportValidity()` to trigger UI feedback when needed.
 */
const EmailFormExample: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // If form is invalid, ask the browser to show its native feedback
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // TODO: replace with real submit logic
    alert("Email submitted: " + new FormData(form).get("email"));
    form.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md">
      <label className="block">
        <span className="block text-sm font-medium text-foreground mb-1">Email</span>
        <input
          name="email"
          type="email"
          required
          className={
            "peer w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground transition-colors " +
            "focus:border-sky-500 focus:outline focus:outline-sky-500 invalid:border-pink-500 invalid:text-pink-600"
          }
          placeholder="you@company.com"
        />

        <p className="mt-1 text-xs text-pink-600 invisible peer-invalid:visible">Please provide a valid email address.</p>
      </label>

      <div className="mt-4">
        <button type="submit" className="btn-gradient px-4 py-2 text-sm">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmailFormExample;
