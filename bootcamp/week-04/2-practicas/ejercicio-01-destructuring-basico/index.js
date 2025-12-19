// 📦 Ejercicio 1: Destructuring Básico

console.log('='.repeat(60));
console.log('📦 EJERCICIO 1: DESTRUCTURING BÁSICO');
console.log('='.repeat(60));

// ==========================================
// PARTE 1: DESTRUCTURING DE ARRAYS
// ==========================================

console.log('\n📋 PARTE 1: Arrays\n');

/**
 * Extrae los primeros dos elementos de un array
 * @param {Array} array - Array de entrada
 * @returns {Array} Array con los dos primeros elementos
 */
const getFirstTwo = array => {
  // TODO: Usa destructuring para extraer los primeros dos elementos
  // Pista: const [first, second] = array;
  
  return []; // Reemplaza esto con tu solución
};

/**
 * Obtiene el último elemento de un array
 * @param {Array} array - Array de entrada
 * @returns {*} Último elemento
 */
const getLastElement = array => {
  // TODO: Usa destructuring con rest operator
  // Pista: Necesitas omitir todos menos el último
  
  return null; // Reemplaza esto
};

/**
 * Intercambia los primeros dos elementos de un array
 * @param {Array} array - Array de entrada
 * @returns {Array} Array con elementos intercambiados
 */
const swapFirstTwo = array => {
  // TODO: Usa destructuring para hacer swap
  // Pista: [a, b] = [b, a]
  
  return array; // Reemplaza esto
};

/**
 * Omite el primer elemento y obtiene los siguientes dos
 * @param {Array} array - Array de entrada
 * @returns {Array} Segundo y tercer elemento
 */
const skipAndGet = array => {
  // TODO: Omite el primero usando comas
  // Pista: const [, second, third] = array;
  
  return []; // Reemplaza esto
};

// Tests para arrays
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

console.log('Array original:', colors);
console.log('Primeros dos:', getFirstTwo(colors));
console.log('Último elemento:', getLastElement(colors));
console.log('Swap primeros dos:', swapFirstTwo(['a', 'b', 'c', 'd']));
console.log('Omitir primero, obtener 2:', skipAndGet(colors));

// ==========================================
// PARTE 2: DESTRUCTURING DE OBJETOS
// ==========================================

console.log('\n📋 PARTE 2: Objetos\n');

/**
 * Extrae name, email y age de un usuario
 * @param {Object} user - Objeto de usuario
 * @returns {Object} Objeto con las propiedades extraídas
 */
const extractUserData = user => {
  // TODO: Usa destructuring para extraer name, email, age
  // Pista: const { name, email, age } = user;
  
  return {}; // Reemplaza esto
};

/**
 * Extrae datos del usuario con valores por defecto
 * @param {Object} user - Objeto de usuario
 * @returns {Object} Usuario con defaults aplicados
 */
const getUserWithDefaults = user => {
  // TODO: Aplica defaults: role='user', active=true
  // Pista: const { name, role = 'user', active = true } = user;
  
  return {}; // Reemplaza esto
};

/**
 * Renombra propiedades de un producto
 * @param {Object} product - Objeto producto
 * @returns {Object} Producto con propiedades renombradas
 */
const renameProperties = product => {
  // TODO: Renombra id→productId, name→productName
  // Pista: const { id: productId, name: productName } = product;
  
  return {}; // Reemplaza esto
};

/**
 * Extrae información de contacto anidada
 * @param {Object} user - Usuario con objeto contact
 * @returns {Object} Email y phone
 */
const getContactInfo = user => {
  // TODO: Destructuring anidado para extraer email y phone
  // Pista: const { contact: { email, phone } } = user;
  
  return {}; // Reemplaza esto
};

// Tests para objetos
const user1 = {
  id: 1,
  name: 'Ana García',
  email: 'ana@example.com',
  age: 28
};

const user2 = {
  name: 'Carlos López',
  email: 'carlos@example.com'
};

const user3 = {
  name: 'María Rodríguez',
  contact: {
    email: 'maria@example.com',
    phone: '+34 600 123 456'
  }
};

const product = {
  id: 101,
  name: 'Laptop',
  price: 999
};

console.log('Extraer datos:', extractUserData(user1));
console.log('Con defaults:', getUserWithDefaults(user2));
console.log('Renombrar:', renameProperties(product));
console.log('Contact info:', getContactInfo(user3));

// ==========================================
// PARTE 3: REST OPERATOR
// ==========================================

console.log('\n📋 PARTE 3: Rest Operator\n');

/**
 * Separa el primer elemento del resto
 * @param {Array} array - Array de entrada
 * @returns {Object} { first, rest }
 */
const separateFirstFromRest = array => {
  // TODO: Usa rest operator
  // Pista: const [first, ...rest] = array;
  
  return { first: null, rest: [] }; // Reemplaza esto
};

/**
 * Crea un objeto sin la propiedad password
 * @param {Object} user - Usuario con password
 * @returns {Object} Usuario sin password
 */
const removePassword = user => {
  // TODO: Usa rest properties para excluir password
  // Pista: const { password, ...safeUser } = user;
  
  return {}; // Reemplaza esto
};

// Tests para rest operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const userWithPassword = {
  id: 1,
  username: 'anagarcia',
  email: 'ana@example.com',
  password: 'secret123',
  role: 'admin'
};

console.log('Separar primero:', separateFirstFromRest(numbers));
console.log('Sin password:', removePassword(userWithPassword));

// ==========================================
// VALIDACIÓN
// ==========================================

console.log('\n' + '='.repeat(60));
console.log('✅ VALIDACIÓN DE RESULTADOS');
console.log('='.repeat(60));

const validate = (testName, expected, actual) => {
  const passed = JSON.stringify(expected) === JSON.stringify(actual);
  console.log(
    passed ? `✅ ${testName}` : `❌ ${testName} - Esperado: ${JSON.stringify(expected)}, Actual: ${JSON.stringify(actual)}`
  );
};

// Validaciones
validate('getFirstTwo', ['red', 'green'], getFirstTwo(colors));
validate('getLastElement', 'purple', getLastElement(colors));
validate('swapFirstTwo', ['b', 'a', 'c', 'd'], swapFirstTwo(['a', 'b', 'c', 'd']));
validate('skipAndGet', ['green', 'blue'], skipAndGet(colors));

validate('extractUserData', 
  { name: 'Ana García', email: 'ana@example.com', age: 28 },
  extractUserData(user1)
);

validate('getUserWithDefaults',
  { name: 'Carlos López', email: 'carlos@example.com', role: 'user', active: true },
  getUserWithDefaults(user2)
);

validate('renameProperties',
  { productId: 101, productName: 'Laptop', price: 999 },
  renameProperties(product)
);

validate('getContactInfo',
  { email: 'maria@example.com', phone: '+34 600 123 456' },
  getContactInfo(user3)
);

validate('separateFirstFromRest',
  { first: 1, rest: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
  separateFirstFromRest(numbers)
);

validate('removePassword',
  { id: 1, username: 'anagarcia', email: 'ana@example.com', role: 'admin' },
  removePassword(userWithPassword)
);

console.log('\n' + '='.repeat(60));
console.log('🎓 EJERCICIO COMPLETADO');
console.log('='.repeat(60));
