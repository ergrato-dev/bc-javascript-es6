/*
 * Ejercicio 03: Arrow Functions - SOLUCIÓN
 * Objetivo: Dominar sintaxis y uso de arrow functions
 */

console.log('=== Ejercicio 03: Arrow Functions - SOLUCIÓN ===\n');

// ============================================
// PARTE 1: Conversión de Funciones
// ============================================
console.log('--- Parte 1: Conversión de Funciones ---');

// ✅ SOLUCIÓN: Conversión a arrow functions
const square = x => x * x;

const greet = name => `Hello ${name}`;

const isEven = number => number % 2 === 0;

const multiply = (a, b) => a * b;

console.log('Square of 5:', square(5));  // 25
console.log('Greet Ana:', greet('Ana'));  // Hello Ana
console.log('Is 4 even?', isEven(4));  // true
console.log('Multiply 3 * 4:', multiply(3, 4));  // 12
console.log('');

// ============================================
// PARTE 2: Retorno Implícito
// ============================================
console.log('--- Parte 2: Retorno Implícito ---');

// ✅ SOLUCIÓN: Arrow functions con retorno implícito

// 1. Doble de un número
const double = x => x * 2;

// 2. Convertir a mayúsculas
const toUpper = str => str.toUpperCase();

// 3. Verificar si es positivo
const isPositive = num => num > 0;

// 4. Retornar objeto (necesita paréntesis)
const createPerson = (name, age) => ({ name, age });

console.log('Double 5:', double(5));  // 10
console.log('Upper "hello":', toUpper('hello'));  // HELLO
console.log('Is -5 positive?', isPositive(-5));  // false
console.log('Create person:', createPerson('Ana', 25));  // { name: 'Ana', age: 25 }
console.log('');

// ============================================
// PARTE 3: Array Methods
// ============================================
console.log('--- Parte 3: Array Methods ---');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ SOLUCIÓN: Arrow functions con array methods

// 1. Duplicar todos los números
const doubled = numbers.map(n => n * 2);

// 2. Filtrar solo números pares
const evens = numbers.filter(n => n % 2 === 0);

// 3. Sumar todos los números
const sum = numbers.reduce((acc, n) => acc + n, 0);

// 4. Obtener solo números mayores a 5
const greaterThanFive = numbers.filter(n => n > 5);

// 5. Cuadrados de números impares
const oddSquares = numbers
  .filter(n => n % 2 !== 0)
  .map(n => n * n);

console.log('Doubled:', doubled);  // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log('Evens:', evens);  // [2, 4, 6, 8, 10]
console.log('Sum:', sum);  // 55
console.log('Greater than 5:', greaterThanFive);  // [6, 7, 8, 9, 10]
console.log('Odd squares:', oddSquares);  // [1, 9, 25, 49, 81]
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

// ✅ SOLUCIÓN: Transformación de datos

// 1. Array de nombres completos
const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);

// 2. Solo usuarios activos
const activeUsers = users.filter(user => user.active);

// 3. Array de edades
const ages = users.map(user => user.age);

// 4. Usuario mayor de 25 años
const oldestUser = users.find(user => user.age > 25);

// 5. Verificar si todos son mayores de edad
const allAdults = users.every(user => user.age >= 18);

console.log('Full names:', fullNames);
// ['Ana García', 'Carlos López', 'María Pérez', 'Juan Martínez']

console.log('Active users:', activeUsers);
// [{ firstName: 'Ana', ... }, { firstName: 'María', ... }, { firstName: 'Juan', ... }]

console.log('Ages:', ages);  // [25, 30, 28, 22]

console.log('Oldest user:', oldestUser);
// { firstName: 'Carlos', lastName: 'López', age: 30, active: false }

console.log('All adults?', allAdults);  // true
console.log('');

// ============================================
// PARTE 5: Funciones de Utilidad
// ============================================
console.log('--- Parte 5: Funciones de Utilidad ---');

// ✅ SOLUCIÓN: Funciones helper

// 1. Validador de email
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 2. Formateador de moneda
const formatCurrency = amount => `€${amount.toFixed(2)}`;

// 3. Calculador de descuento
const applyDiscount = (price, percent) => price * (1 - percent / 100);

// 4. Generador de slug
const slugify = text => text.toLowerCase().replace(/\s+/g, '-');

// 5. Truncador de texto
const truncate = (text, maxLength) => 
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

// Pruebas
console.log('Valid email?', isValidEmail('test@example.com'));  // true
console.log('Invalid email?', isValidEmail('notanemail'));  // false
console.log('Format 99.5:', formatCurrency(99.5));  // €99.50
console.log('20% off 100:', applyDiscount(100, 20));  // 80
console.log('Slugify:', slugify('Hello World Example'));  // hello-world-example
console.log('Truncate:', truncate('This is a very long text', 10));  // This is a...
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

// ✅ SOLUCIÓN: Cadena completa de operaciones
const result = products
  .filter(p => p.inStock)                          // En stock
  .filter(p => p.category === 'electronics')       // Solo electrónicos
  .map(p => ({ ...p, price: p.price * 0.8 }))     // 20% descuento
  .sort((a, b) => a.price - b.price)               // Ordenar por precio
  .map(p => ({ name: p.name, price: formatCurrency(p.price) }));  // Nombre y precio

console.log('Result:', result);
// [
//   { name: 'Mouse', price: '€20.00' },
//   { name: 'Monitor', price: '€160.00' },
//   { name: 'Laptop', price: '€799.20' }
// ]

console.log('');

// ============================================
// EJEMPLOS ADICIONALES
// ============================================
console.log('--- Ejemplos Adicionales ---');

// ✅ Arrow function con destructuring
const getUserInfo = ({ firstName, age }) => `${firstName} is ${age} years old`;
console.log(getUserInfo({ firstName: 'Ana', age: 25 }));

// ✅ Currying con arrows
const add = a => b => a + b;
const add5 = add(5);
console.log('Add 5 to 10:', add5(10));  // 15

// ✅ Arrow en sort con destructuring
const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log('Sorted by age:', sortedUsers.map(u => u.firstName));

// ✅ Array pipeline
const processNumbers = nums => nums
  .filter(n => n > 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);

console.log('Process [-1, 2, 3, 4]:', processNumbers([-1, 2, 3, 4]));  // 18

console.log('');
console.log('=== Ejercicio Completado ===');

// ============================================
// PUNTOS CLAVE APRENDIDOS
// ============================================
/*
 * ✅ Sintaxis Arrow Functions:
 *    - Un parámetro: x => x * 2
 *    - Múltiples: (a, b) => a + b
 *    - Sin parámetros: () => 'value'
 *    - Retorno implícito: x => x * 2
 *    - Retorno explícito: x => { return x * 2; }
 * 
 * ✅ Retornar Objetos:
 *    - Necesita paréntesis: x => ({ key: x })
 *    - Sin paréntesis es bloque de código
 * 
 * ✅ Array Methods:
 *    - map: Transformar elementos
 *    - filter: Filtrar elementos
 *    - reduce: Acumular valores
 *    - find: Encontrar elemento
 *    - every/some: Verificar condiciones
 * 
 * ✅ Mejores Prácticas:
 *    - Usar arrows para funciones cortas
 *    - Retorno implícito cuando sea posible
 *    - Perfecto para callbacks y array methods
 *    - Evitar en métodos de objetos (no tienen this propio)
 */
