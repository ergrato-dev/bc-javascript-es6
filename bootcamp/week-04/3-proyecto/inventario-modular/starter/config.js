/**
 * Configuration Module
 * Configuración global de la aplicación
 */

// Application configuration
export const APP_CONFIG = {
  name: 'Inventario Modular',
  version: '1.0.0',
  storageKey: 'inventory_products',
};

// Stock thresholds
export const STOCK_THRESHOLDS = {
  low: 10,
  critical: 5,
};

// TODO: Define CATEGORIES array with objects { id, name, icon }
// Categories should include: electronics, clothing, food, home, sports, other
export const CATEGORIES = [
  // { id: 'electronics', name: 'Electrónica', icon: '💻' },
  // Add more categories...
];

// Default export for convenience
export default {
  APP_CONFIG,
  STOCK_THRESHOLDS,
  CATEGORIES,
};
