import Card from "../../../components/ui/Card";
import { useBooking } from "../context/BookingContext";
import { formatLongDate, formatTime } from "../utils/dateHelpers";

export default function BookingSummary({ title = "Your booking" }) {
  const { date, time, customer } = useBooking();
  const row = (label, value) => value && <><dt>{label}</dt><dd>{value}</dd></>;
  return (
    <Card as="aside" className="summary" aria-label={title}>
      <h2>{title}</h2>
      <dl>
        {row("Date", date && formatLongDate(date))}
        {row("Time", time && formatTime(time))}
        {row("Name", customer.name)}
        {row("Email", customer.email)}
        {row("Phone", customer.phone)}
        {row("Notes", customer.notes)}
      </dl>
      {!date && <p className="muted">Nothing selected yet.</p>}
    </Card>
  );
}
