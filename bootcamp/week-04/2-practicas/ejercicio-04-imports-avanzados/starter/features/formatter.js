/**
 * 🏋️ Ejercicio 04: Imports Avanzados
 *
 * Archivo: features/formatter.js
 */

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatDate = (date, locale = 'es-ES') => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const formatNumber = (num, decimals = 2) => {
  return Number(num).toFixed(decimals);
};

export default {
  name: 'Formatter',
  version: '1.0.0',
  formatCurrency,
  formatDate,
  formatNumber,
};

console.log('📦 Formatter module loaded');
