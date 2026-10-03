import { useMemo } from "react";
import { getBookableDays } from "../utils/dateHelpers";

export default function DatePicker({ value, onChange }) {
  const days = useMemo(() => getBookableDays(14), []);
  return (
    <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
      <legend><h2>Choose a date</h2></legend>
      <div className="dates">
        {days.map(({ iso, date, closed }) => (
          <button key={iso} type="button" className="chip" disabled={closed}
            aria-pressed={value === iso} onClick={() => onChange(iso)}
            aria-label={date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }) + (closed ? ", closed" : "")}>
            {date.toLocaleDateString(undefined, { weekday: "short" })}
            <small>{date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}</small>
          </button>
        ))}
      </div>
    </fieldset>
  );
}
