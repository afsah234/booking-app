import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { useBooking } from "../context/BookingContext";
import { formatLongDate, formatTime } from "../utils/dateHelpers";

export default function BookingConfirmation() {
  const { booking, reset } = useBooking();
  return (
    <Card>
      <div className="banner" role="status">
        <h2>You're booked</h2>
        <p style={{ margin: 0 }}>Confirmation sent to {booking.customer.email}.</p>
      </div>
      <dl className="summary">
        <dt>Reference</dt><dd>{booking.id}</dd>
        <dt>When</dt><dd>{formatLongDate(booking.date)} at {formatTime(booking.time)}</dd>
        <dt>Name</dt><dd>{booking.customer.name}</dd>
      </dl>
      <div className="actions"><Button onClick={reset}>Book another appointment</Button></div>
    </Card>
  );
}
