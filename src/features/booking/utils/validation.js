const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+()\-\s\d]{7,20}$/;

export function validateCustomer({ name, email, phone }) {
  const errors = {};
  if (!name.trim()) errors.name = "Enter your full name.";
  if (!email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL.test(email)) errors.email = "Enter a valid email, like name@example.com.";
  if (!phone.trim()) errors.phone = "Enter your phone number.";
  else if (!PHONE.test(phone)) errors.phone = "Use 7–20 digits; +, spaces, dashes and brackets are fine.";
  return errors;
}
