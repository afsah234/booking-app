import { useState } from "react";
import Button from "../../../components/ui/Button";
import { useBooking } from "../context/BookingContext";
import { createBooking } from "../services/bookingApi";

export default function ReviewStep() {
  const { date, time, customer, goTo, confirm } = useBooking();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const submit = async () => {
    setSaving(true); setError(null);
    try { confirm(await createBooking({ date, time, customer })); }
    catch { setError("We couldn't save your booking. Check your connection and try again."); setSaving(false); }
  };

  return (
    <div>
      <h2>Review and confirm</h2>
      <p className="muted">Check the details in the summary, then confirm your booking.</p>
      {error && <p className="alert" role="alert">{error}</p>}
      <div className="actions">
        <Button variant="ghost" onClick={() => goTo(1)} disabled={saving}>Back</Button>
        <Button onClick={submit} disabled={saving}>{saving ? "Confirming…" : "Confirm booking"}</Button>
      </div>
    </div>
  );
}
