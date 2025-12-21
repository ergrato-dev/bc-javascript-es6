/**
 * Validators Utility Module
 * Functions for validating data
 */

/**
 * Validate product data
 * TODO: Use destructuring in parameter
 * @param {Object} productData
 * @returns {Object} - { isValid, errors }
 */
export const validateProduct = ({ name, category, price, quantity } = {}) => {
  const errors = [];

  // TODO: Implement validation
  // - name: required, min 2 characters
  // - category: required
  // - price: required, must be >= 0
  // - quantity: required, must be >= 0, must be integer

  if (!name || name.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }

  // Add more validations...

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate price
 * @param {*} value
 * @returns {boolean}
 */
export const isValidPrice = value => {
  // TODO: Check if value is a valid price (number >= 0)
};

/**
 * Validate quantity
 * @param {*} value
 * @returns {boolean}
 */
export const isValidQuantity = value => {
  // TODO: Check if value is a valid quantity (integer >= 0)
};

/**
 * Sanitize string input
 * @param {string} input
 * @returns {string}
 */
export const sanitize = input => {
  // TODO: Trim and escape HTML characters
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
