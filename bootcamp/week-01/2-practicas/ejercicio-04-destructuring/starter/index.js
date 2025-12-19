/*
 * Ejercicio 04: Destructuring
 * Objetivo: Dominar destructuring de objetos y arrays
 */

console.log('=== Ejercicio 04: Destructuring ===\n');

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

// TODO: Extrae firstName, lastName y email usando destructuring


// TODO: Muestra las variables extraídas
console.log(/* tus variables aquí */);
console.log('');

// ============================================
// PARTE 2: Destructuring de Arrays
// ============================================
console.log('--- Parte 2: Destructuring de Arrays ---');

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// TODO: Extrae los primeros 3 colores


// TODO: Extrae primer y tercer color (salta el segundo)


// TODO: Muestra los resultados
console.log(/* tus variables aquí */);
console.log('');

// ============================================
// PARTE 3: Valores por Defecto
// ============================================
console.log('--- Parte 3: Valores por Defecto ---');

const partialUser = {
  name: 'Carlos'
  // age y city no están definidos
};

// TODO: Extrae name, age (default 18) y city (default 'Unknown')


console.log(/* tus variables aquí */);
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

// TODO: Extrae name de product como productName
// TODO: Extrae name de category como categoryName


console.log(/* tus variables aquí */);
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

// TODO: Extrae name, city (de address) y la primera skill


console.log(/* tus variables aquí */);
console.log('');

// ============================================
// PARTE 6: Rest Pattern
// ============================================
console.log('--- Parte 6: Rest Pattern ---');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Extrae primero, segundo y el resto


const settings = {
  theme: 'dark',
  language: 'es',
  notifications: true,
  autoSave: true,
  fontSize: 14
};

// TODO: Extrae theme y language, el resto en otherSettings


console.log(/* tus variables aquí */);
console.log('');

// ============================================
// PARTE 7: Destructuring en Parámetros
// ============================================
console.log('--- Parte 7: Destructuring en Parámetros ---');

// TODO: Crea función que reciba objeto { name, age, city }
// y retorne string formateado usando destructuring en parámetros
const formatUser = /* tu código aquí */ => {
  // ...
};

const testUser = { name: 'Juan', age: 30, city: 'Valencia' };
console.log(formatUser(testUser));

// TODO: Crea función que reciba array [day, month, year]
// y retorne fecha formateada DD/MM/YYYY
const formatDate = /* tu código aquí */ => {
  // ...
};

console.log(formatDate([18, 12, 2025]));
console.log('');

// ============================================
// PARTE 8: Swap Variables
// ============================================
console.log('--- Parte 8: Swap Variables ---');

let x = 10;
let y = 20;

console.log('Before swap - x:', x, 'y:', y);

// TODO: Intercambia los valores de x e y usando destructuring


console.log('After swap - x:', x, 'y:', y);
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

// TODO: Extrae usando destructuring:
// - status
// - firstName y lastName (de user.profile)
// - theme (de user.settings)
// - El título del primer post


console.log(/* tus variables aquí */);
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

// TODO: Crea función que procese cada order y retorne:
// {
//   orderId: id,
//   customerName: name,
//   totalItems: número total de items,
//   totalPrice: precio total
// }
const processOrder = /* tu código aquí */ => {
  // Usa destructuring en el parámetro y en el cuerpo
  // ...
};

const processedOrders = orders.map(processOrder);
console.log('Processed orders:', processedOrders);
console.log('');

console.log('=== Ejercicio Completado ===');
