import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import StepIndicator from "../../../components/layout/StepIndicator";
import { STEPS, useBooking } from "../context/BookingContext";
import useAvailability from "../hooks/useAvailability";
import DatePicker from "./DatePicker";
import TimeSlotPicker from "./TimeSlotPicker";
import CustomerDetailsForm from "./CustomerDetailsForm";
import ReviewStep from "./ReviewStep";
import BookingSummary from "./BookingSummary";
import BookingConfirmation from "./BookingConfirmation";

// Conductor: renders the step that matches `step` and the summary sidebar.
export default function BookingForm() {
  const { step, date, time, setDate, setTime, goTo } = useBooking();
  const { slots, loading, error } = useAvailability(date);

  if (step === 3) return <BookingConfirmation />;

  return (
    <>
      <StepIndicator steps={STEPS} current={step} />
      <div className="layout layout--with-summary">
        <Card>
          {step === 0 && (
            <>
              <div className="pickers">
                <DatePicker value={date} onChange={setDate} />
                <TimeSlotPicker slots={slots} value={time} onChange={setTime}
                  loading={loading} error={error} hasDate={!!date} />
              </div>
              <div className="actions" style={{ justifyContent: "flex-end" }}>
                <Button disabled={!date || !time} onClick={() => goTo(1)}>Continue</Button>
              </div>
            </>
          )}
          {step === 1 && <CustomerDetailsForm />}
          {step === 2 && <ReviewStep />}
        </Card>
        <BookingSummary />
      </div>
    </>
  );
}
