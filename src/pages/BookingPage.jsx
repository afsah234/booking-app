import Header from "../components/layout/Header";
import Container from "../components/layout/Container";
import BookingForm from "../features/booking/components/BookingForm";

export default function BookingPage() {
  return (
    <>
      <Header title="Book an appointment" subtitle="Pick a time, add your details, and confirm." />
      <main><Container><BookingForm /></Container></main>
    </>
  );
}
