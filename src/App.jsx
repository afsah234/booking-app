import { BookingProvider } from "./features/booking/context/BookingContext";
import BookingPage from "./pages/BookingPage";

export default function App() {
  return (
    <BookingProvider>
      <BookingPage />
    </BookingProvider>
  );
}
