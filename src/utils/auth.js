const STORAGE_KEY = "dashboard_user";

export function saveUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function loadUser() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function clearUser() {
  localStorage.removeItem(STORAGE_KEY);
}

export function formatDate(date = new Date()) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
