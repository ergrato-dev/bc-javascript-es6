/**
 * 🏋️ Ejercicio 04: Imports Avanzados
 *
 * Archivo: features/converter.js
 */

export const celsiusToFahrenheit = c => (c * 9) / 5 + 32;
export const fahrenheitToCelsius = f => ((f - 32) * 5) / 9;
export const kmToMiles = km => km * 0.621371;
export const milesToKm = miles => miles * 1.60934;
export const kgToLbs = kg => kg * 2.20462;
export const lbsToKg = lbs => lbs * 0.453592;

export default {
  name: 'Converter',
  version: '1.0.0',
  temperature: { celsiusToFahrenheit, fahrenheitToCelsius },
  distance: { kmToMiles, milesToKm },
  weight: { kgToLbs, lbsToKg },
};

console.log('📦 Converter module loaded');
