/**
 * 🏋️ Ejercicio 04: Imports Avanzados
 *
 * Archivo: features/calculator.js
 */

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => (b !== 0 ? a / b : null);

export const calculate = (operation, a, b) => {
  const operations = { add, subtract, multiply, divide };
  return operations[operation]?.(a, b) ?? 'Invalid operation';
};

export default {
  name: 'Calculator',
  version: '1.0.0',
  add,
  subtract,
  multiply,
  divide,
  calculate,
};

console.log('📦 Calculator module loaded');
