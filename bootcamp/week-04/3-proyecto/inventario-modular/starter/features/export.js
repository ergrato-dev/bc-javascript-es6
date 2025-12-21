/**
 * Export Feature Module
 * Lazy loaded module for exporting inventory data
 * This module is loaded on-demand using dynamic imports
 */

/**
 * Export products to JSON
 * @param {Array} products
 * @returns {string} - JSON string
 */
export const toJSON = products => {
  // TODO: Convert products to formatted JSON string
  return JSON.stringify(products, null, 2);
};

/**
 * Export products to CSV
 * TODO: Use destructuring in iteration
 * @param {Array} products
 * @returns {string} - CSV string
 */
export const toCSV = products => {
  // TODO: Convert products to CSV format
  // - Header row: name,category,price,quantity,total
  // - Data rows for each product

  const headers = ['name', 'category', 'price', 'quantity', 'total'];
  const headerRow = headers.join(',');

  // TODO: Generate data rows using destructuring
  // const rows = products.map(({ name, category, price, quantity }) => { ... });

  return headerRow;
};

/**
 * Download file
 * @param {string} content - File content
 * @param {string} filename - File name
 * @param {string} type - MIME type
 */
export const downloadFile = (content, filename, type = 'application/json') => {
  // TODO: Create blob and trigger download
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Export and download as JSON
 * @param {Array} products
 */
export const exportJSON = products => {
  const content = toJSON(products);
  const filename = `inventory_${Date.now()}.json`;
  downloadFile(content, filename, 'application/json');
};

/**
 * Export and download as CSV
 * @param {Array} products
 */
export const exportCSV = products => {
  const content = toCSV(products);
  const filename = `inventory_${Date.now()}.csv`;
  downloadFile(content, filename, 'text/csv');
};

// Default export
export default {
  toJSON,
  toCSV,
  exportJSON,
  exportCSV,
  downloadFile,
};

// Log when module is loaded (for demonstrating lazy loading)
console.log('📤 Export module loaded!');
