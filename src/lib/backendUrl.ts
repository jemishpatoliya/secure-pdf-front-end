export const BACKEND_URL = String(
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'
).replace(/\/$/, '');
