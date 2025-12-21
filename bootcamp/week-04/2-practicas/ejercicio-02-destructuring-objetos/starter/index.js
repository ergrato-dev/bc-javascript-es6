/**
 * 🏋️ Ejercicio 02: Destructuring de Objetos
 *
 * Completa cada ejercicio usando destructuring de objetos.
 * NO accedas con punto (obj.prop) - usa destructuring.
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const user = {
  id: 1,
  username: 'john_doe',
  email: 'john@example.com',
  age: 28,
  country: 'Spain'
};

const product = {
  product_id: 'SKU-001',
  product_name: 'Laptop Pro',
  product_price: 1299.99,
  in_stock: true
};

const employee = {
  name: 'María García',
  position: 'Developer',
  department: {
    name: 'Engineering',
    floor: 3,
    manager: {
      name: 'Carlos López',
      email: 'carlos@company.com'
    }
  },
  skills: ['JavaScript', 'Python', 'SQL']
};

const apiResponse = {
  data: { users: [{ id: 1, name: 'Ana' }] },
  status: 200,
  message: 'Success'
};

// ============================================
// EJERCICIO 2.1: Extracción Básica
// ============================================
// Extrae username, email y age del objeto user

// TODO: Tu código aquí
let username, email, age;



console.log('2.1:', username, email, age);
// Esperado: "john_doe" "john@example.com" 28

// ============================================
// EJERCICIO 2.2: Alias (Renombrar)
// ============================================
// Extrae las propiedades de product renombrándolas a camelCase:
// product_id -> productId
// product_name -> productName
// product_price -> productPrice

// TODO: Tu código aquí
let productId, productName, productPrice;



console.log('2.2:', productId, productName, productPrice);
// Esperado: "SKU-001" "Laptop Pro" 1299.99

// ============================================
// EJERCICIO 2.3: Valores por Defecto
// ============================================
// Del objeto config, extrae theme y language
// Si no existen, usa 'light' y 'en' como defaults

const config = { theme: 'dark' }; // language no existe

// TODO: Tu código aquí
let theme, language;



console.log('2.3:', theme, language);
// Esperado: "dark" "en"

// ============================================
// EJERCICIO 2.4: Alias + Default Combinados
// ============================================
// Del objeto settings, extrae:
// - api_url como apiUrl (default: 'http://localhost')
// - max_retries como maxRetries (default: 3)
// - timeout como requestTimeout (default: 5000)

const settings = { api_url: 'https://api.example.com' };

// TODO: Tu código aquí
let apiUrl, maxRetries, requestTimeout;



console.log('2.4:', apiUrl, maxRetries, requestTimeout);
// Esperado: "https://api.example.com" 3 5000

// ============================================
// EJERCICIO 2.5: Destructuring Anidado
// ============================================
// Del objeto employee, extrae:
// - El nombre del empleado como employeeName
// - El nombre del departamento como deptName
// - El email del manager como managerEmail

// TODO: Tu código aquí
let employeeName, deptName, managerEmail;



console.log('2.5:', employeeName, deptName, managerEmail);
// Esperado: "María García" "Engineering" "carlos@company.com"

// ============================================
// EJERCICIO 2.6: Rest en Objetos
// ============================================
// Del objeto user, extrae id por separado
// y el resto de propiedades en un objeto llamado userInfo

// TODO: Tu código aquí
let oderId, userInfo;



console.log('2.6:', oderId, userInfo);
// Esperado: 1 { username: "john_doe", email: "john@example.com", age: 28, country: "Spain" }

// ============================================
// EJERCICIO 2.7: En Parámetros de Función
// ============================================
// Crea una función createUser que reciba un objeto con:
// - name (requerido)
// - email (requerido)
// - role (default: 'user')
// - active (default: true)
// Retorna un objeto con esas propiedades más createdAt

// TODO: Tu código aquí
const createUser = /* completa la función */;



const newUser = createUser({ name: 'Ana', email: 'ana@mail.com' });
console.log('2.7:', newUser);
// Esperado: { name: "Ana", email: "ana@mail.com", role: "user", active: true, createdAt: [Date] }

// ============================================
// EJERCICIO 2.8: Destructuring Complejo
// ============================================
// Del objeto apiResponse, extrae:
// - El primer usuario del array users (dentro de data)
// - El status
// - El message como responseMessage

// TODO: Tu código aquí
let firstUser, status, responseMessage;



console.log('2.8:', firstUser, status, responseMessage);
// Esperado: { id: 1, name: "Ana" } 200 "Success"

// ============================================
// EJERCICIO BONUS: Caso Real
// ============================================
// Crea una función que procese un evento de click
// Extrae: target, clientX, clientY, shiftKey (default false)
// Retorna un objeto con x, y, element, withShift

const processClick = /* completa la función */;

// Simulación de evento
const mockEvent = {
  target: { id: 'btn-submit', tagName: 'BUTTON' },
  clientX: 150,
  clientY: 300,
  type: 'click'
};

console.log('BONUS:', processClick(mockEvent));
// Esperado: { x: 150, y: 300, element: { id: "btn-submit", tagName: "BUTTON" }, withShift: false }
