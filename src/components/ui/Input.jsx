import { useId } from "react";

// Renders an <input> or, with `multiline`, a <textarea>, plus label, hint and error.
export default function Input({ label, error, hint, multiline = false, ...props }) {
  const id = useId();
  const Tag = multiline ? "textarea" : "input";
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Tag id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined}
        rows={multiline ? 3 : undefined} {...props} />
      {hint && !error && <span className="hint">{hint}</span>}
      {error && <span id={`${id}-e`} className="error" role="alert">{error}</span>}
    </div>
  );
}
