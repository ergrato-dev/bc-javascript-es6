// 📦 Aplicación Principal - app.js

console.log('='.repeat(60));
console.log('📦 EJERCICIO 3: MÓDULOS BÁSICOS');
console.log('='.repeat(60));

// TODO: Importa las funciones de math
// import { add, subtract, multiply, divide, PI } from './utils/math.js';

// TODO: Importa las funciones de strings
// import { capitalize, truncate, reverse } from './utils/strings.js';

// TODO: Importa el servicio API (default export)
// import APIService from './services/api.js';

// TODO: Importa el modelo User (default export)
// import User from './models/User.js';

// ==========================================
// PRUEBAS
// ==========================================

console.log('\n📐 Pruebas de Matemáticas\n');

// TODO: Descomenta cuando hayas importado math
/*
console.log('5 + 3 =', add(5, 3));
console.log('10 - 4 =', subtract(10, 4));
console.log('6 * 7 =', multiply(6, 7));
console.log('20 / 4 =', divide(20, 4));
console.log('PI =', PI);
*/

console.log('\n✍️  Pruebas de Strings\n');

// TODO: Descomenta cuando hayas importado strings
/*
console.log('capitalize("hello") =', capitalize('hello'));
console.log('truncate("Hello World", 5) =', truncate('Hello World', 5));
console.log('reverse("JavaScript") =', reverse('JavaScript'));
*/

console.log('\n🌐 Pruebas de API Service\n');

// TODO: Descomenta cuando hayas importado APIService
/*
const api = new APIService('https://jsonplaceholder.typicode.com');

// Test GET
api.get('users/1')
  .then(user => {
    console.log('Usuario obtenido:', user.name);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Test POST
const newPost = {
  title: 'Mi nuevo post',
  body: 'Contenido del post',
  userId: 1
};

api.post('posts', newPost)
  .then(post => {
    console.log('Post creado con ID:', post.id);
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/

console.log('\n👤 Pruebas de User Model\n');

// TODO: Descomenta cuando hayas importado User
/*
const user1 = new User({
  id: 1,
  name: 'Ana García',
  email: 'ana@example.com'
});

console.log('Usuario creado:', user1.getInfo());
console.log('Iniciales:', user1.initials);

const user2 = new User({
  id: 2,
  name: 'Carlos López Martínez',
  email: 'carlos@example.com'
});

console.log('Usuario 2:', user2.getInfo());
console.log('Iniciales:', user2.initials);
*/

// ==========================================
// VALIDACIÓN
// ==========================================

console.log('\n' + '='.repeat(60));
console.log('✅ VALIDACIÓN');
console.log('='.repeat(60));

// TODO: Descomenta cuando hayas completado todos los módulos
/*
const tests = [
  { name: 'Math - add', test: () => add(2, 3) === 5 },
  { name: 'Math - PI', test: () => PI === 3.14159 },
  { name: 'Strings - capitalize', test: () => capitalize('hello') === 'Hello' },
  { name: 'Strings - reverse', test: () => reverse('abc') === 'cba' },
  { name: 'User - initials', test: () => user1.initials === 'AG' }
];

tests.forEach(({ name, test }) => {
  try {
    const passed = test();
    console.log(passed ? `✅ ${name}` : `❌ ${name}`);
  } catch (error) {
    console.log(`❌ ${name} - Error: ${error.message}`);
  }
});
*/

console.log('\n' + '='.repeat(60));

// Actualizar estado en HTML
document.getElementById('status').innerHTML = '✅ <span class="success">Módulos cargados correctamente</span>';
document.getElementById('status').innerHTML += '<br><br>Revisa la consola para ver los resultados.';
