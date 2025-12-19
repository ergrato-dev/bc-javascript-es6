/*
 * Ejercicio 03: Arrow Functions
 * Objetivo: Dominar sintaxis y uso de arrow functions
 */

console.log('=== Ejercicio 03: Arrow Functions ===\n');

// ============================================
// PARTE 1: Conversión de Funciones
// ============================================
console.log('--- Parte 1: Conversión de Funciones ---');

// TODO: Convertir estas funciones a arrow functions

function square(x) {
  return x * x;
}

function greet(name) {
  return `Hello ${name}`;
}

function isEven(number) {
  return number % 2 === 0;
}

function multiply(a, b) {
  return a * b;
}

console.log('Square of 5:', square(5));
console.log('Greet Ana:', greet('Ana'));
console.log('Is 4 even?', isEven(4));
console.log('Multiply 3 * 4:', multiply(3, 4));
console.log('');

// ============================================
// PARTE 2: Retorno Implícito
// ============================================
console.log('--- Parte 2: Retorno Implícito ---');

// TODO: Crear arrow functions con retorno implícito

// 1. Función que calcule el doble de un número


// 2. Función que convierta a mayúsculas


// 3. Función que verifique si un número es positivo


// 4. Función que retorne objeto { name, age }


console.log('');

// ============================================
// PARTE 3: Array Methods
// ============================================
console.log('--- Parte 3: Array Methods ---');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Usa arrow functions con métodos de array

// 1. Duplicar todos los números (map)
const doubled = /* tu código aquí */;

// 2. Filtrar solo números pares (filter)
const evens = /* tu código aquí */;

// 3. Sumar todos los números (reduce)
const sum = /* tu código aquí */;

// 4. Obtener solo números mayores a 5 (filter)
const greaterThanFive = /* tu código aquí */;

// 5. Cuadrados de números impares (filter + map)
const oddSquares = /* tu código aquí */;

console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum:', sum);
console.log('Greater than 5:', greaterThanFive);
console.log('Odd squares:', oddSquares);
console.log('');

// ============================================
// PARTE 4: Transformación de Datos
// ============================================
console.log('--- Parte 4: Transformación de Datos ---');

const users = [
  { firstName: 'Ana', lastName: 'García', age: 25, active: true },
  { firstName: 'Carlos', lastName: 'López', age: 30, active: false },
  { firstName: 'María', lastName: 'Pérez', age: 28, active: true },
  { firstName: 'Juan', lastName: 'Martínez', age: 22, active: true }
];

// TODO: Usa arrow functions para transformar datos

// 1. Obtener array de nombres completos
const fullNames = /* tu código aquí */;

// 2. Filtrar solo usuarios activos
const activeUsers = /* tu código aquí */;

// 3. Obtener array de edades
const ages = /* tu código aquí */;

// 4. Encontrar usuario mayor de 25 años
const oldestUser = /* tu código aquí */;

// 5. Verificar si todos son mayores de edad
const allAdults = /* tu código aquí */;

console.log('Full names:', fullNames);
console.log('Active users:', activeUsers);
console.log('Ages:', ages);
console.log('Oldest user:', oldestUser);
console.log('All adults?', allAdults);
console.log('');

// ============================================
// PARTE 5: Funciones de Utilidad
// ============================================
console.log('--- Parte 5: Funciones de Utilidad ---');

// TODO: Crear funciones helper con arrow functions

// 1. Validador de email


// 2. Formateador de moneda


// 3. Calculador de descuento


// 4. Generador de slug


// 5. Truncador de texto


// Prueba tus funciones aquí

console.log('');

// ============================================
// PARTE 6: Desafío - Cadena de Operaciones
// ============================================
console.log('--- Parte 6: Desafío - Cadena de Operaciones ---');

const products = [
  { name: 'Laptop', price: 999, category: 'electronics', inStock: true },
  { name: 'Mouse', price: 25, category: 'electronics', inStock: true },
  { name: 'Desk', price: 300, category: 'furniture', inStock: false },
  { name: 'Chair', price: 150, category: 'furniture', inStock: true },
  { name: 'Monitor', price: 200, category: 'electronics', inStock: true }
];

// TODO: Crear cadena de operaciones que:
// 1. Filtre productos en stock
// 2. Filtre solo electrónicos
// 3. Aplique 20% de descuento
// 4. Ordene por precio (menor a mayor)
// 5. Retorne array de nombres y precios

const result = /* tu código aquí */;

console.log('Result:', result);
console.log('');

console.log('=== Ejercicio Completado ===');
