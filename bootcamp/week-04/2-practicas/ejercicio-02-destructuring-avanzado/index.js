// 🔄 Ejercicio 2: Destructuring Avanzado

console.log('='.repeat(60));
console.log('🔄 EJERCICIO 2: DESTRUCTURING AVANZADO');
console.log('='.repeat(60));

// ==========================================
// DATOS DE PRUEBA
// ==========================================

const user1 = {
  id: 1,
  name: 'Ana García',
  email: 'ana@example.com',
  address: {
    street: 'Gran Vía 123',
    city: 'Madrid',
    country: 'España',
    coordinates: {
      lat: 40.4168,
      lng: -3.7038
    }
  },
  posts: [
    { id: 1, title: 'Mi primer post', content: '...' },
    { id: 2, title: 'Segundo post', content: '...' }
  ]
};

const company = {
  name: 'Tech Corp',
  employees: [
    {
      name: 'Carlos López',
      role: 'Developer',
      contact: {
        email: 'carlos@techcorp.com',
        phone: '+34 600 111 222'
      }
    },
    {
      name: 'María Rodríguez',
      role: 'Designer',
      contact: {
        email: 'maria@techcorp.com',
        phone: '+34 600 333 444'
      }
    }
  ]
};

const apiResponse = {
  status: 200,
  message: 'Success',
  data: {
    users: [
      { id: 1, name: 'User 1', active: true },
      { id: 2, name: 'User 2', active: false }
    ],
    total: 2,
    page: 1
  }
};

// ==========================================
// PARTE 1: DESTRUCTURING ANIDADO
// ==========================================

console.log('\n📋 PARTE 1: Destructuring Anidado\n');

/**
 * Extrae city y country del address del usuario
 * @param {Object} user - Usuario con address
 * @returns {Object} { city, country }
 */
const getUserLocation = user => {
  // TODO: Destructuring anidado para extraer city y country
  // Pista: const { address: { city, country } } = user;
  
  return {}; // Reemplaza esto
};

/**
 * Extrae coordenadas lat y lng
 * @param {Object} location - Objeto con coordinates
 * @returns {Object} { lat, lng }
 */
const getCoordinates = location => {
  // TODO: Extrae lat y lng de coordinates
  // Pista: const { coordinates: { lat, lng } } = location;
  
  return {}; // Reemplaza esto
};

/**
 * Obtiene el título del primer post
 * @param {Object} user - Usuario con posts
 * @returns {string} Título del primer post
 */
const getFirstPostTitle = user => {
  // TODO: Combina array y object destructuring
  // Pista: const { posts: [{ title }] } = user;
  
  return ''; // Reemplaza esto
};

// Tests
console.log('Ubicación:', getUserLocation(user1));
console.log('Coordenadas:', getCoordinates(user1.address));
console.log('Primer post:', getFirstPostTitle(user1));

// ==========================================
// PARTE 2: PARÁMETROS DE FUNCIONES
// ==========================================

console.log('\n📋 PARTE 2: Destructuring en Parámetros\n');

/**
 * Crea un objeto de usuario con destructuring en parámetros
 * @param {Object} params - { name, email, age }
 * @returns {Object} Usuario con id y timestamp
 */
const createUser = (/* TODO: destructura aquí */) => {
  // TODO: Destructura { name, email, age } directamente en parámetros
  // Pista: const createUser = ({ name, email, age }) => {
  
  return {
    id: Date.now(),
    // TODO: completa con las propiedades
    createdAt: new Date()
  };
};

/**
 * Renderiza una tarjeta con valores por defecto
 * @param {Object} config - { title, description, color, size }
 * @returns {Object} Configuración completa
 */
const renderCard = (/* TODO: destructura con defaults */) => {
  // TODO: Aplica defaults: color='blue', size='medium'
  // Pista: ({ title, description, color = 'blue', size = 'medium' })
  
  return {
    // TODO: completa
  };
};

/**
 * Configura cliente API con destructuring anidado
 * @param {Object} config - Configuración completa
 * @returns {Object} Config procesada
 */
const configureAPI = ({
  baseURL,
  timeout = 5000,
  headers: {
    authorization,
    contentType = 'application/json'
  } = {}
} = {}) => {
  // Esta función ya está completa como ejemplo
  return {
    baseURL,
    timeout,
    authorization,
    contentType
  };
};

// Tests
console.log('Usuario creado:', createUser({
  name: 'Pedro Sánchez',
  email: 'pedro@example.com',
  age: 35
}));

console.log('Card básica:', renderCard({
  title: 'Mi Tarjeta',
  description: 'Descripción'
}));

console.log('Card completa:', renderCard({
  title: 'Tarjeta Custom',
  description: 'Descripción',
  color: 'red',
  size: 'large'
}));

console.log('API Config:', configureAPI({
  baseURL: 'https://api.example.com',
  headers: {
    authorization: 'Bearer token123'
  }
}));

// ==========================================
// PARTE 3: COMBINACIONES COMPLEJAS
// ==========================================

console.log('\n📋 PARTE 3: Combinaciones Complejas\n');

/**
 * Procesa respuesta de API compleja
 * @param {Object} response - Respuesta de API
 * @returns {Object} Datos procesados
 */
const processAPIResponse = response => {
  // TODO: Extrae status, message, users (del data) y total
  // Pista: const { status, message, data: { users, total } } = response;
  
  return {}; // Reemplaza esto
};

/**
 * Extrae información del primer empleado
 * @param {Object} company - Objeto company
 * @returns {Object} Datos del primer empleado
 */
const extractEmployeeData = company => {
  // TODO: Extrae name, role, email y phone del primer empleado
  // Pista: const { employees: [{ name, role, contact: { email, phone } }] } = company;
  
  return {}; // Reemplaza esto
};

/**
 * Aplana estructura de usuario anidada
 * @param {Object} user - Usuario con estructura anidada
 * @returns {Object} Objeto plano con todas las propiedades
 */
const flattenUserData = user => {
  // TODO: Extrae todas las propiedades necesarias y devuélvelas en un objeto plano
  // Incluye: name, email, city, country, lat, lng
  
  return {}; // Reemplaza esto
};

// Tests
console.log('API Response:', processAPIResponse(apiResponse));
console.log('Primer empleado:', extractEmployeeData(company));
console.log('User aplanado:', flattenUserData(user1));

// ==========================================
// PARTE 4: ITERACIONES CON DESTRUCTURING
// ==========================================

console.log('\n📋 PARTE 4: Iteraciones\n');

/**
 * Mapea empleados a formato simple
 * @param {Object} company - Objeto company
 * @returns {Array} Array de { name, email }
 */
const mapEmployees = company => {
  // TODO: Usa map con destructuring
  // Pista: employees.map(({ name, contact: { email } }) => ({ name, email }))
  
  return []; // Reemplaza esto
};

/**
 * Filtra usuarios activos de respuesta API
 * @param {Object} response - Respuesta de API
 * @returns {Array} Solo usuarios activos
 */
const getActiveUsers = response => {
  // TODO: Extrae users y filtra por active: true
  
  return []; // Reemplaza esto
};

// Tests
console.log('Empleados mapeados:', mapEmployees(company));
console.log('Usuarios activos:', getActiveUsers(apiResponse));

// ==========================================
// VALIDACIÓN
// ==========================================

console.log('\n' + '='.repeat(60));
console.log('✅ VALIDACIÓN DE RESULTADOS');
console.log('='.repeat(60));

const validate = (testName, expected, actual) => {
  const passed = JSON.stringify(expected) === JSON.stringify(actual);
  console.log(
    passed ? `✅ ${testName}` : `❌ ${testName}`
  );
  if (!passed) {
    console.log('  Esperado:', expected);
    console.log('  Actual:', actual);
  }
};

// Validaciones
validate('getUserLocation', 
  { city: 'Madrid', country: 'España' },
  getUserLocation(user1)
);

validate('getCoordinates',
  { lat: 40.4168, lng: -3.7038 },
  getCoordinates(user1.address)
);

validate('getFirstPostTitle',
  'Mi primer post',
  getFirstPostTitle(user1)
);

const newUser = createUser({
  name: 'Test User',
  email: 'test@example.com',
  age: 25
});
console.log(newUser.name === 'Test User' && newUser.email === 'test@example.com' 
  ? '✅ createUser' 
  : '❌ createUser');

const card1 = renderCard({ title: 'Test', description: 'Desc' });
console.log(card1.color === 'blue' && card1.size === 'medium'
  ? '✅ renderCard (defaults)'
  : '❌ renderCard (defaults)');

validate('processAPIResponse',
  { status: 200, message: 'Success', users: apiResponse.data.users, total: 2 },
  processAPIResponse(apiResponse)
);

validate('extractEmployeeData',
  {
    name: 'Carlos López',
    role: 'Developer',
    email: 'carlos@techcorp.com',
    phone: '+34 600 111 222'
  },
  extractEmployeeData(company)
);

validate('flattenUserData',
  {
    name: 'Ana García',
    email: 'ana@example.com',
    city: 'Madrid',
    country: 'España',
    lat: 40.4168,
    lng: -3.7038
  },
  flattenUserData(user1)
);

console.log('\n' + '='.repeat(60));
console.log('🎓 EJERCICIO COMPLETADO');
console.log('='.repeat(60));
