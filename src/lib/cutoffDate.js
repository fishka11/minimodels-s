// src/lib/cutoffDate.js
export function getCutoffDate() {
  const cutoffDate = new Date();
  cutoffDate.setFullYear(cutoffDate.getFullYear() - 1);
  return cutoffDate.toISOString();
}
