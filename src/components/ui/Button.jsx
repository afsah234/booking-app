export default function Button({ variant = "primary", className = "", ...props }) {
  const v = variant === "ghost" ? "btn--ghost" : "";
  return <button type="button" className={`btn ${v} ${className}`} {...props} />;
}
