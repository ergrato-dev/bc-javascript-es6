/**
 * 📘 Ejercicio 03: map() y filter()
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para aprender transformación y filtrado de arrays.
 *
 * Ejecuta: node index.js
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const users = [
  {
    id: 1,
    name: 'Ana García',
    email: 'ana@example.com',
    age: 25,
    active: true,
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    age: 17,
    active: false,
  },
  {
    id: 3,
    name: 'Carlos López',
    email: 'carlos@example.com',
    age: 30,
    active: true,
  },
  {
    id: 4,
    name: 'Diana Ruiz',
    email: 'diana@example.com',
    age: 22,
    active: true,
  },
  {
    id: 5,
    name: 'Eva Torres',
    email: 'eva@example.com',
    age: 16,
    active: false,
  },
];

const products = [
  { id: 101, name: 'Laptop', price: 999, stock: 5, category: 'electronics' },
  { id: 102, name: 'Mouse', price: 25, stock: 0, category: 'electronics' },
  { id: 103, name: 'Desk', price: 200, stock: 3, category: 'furniture' },
  { id: 104, name: 'Chair', price: 150, stock: 8, category: 'furniture' },
  { id: 105, name: 'Monitor', price: 300, stock: 0, category: 'electronics' },
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ============================================
// PASO 1: map() - Transformar Elementos
// ============================================
console.log('--- Paso 1: map() Básico ---');

// map() crea un NUEVO array transformando cada elemento
// Nunca modifica el array original
// Descomenta las siguientes líneas:

// const doubled = numbers.map(n => n * 2);
// console.log('Original:', numbers);
// console.log('Duplicados:', doubled);
//
// const squared = numbers.map(n => n ** 2);
// console.log('Cuadrados:', squared);
//
// // Extraer una propiedad de objetos
// const names = users.map(user => user.name);
// console.log('Solo nombres:', names);
//
// const emails = users.map(user => user.email);
// console.log('Solo emails:', emails);

console.log('');

// ============================================
// PASO 2: map() - Crear Nuevos Objetos
// ============================================
console.log('--- Paso 2: map() con Objetos ---');

// map() puede transformar objetos en otros objetos
// Descomenta las siguientes líneas:

// // Crear objetos simplificados
// const userCards = users.map(user => ({
//   id: user.id,
//   displayName: user.name.toUpperCase(),
//   isAdult: user.age >= 18
// }));
// console.log('User cards:', userCards);
//
// // Agregar propiedades calculadas
// const productsWithTax = products.map(p => ({
//   ...p,
//   priceWithTax: (p.price * 1.21).toFixed(2),
//   available: p.stock > 0
// }));
// console.log('Con impuestos:', productsWithTax);

console.log('');

// ============================================
// PASO 3: filter() - Filtrar Elementos
// ============================================
console.log('--- Paso 3: filter() Básico ---');

// filter() crea un NUEVO array con elementos que cumplen la condición
// Descomenta las siguientes líneas:

// const evens = numbers.filter(n => n % 2 === 0);
// console.log('Pares:', evens);
//
// const greaterThan5 = numbers.filter(n => n > 5);
// console.log('Mayores que 5:', greaterThan5);
//
// // Filtrar objetos
// const adults = users.filter(user => user.age >= 18);
// console.log('Adultos:', adults.map(u => u.name));
//
// const activeUsers = users.filter(user => user.active);
// console.log('Activos:', activeUsers.map(u => u.name));

console.log('');

// ============================================
// PASO 4: filter() - Múltiples Condiciones
// ============================================
console.log('--- Paso 4: filter() Avanzado ---');

// Puedes combinar condiciones con && y ||
// Descomenta las siguientes líneas:

// // Adultos activos
// const activeAdults = users.filter(u => u.age >= 18 && u.active);
// console.log('Adultos activos:', activeAdults.map(u => u.name));
//
// // Productos disponibles (con stock > 0)
// const available = products.filter(p => p.stock > 0);
// console.log('Disponibles:', available.map(p => p.name));
//
// // Electrónicos disponibles
// const availableElectronics = products.filter(
//   p => p.category === 'electronics' && p.stock > 0
// );
// console.log('Electrónicos disponibles:', availableElectronics.map(p => p.name));

console.log('');

// ============================================
// PASO 5: Encadenar map() y filter()
// ============================================
console.log('--- Paso 5: Encadenar map() + filter() ---');

// Puedes encadenar métodos para transformaciones complejas
// Descomenta las siguientes líneas:

// // Filtrar y luego transformar
// const adultNames = users
//   .filter(u => u.age >= 18)
//   .map(u => u.name);
// console.log('Nombres de adultos:', adultNames);
//
// // Transformar y luego filtrar
// const expensiveProducts = products
//   .map(p => ({
//     name: p.name,
//     finalPrice: p.price * 1.21
//   }))
//   .filter(p => p.finalPrice > 200);
// console.log('Productos caros (con IVA):', expensiveProducts);
//
// // Cadena más compleja
// const activeAdultEmails = users
//   .filter(u => u.age >= 18)
//   .filter(u => u.active)
//   .map(u => u.email.toLowerCase());
// console.log('Emails de adultos activos:', activeAdultEmails);

console.log('');

// ============================================
// PASO 6: map() con Índice
// ============================================
console.log('--- Paso 6: map() con Índice ---');

// El segundo parámetro del callback es el índice
// Descomenta las siguientes líneas:

// const indexed = users.map((user, index) => ({
//   position: index + 1,
//   name: user.name
// }));
// console.log('Con posición:', indexed);
//
// // Crear IDs secuenciales
// const withNewIds = products.map((p, i) => ({
//   ...p,
//   newId: `PROD-${String(i + 1).padStart(3, '0')}`
// }));
// console.log('Con nuevos IDs:', withNewIds.map(p => p.newId));

console.log('');

// ============================================
// PASO 7: Caso Práctico - Lista de Productos
// ============================================
console.log('--- Paso 7: Caso Práctico ---');

// Generar una lista de productos para mostrar en UI
// Descomenta las siguientes líneas:

// const productList = products
//   .filter(p => p.stock > 0)
//   .map(p => ({
//     id: p.id,
//     display: `${p.name} - $${p.price}`,
//     badge: p.stock < 5 ? '¡Últimas unidades!' : null
//   }));
// console.log('Lista para UI:', productList);
//
// // Generar HTML (simulado)
// const html = productList
//   .map(p => `<li>${p.display}${p.badge ? ` <span>${p.badge}</span>` : ''}</li>`)
//   .join('\n');
// console.log('HTML generado:\n', html);

console.log('');

// ============================================
// PASO 8: Filtrar Duplicados
// ============================================
console.log('--- Paso 8: Filtrar Duplicados ---');

// Usar filter con indexOf para eliminar duplicados
// Descomenta las siguientes líneas:

// const numbersWithDupes = [1, 2, 2, 3, 4, 4, 4, 5];
// const unique = numbersWithDupes.filter((num, index, array) => {
//   return array.indexOf(num) === index;
// });
// console.log('Con duplicados:', numbersWithDupes);
// console.log('Sin duplicados:', unique);
//
// // También puedes usar Set (más moderno)
// const uniqueWithSet = [...new Set(numbersWithDupes)];
// console.log('Con Set:', uniqueWithSet);
//
// // Categorías únicas de productos
// const categories = [...new Set(products.map(p => p.category))];
// console.log('Categorías:', categories);

console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has completado el ejercicio de map() y filter().');
console.log(
  'Revisa cada paso y experimenta creando tus propias transformaciones.'
);
