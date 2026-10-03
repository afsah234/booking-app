import { useEffect, useState } from "react";
import { getAvailableSlots } from "../services/bookingApi";

export default function useAvailability(date) {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!date) { setSlots([]); return; }
    let ignore = false; // guards against out-of-order responses
    setLoading(true); setError(null);
    getAvailableSlots(date)
      .then((s) => !ignore && setSlots(s))
      .catch(() => !ignore && setError("Couldn't load times. Try another date or refresh."))
      .finally(() => !ignore && setLoading(false));
    return () => { ignore = true; };
  }, [date]);

  return { slots, loading, error };
}
