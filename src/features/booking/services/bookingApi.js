// Mock API. Replace the bodies with fetch() calls when a backend exists;
// nothing else in the app needs to change.
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const ALL_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"];

// Deterministic "taken" slots per date so the UI is stable between renders.
const isTaken = (iso, i) => (iso.length * 7 + Number(iso.slice(-2)) * 3 + i * 5) % 4 === 0;

export async function getAvailableSlots(iso) {
  await wait(400);
  return ALL_SLOTS.map((time, i) => ({ time, available: !isTaken(iso, i) }));
}

export async function createBooking({ date, time, customer }) {
  await wait(700);
  return { id: "BK-" + Math.random().toString(36).slice(2, 8).toUpperCase(), date, time, customer, createdAt: new Date().toISOString() };
}
