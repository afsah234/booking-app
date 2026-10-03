import { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { useBooking } from "../context/BookingContext";
import { validateCustomer } from "../utils/validation";

export default function CustomerDetailsForm() {
  const { customer, setField, goTo } = useBooking();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const change = (field) => (e) => {
    setField(field, e.target.value);
    if (touched) setErrors(validateCustomer({ ...customer, [field]: e.target.value }));
  };

  const next = (e) => {
    e.preventDefault();
    const found = validateCustomer(customer);
    setErrors(found); setTouched(true);
    if (Object.keys(found).length === 0) goTo(2);
  };

  return (
    <form onSubmit={next} noValidate>
      <h2>Your details</h2>
      <Input label="Full name" autoComplete="name" value={customer.name} onChange={change("name")} error={errors.name} />
      <Input label="Email" type="email" autoComplete="email" value={customer.email} onChange={change("email")}
        error={errors.email} hint="We'll send your confirmation here." />
      <Input label="Phone" type="tel" autoComplete="tel" value={customer.phone} onChange={change("phone")} error={errors.phone} />
      <Input label="Notes (optional)" multiline value={customer.notes} onChange={change("notes")} />
      <div className="actions">
        <Button variant="ghost" onClick={() => goTo(0)}>Back</Button>
        <button type="submit" className="btn">Review booking</button>
      </div>
    </form>
  );
}
