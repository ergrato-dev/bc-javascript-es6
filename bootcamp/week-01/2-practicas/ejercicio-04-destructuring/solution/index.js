/*
 * Ejercicio 04: Destructuring - SOLUCIÓN
 * Objetivo: Dominar destructuring de objetos y arrays
 */

console.log('=== Ejercicio 04: Destructuring - SOLUCIÓN ===\n');

// ============================================
// PARTE 1: Destructuring de Objetos
// ============================================
console.log('--- Parte 1: Destructuring de Objetos ---');

const user = {
  firstName: 'Ana',
  lastName: 'García',
  age: 25,
  email: 'ana@example.com',
  city: 'Madrid'
};

// ✅ SOLUCIÓN: Destructuring básico
const { firstName, lastName, email } = user;

console.log('First Name:', firstName);  // Ana
console.log('Last Name:', lastName);    // García
console.log('Email:', email);            // ana@example.com
console.log('');

// ============================================
// PARTE 2: Destructuring de Arrays
// ============================================
console.log('--- Parte 2: Destructuring de Arrays ---');

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// ✅ SOLUCIÓN: Primeros 3 colores
const [primary, secondary, tertiary] = colors;

// ✅ SOLUCIÓN: Primer y tercer color (saltar segundo)
const [first, , third] = colors;

console.log('First 3 colors:', primary, secondary, tertiary);  // red green blue
console.log('First and third:', first, third);  // red blue
console.log('');

// ============================================
// PARTE 3: Valores por Defecto
// ============================================
console.log('--- Parte 3: Valores por Defecto ---');

const partialUser = {
  name: 'Carlos'
  // age y city no están definidos
};

// ✅ SOLUCIÓN: Valores por defecto
const { name, age = 18, city = 'Unknown' } = partialUser;

console.log('Name:', name);      // Carlos
console.log('Age:', age);        // 18 (default)
console.log('City:', city);      // Unknown (default)
console.log('');

// ============================================
// PARTE 4: Renombrar Variables
// ============================================
console.log('--- Parte 4: Renombrar Variables ---');

const product = {
  name: 'Laptop',
  price: 999
};

const category = {
  name: 'Electronics',
  code: 'ELEC'
};

// ✅ SOLUCIÓN: Renombrar durante destructuring
const { name: productName, price } = product;
const { name: categoryName, code } = category;

console.log('Product:', productName);    // Laptop
console.log('Category:', categoryName);  // Electronics
console.log('Price:', price);            // 999
console.log('Code:', code);              // ELEC
console.log('');

// ============================================
// PARTE 5: Destructuring Anidado
// ============================================
console.log('--- Parte 5: Destructuring Anidado ---');

const employee = {
  name: 'María',
  position: 'Developer',
  address: {
    street: 'Calle Mayor 10',
    city: 'Barcelona',
    zipCode: '08001',
    country: 'Spain'
  },
  skills: ['JavaScript', 'React', 'Node.js']
};

// ✅ SOLUCIÓN: Destructuring anidado
const {
  name: employeeName,
  address: { city: employeeCity },
  skills: [firstSkill]
} = employee;

console.log('Employee:', employeeName);       // María
console.log('City:', employeeCity);           // Barcelona
console.log('First skill:', firstSkill);      // JavaScript
console.log('');

// ============================================
// PARTE 6: Rest Pattern
// ============================================
console.log('--- Parte 6: Rest Pattern ---');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ SOLUCIÓN: Rest en arrays
const [firstNum, secondNum, ...restNumbers] = numbers;

const settings = {
  theme: 'dark',
  language: 'es',
  notifications: true,
  autoSave: true,
  fontSize: 14
};

// ✅ SOLUCIÓN: Rest en objetos
const { theme, language, ...otherSettings } = settings;

console.log('First:', firstNum);              // 1
console.log('Second:', secondNum);            // 2
console.log('Rest:', restNumbers);            // [3, 4, 5, 6, 7, 8, 9, 10]
console.log('Theme:', theme);                 // dark
console.log('Language:', language);           // es
console.log('Other settings:', otherSettings);
// { notifications: true, autoSave: true, fontSize: 14 }
console.log('');

// ============================================
// PARTE 7: Destructuring en Parámetros
// ============================================
console.log('--- Parte 7: Destructuring en Parámetros ---');

// ✅ SOLUCIÓN: Destructuring en parámetros de función
const formatUser = ({ name, age, city }) => 
  `${name} is ${age} years old and lives in ${city}`;

const testUser = { name: 'Juan', age: 30, city: 'Valencia' };
console.log(formatUser(testUser));
// Juan is 30 years old and lives in Valencia

// ✅ SOLUCIÓN: Destructuring de array en parámetros
const formatDate = ([day, month, year]) => 
  `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

console.log(formatDate([18, 12, 2025]));  // 18/12/2025
console.log('');

// ============================================
// PARTE 8: Swap Variables
// ============================================
console.log('--- Parte 8: Swap Variables ---');

let x = 10;
let y = 20;

console.log('Before swap - x:', x, 'y:', y);  // x: 10 y: 20

// ✅ SOLUCIÓN: Intercambiar con destructuring
[x, y] = [y, x];

console.log('After swap - x:', x, 'y:', y);   // x: 20 y: 10
console.log('');

// ============================================
// PARTE 9: Desafío - API Response
// ============================================
console.log('--- Parte 9: Desafío - API Response ---');

const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 123,
      profile: {
        firstName: 'Laura',
        lastName: 'Martínez',
        avatar: 'https://example.com/avatar.jpg'
      },
      settings: {
        theme: 'dark',
        notifications: true
      }
    },
    posts: [
      { id: 1, title: 'First Post', likes: 42 },
      { id: 2, title: 'Second Post', likes: 18 },
      { id: 3, title: 'Third Post', likes: 67 }
    ]
  }
};

// ✅ SOLUCIÓN: Destructuring profundo
const {
  status,
  data: {
    user: {
      profile: { firstName: userFirstName, lastName: userLastName },
      settings: { theme: userTheme }
    },
    posts: [{ title: firstPostTitle }]
  }
} = apiResponse;

console.log('Status:', status);                     // 200
console.log('User:', userFirstName, userLastName);  // Laura Martínez
console.log('Theme:', userTheme);                   // dark
console.log('First post:', firstPostTitle);         // First Post
console.log('');

// ============================================
// PARTE 10: Desafío - Función Compleja
// ============================================
console.log('--- Parte 10: Desafío - Función Compleja ---');

const orders = [
  {
    id: 1,
    customer: { name: 'Ana', email: 'ana@example.com' },
    items: [
      { product: 'Laptop', price: 999, quantity: 1 },
      { product: 'Mouse', price: 25, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: { name: 'Carlos', email: 'carlos@example.com' },
    items: [
      { product: 'Keyboard', price: 75, quantity: 1 }
    ]
  }
];

// ✅ SOLUCIÓN: Función con destructuring completo
const processOrder = ({ id, customer: { name }, items }) => {
  const totalItems = items.reduce((sum, { quantity }) => sum + quantity, 0);
  const totalPrice = items.reduce((sum, { price, quantity }) => sum + (price * quantity), 0);
  
  return {
    orderId: id,
    customerName: name,
    totalItems,
    totalPrice
  };
};

const processedOrders = orders.map(processOrder);
console.log('Processed orders:', processedOrders);
// [
//   { orderId: 1, customerName: 'Ana', totalItems: 3, totalPrice: 1049 },
//   { orderId: 2, customerName: 'Carlos', totalItems: 1, totalPrice: 75 }
// ]
console.log('');

// ============================================
// EJEMPLOS ADICIONALES
// ============================================
console.log('--- Ejemplos Adicionales ---');

// ✅ Destructuring con valores calculados
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

const { apiUrl, timeout, retries = Math.floor(timeout / 1000) } = config;
console.log('Retries:', retries);  // 5 (calculado del timeout)

// ✅ Destructuring en loops
const users = [
  { id: 1, name: 'Ana', role: 'admin' },
  { id: 2, name: 'Carlos', role: 'user' }
];

users.forEach(({ name, role }) => {
  console.log(`${name} is ${role}`);
});

// ✅ Combinar con spread
const original = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...rest } = original;
const modified = { ...rest, e: 5 };
console.log('Modified:', modified);  // { c: 3, d: 4, e: 5 }

// ✅ Destructuring con alias y defaults
const options = { width: 100 };
const { width: w = 200, height: h = 150 } = options;
console.log(`Dimensions: ${w}x${h}`);  // Dimensions: 100x150

console.log('');
console.log('=== Ejercicio Completado ===');

// ============================================
// PUNTOS CLAVE APRENDIDOS
// ============================================
/*
 * ✅ Destructuring de Objetos:
 *    - Básico: const { a, b } = obj
 *    - Renombrar: const { a: newName } = obj
 *    - Default: const { a = 10 } = obj
 *    - Anidado: const { a: { b } } = obj
 * 
 * ✅ Destructuring de Arrays:
 *    - Básico: const [a, b] = arr
 *    - Saltar: const [a, , c] = arr
 *    - Rest: const [a, ...rest] = arr
 *    - Swap: [a, b] = [b, a]
 * 
 * ✅ En Parámetros:
 *    - Función: const fn = ({ a, b }) => ...
 *    - Con defaults: const fn = ({ a = 10 }) => ...
 * 
 * ✅ Rest Pattern:
 *    - Objetos: const { a, ...rest } = obj
 *    - Arrays: const [a, ...rest] = arr
 * 
 * ✅ Mejores Prácticas:
 *    - Usar destructuring para código más limpio
 *    - Combinar con valores por defecto
 *    - Renombrar cuando haya conflictos
 *    - Perfecto para parámetros de funciones
 */
