export const toISODate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

// Parse "YYYY-MM-DD" as a local date (avoids UTC off-by-one bugs).
export const fromISODate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export function getBookableDays(count = 14) {
  const days = [];
  const today = new Date();
  for (let i = 1; days.length < count; i++) {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    days.push({ iso: toISODate(d), date: d, closed: d.getDay() === 0 }); // closed Sundays
  }
  return days;
}

export const formatLongDate = (iso) =>
  fromISODate(iso).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });

export const formatTime = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return new Date(2000, 0, 1, h, m).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
};
