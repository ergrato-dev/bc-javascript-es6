/**
 * UI Render Module
 * Functions for rendering UI components
 */

// TODO: Import dependencies
// import { formatPrice, formatStock, formatDate } from '../utils/index.js';
// import { CATEGORIES } from '../config.js';

/**
 * Render products table
 * TODO: Use destructuring in iteration
 * @param {Array} products
 * @param {HTMLElement} container
 */
export const renderProducts = (products, container) => {
  // TODO: Clear container and render products
  // - If empty, show empty state message
  // - For each product, create table row
  // - Use destructuring: for (const { id, name, price, quantity } of products)
};

/**
 * Create product row HTML
 * TODO: Use destructuring in parameter
 * @param {Object} product
 * @returns {string} - HTML string
 */
export const createProductRow = ({ id, name, category, price, quantity }) => {
  // TODO: Create and return table row HTML
  // - Use template literals
  // - Include edit and delete buttons
  // - Apply stock status class
};

/**
 * Render category options in select elements
 * @param {Array<HTMLSelectElement>} selects - Select elements to populate
 */
export const renderCategoryOptions = selects => {
  // TODO: Populate select elements with category options
  // - Use CATEGORIES from config
  // - Create option elements
};

/**
 * Update product count badge
 * @param {number} count
 */
export const updateProductCount = count => {
  // TODO: Update the product count badge
  const badge = document.getElementById('product-count');
  if (badge) {
    badge.textContent = `${count} producto${count !== 1 ? 's' : ''}`;
  }
};

/**
 * Show notification message
 * @param {string} message
 * @param {string} type - 'success' | 'error' | 'info'
 */
export const showNotification = (message, type = 'info') => {
  // TODO: Create and show notification element
  // - Auto-dismiss after 3 seconds
};

/**
 * Render reports section
 * TODO: Use destructuring for stats parameter
 * @param {Object} stats - Statistics data
 * @param {HTMLElement} container
 */
export const renderReports = (stats, container) => {
  // TODO: Render report cards with statistics
  // - Total products
  // - Total value
  // - Low stock count
  // - Categories breakdown
};
