/**
 * 📘 Ejercicio 02: Array.from() y Array.of()
 * Práctica guiada - Descomenta cada sección para aprender
 */

console.log('=== Ejercicio 02: Array.from() y Array.of() ===\n');

// ============================================
// PASO 1: Array.from() Básico
// ============================================
console.log('--- Paso 1: Array.from() básico ---');

// Desde un string (cada carácter es un elemento)
// Descomenta las siguientes líneas:
// const fromString = Array.from('hello');
// console.log('Desde string:', fromString);
// Esperado: ['h', 'e', 'l', 'l', 'o']

// Desde un Set (elimina duplicados automáticamente)
// const fromSet = Array.from(new Set([1, 2, 2, 3, 3, 3]));
// console.log('Desde Set:', fromSet);
// Esperado: [1, 2, 3]

console.log('');

// ============================================
// PASO 2: Convertir NodeList (simulado)
// ============================================
console.log('--- Paso 2: Convertir estructuras ---');

// Simulamos un NodeList con un objeto array-like
const nodeLikeObject = {
  0: 'div1',
  1: 'div2',
  2: 'div3',
  length: 3,
};

// Array.from convierte objetos array-like a arrays reales
// Descomenta la siguiente línea:
// const realArray = Array.from(nodeLikeObject);
// console.log('NodeList a Array:', realArray);
// Esperado: ['div1', 'div2', 'div3']

console.log('');

// ============================================
// PASO 3: Array.from() con Función de Mapeo
// ============================================
console.log('--- Paso 3: Mapeo durante creación ---');

const letters = 'abc';

// El segundo argumento transforma cada elemento
// Descomenta las siguientes líneas:
// const upperLetters = Array.from(letters, char => char.toUpperCase());
// console.log('Con mapeo:', upperLetters);
// Esperado: ['A', 'B', 'C']

// Ejemplo: multiplicar números
// const nums = [1, 2, 3];
// const doubled = Array.from(nums, n => n * 2);
// console.log('Duplicados:', doubled);
// Esperado: [2, 4, 6]

console.log('');

// ============================================
// PASO 4: Crear Secuencias Numéricas
// ============================================
console.log('--- Paso 4: Generar secuencias ---');

// { length: N } se comporta como un array de N elementos
// El primer parámetro de la función es el valor (undefined), el segundo es el índice
// Descomenta las siguientes líneas:

// const zeroToFour = Array.from({ length: 5 }, (_, index) => index);
// console.log('0 a 4:', zeroToFour);
// Esperado: [0, 1, 2, 3, 4]

// const oneToFive = Array.from({ length: 5 }, (_, i) => i + 1);
// console.log('1 a 5:', oneToFive);
// Esperado: [1, 2, 3, 4, 5]

// const evens = Array.from({ length: 5 }, (_, i) => i * 2);
// console.log('Pares:', evens);
// Esperado: [0, 2, 4, 6, 8]

console.log('');

// ============================================
// PASO 5: Generar Rangos
// ============================================
console.log('--- Paso 5: Función range ---');

// Función para generar rangos de números
// Descomenta las siguientes líneas:
// const range = (start, end) =>
//   Array.from({ length: end - start + 1 }, (_, i) => start + i);

// console.log('Range 1-5:', range(1, 5));
// Esperado: [1, 2, 3, 4, 5]

// console.log('Range 10-15:', range(10, 15));
// Esperado: [10, 11, 12, 13, 14, 15]

console.log('');

// ============================================
// PASO 6: Array.of()
// ============================================
console.log('--- Paso 6: Array.of() ---');

// Array() tiene comportamiento inconsistente:
// Descomenta las siguientes líneas:
// console.log('Array(3):', Array(3));          // [empty × 3]
// console.log('Array(1, 2):', Array(1, 2));    // [1, 2]

// Array.of() siempre crea un array con los elementos dados:
// console.log('Array.of(3):', Array.of(3));       // [3]
// console.log('Array.of(1, 2):', Array.of(1, 2)); // [1, 2]
// console.log('Array.of(1, 2, 3):', Array.of(1, 2, 3)); // [1, 2, 3]

console.log('');

// ============================================
// PASO 7: Clonar y Transformar
// ============================================
console.log('--- Paso 7: Clonar arrays ---');

const original = [1, 2, 3, 4, 5];

// Array.from crea una copia (shallow copy)
// Descomenta las siguientes líneas:
// const clone = Array.from(original);
// console.log('Clone:', clone);
// console.log('Son diferentes:', original !== clone);

// Con transformación
// const squared = Array.from(original, x => x * x);
// console.log('Cuadrados:', squared);
// Esperado: [1, 4, 9, 16, 25]

console.log('');

// ============================================
// PASO 8: Crear Matriz (Array 2D)
// ============================================
console.log('--- Paso 8: Matrices ---');

// Generar matriz de filas × columnas
// Descomenta las siguientes líneas:
// const createMatrix = (rows, cols, fill = 0) =>
//   Array.from({ length: rows }, () =>
//     Array.from({ length: cols }, () => fill)
//   );

// console.log('Matriz 2x3:', createMatrix(2, 3, 0));
// Esperado: [[0, 0, 0], [0, 0, 0]]

// console.log('Matriz 3x3:', createMatrix(3, 3, 1));
// Esperado: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

console.log('');

// ============================================
// PASO 9: Chunks (Dividir Array)
// ============================================
console.log('--- Paso 9: Dividir en chunks ---');

// Dividir un array en grupos de tamaño N
// Descomenta las siguientes líneas:
// const chunk = (arr, size) =>
//   Array.from(
//     { length: Math.ceil(arr.length / size) },
//     (_, i) => arr.slice(i * size, i * size + size)
//   );

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log('Chunks de 3:', chunk(data, 3));
// Esperado: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

// console.log('Chunks de 4:', chunk(data, 4));
// Esperado: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]

console.log('');

// ============================================
// PASO 10: Generar Datos de Prueba
// ============================================
console.log('--- Paso 10: Datos de prueba ---');

// Generar usuarios de prueba
// Descomenta las siguientes líneas:
// const generateUsers = count =>
//   Array.from({ length: count }, (_, i) => ({
//     id: i + 1,
//     name: `User ${i + 1}`,
//     email: `user${i + 1}@example.com`,
//     active: i % 2 === 0
//   }));

// console.log('Usuarios generados:', generateUsers(3));

console.log('');
console.log('=== ¡Descomenta cada sección y ejecuta de nuevo! ===');
