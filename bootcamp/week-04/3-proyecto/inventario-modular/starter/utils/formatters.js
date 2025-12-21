/**
 * Formatters Utility Module
 * Functions for formatting data
 */

/**
 * Format price as currency
 * @param {number} price
 * @param {string} currency - Currency code
 * @returns {string}
 */
export const formatPrice = (price, currency = 'USD') => {
  // TODO: Use Intl.NumberFormat for currency formatting
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency,
  }).format(price);
};

/**
 * Format date
 * @param {Date|string} date
 * @returns {string}
 */
export const formatDate = date => {
  // TODO: Use Intl.DateTimeFormat
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date));
};

/**
 * Format quantity with stock status
 * TODO: Use destructuring for options
 * @param {number} quantity
 * @param {Object} options - { lowThreshold, criticalThreshold }
 * @returns {Object} - { text, className }
 */
export const formatStock = (
  quantity,
  { lowThreshold = 10, criticalThreshold = 5 } = {}
) => {
  // TODO: Return object with formatted text and CSS class
  // - 'stock-out' if quantity === 0
  // - 'stock-low' if quantity <= lowThreshold
  // - 'stock-ok' otherwise
};

/**
 * Truncate text
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export const truncate = (text, maxLength = 50) => {
  // TODO: Truncate text with ellipsis if too long
};
