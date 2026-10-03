import { formatTime } from "../utils/dateHelpers";

export default function TimeSlotPicker({ slots, value, onChange, loading, error, hasDate }) {
  return (
    <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
      <legend><h2>Choose a time</h2></legend>
      {!hasDate && <p className="muted">Pick a date to see open times.</p>}
      {loading && <p className="muted" role="status">Loading times…</p>}
      {error && <p className="alert" role="alert">{error}</p>}
      {hasDate && !loading && !error && (
        <div className="slots">
          {slots.map(({ time, available }) => (
            <button key={time} type="button" className="chip" disabled={!available}
              aria-pressed={value === time} onClick={() => onChange(time)}>
              {formatTime(time)}
            </button>
          ))}
        </div>
      )}
    </fieldset>
  );
}
