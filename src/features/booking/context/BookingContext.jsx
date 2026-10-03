import { createContext, useContext, useMemo, useReducer } from "react";

export const STEPS = ["Date & time", "Your details", "Review", "Confirmed"];

const initial = { step: 0, date: null, time: null, customer: { name: "", email: "", phone: "", notes: "" }, booking: null };

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATE": return { ...state, date: action.date, time: null };
    case "SET_TIME": return { ...state, time: action.time };
    case "SET_FIELD": return { ...state, customer: { ...state.customer, [action.field]: action.value } };
    case "GO": return { ...state, step: action.step };
    case "CONFIRMED": return { ...state, booking: action.booking, step: 3 };
    case "RESET": return initial;
    default: return state;
  }
}

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const actions = useMemo(() => ({
    setDate: (date) => dispatch({ type: "SET_DATE", date }),
    setTime: (time) => dispatch({ type: "SET_TIME", time }),
    setField: (field, value) => dispatch({ type: "SET_FIELD", field, value }),
    goTo: (step) => dispatch({ type: "GO", step }),
    confirm: (booking) => dispatch({ type: "CONFIRMED", booking }),
    reset: () => dispatch({ type: "RESET" }),
  }), []);
  return <BookingContext.Provider value={{ ...state, ...actions }}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}
