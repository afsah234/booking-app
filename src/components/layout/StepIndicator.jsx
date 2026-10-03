export default function StepIndicator({ steps, current }) {
  return (
    <nav aria-label="Booking progress">
      <p className="steps__compact">Step {current + 1} of {steps.length}: {steps[current]}</p>
      <ol className="steps">
        {steps.map((label, i) => (
          <li key={label} className={i < current ? "done" : i === current ? "current" : ""}
            aria-current={i === current ? "step" : undefined}>{label}</li>
        ))}
      </ol>
    </nav>
  );
}
