export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }
  return true;
}

export function validateArrayNotEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must not be empty");
  }
  return true;
}
