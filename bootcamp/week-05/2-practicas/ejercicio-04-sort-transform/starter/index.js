/**
 * 📘 Ejercicio 04: Sort y Transformaciones
 * Práctica guiada - Descomenta cada sección para aprender
 */

console.log('=== Ejercicio 04: Sort y Transformaciones ===\n');

// ============================================
// PASO 1: El Problema de sort() por Defecto
// ============================================
console.log('--- Paso 1: Problema de sort() ---');

const numbersDefault = [10, 2, 30, 1, 25, 5];

// sort() por defecto convierte a string y ordena alfabéticamente
// Descomenta las siguientes líneas:
// const badSort = [...numbersDefault].sort();
// console.log('sort() por defecto:', badSort);
// Resultado incorrecto: [1, 10, 2, 25, 30, 5]

console.log('');

// ============================================
// PASO 2: Comparador Numérico
// ============================================
console.log('--- Paso 2: Ordenamiento numérico ---');

const numbers = [10, 2, 30, 1, 25, 5, 100, 8];

// (a, b) => a - b → ascendente
// (a, b) => b - a → descendente
// Descomenta las siguientes líneas:
// const ascending = [...numbers].sort((a, b) => a - b);
// const descending = [...numbers].sort((a, b) => b - a);

// console.log('Ascendente:', ascending);
// Esperado: [1, 2, 5, 8, 10, 25, 30, 100]

// console.log('Descendente:', descending);
// Esperado: [100, 30, 25, 10, 8, 5, 2, 1]

console.log('');

// ============================================
// PASO 3: Ordenar Strings (Case-Insensitive)
// ============================================
console.log('--- Paso 3: Strings case-insensitive ---');

const names = ['María', 'ana', 'Carlos', 'LUIS', 'pedro'];

// localeCompare maneja acentos y mayúsculas
// Descomenta las siguientes líneas:
// const sortedNames = [...names].sort((a, b) =>
//   a.toLowerCase().localeCompare(b.toLowerCase())
// );

// console.log('Nombres ordenados:', sortedNames);
// Esperado: ['ana', 'Carlos', 'LUIS', 'María', 'pedro']

console.log('');

// ============================================
// PASO 4: Ordenar Objetos por Propiedad
// ============================================
console.log('--- Paso 4: Objetos por propiedad ---');

const products = [
  { name: 'Laptop', price: 1000, rating: 4.5 },
  { name: 'Phone', price: 500, rating: 4.8 },
  { name: 'Tablet', price: 300, rating: 4.2 },
  { name: 'Watch', price: 200, rating: 4.9 },
];

// Accede a la propiedad en el comparador
// Descomenta las siguientes líneas:
// const byPriceAsc = [...products].sort((a, b) => a.price - b.price);
// console.log('Por precio:', byPriceAsc.map(p => `${p.name}: $${p.price}`));

// const byRatingDesc = [...products].sort((a, b) => b.rating - a.rating);
// console.log('Por rating:', byRatingDesc.map(p => `${p.name}: ${p.rating}`));

// const byName = [...products].sort((a, b) => a.name.localeCompare(b.name));
// console.log('Por nombre:', byName.map(p => p.name));

console.log('');

// ============================================
// PASO 5: Ordenamiento Multi-criterio
// ============================================
console.log('--- Paso 5: Multi-criterio ---');

const employees = [
  { name: 'Ana', dept: 'IT', salary: 5000 },
  { name: 'Luis', dept: 'HR', salary: 4000 },
  { name: 'María', dept: 'IT', salary: 5000 },
  { name: 'Carlos', dept: 'HR', salary: 4000 },
  { name: 'Pedro', dept: 'IT', salary: 4500 },
];

// Si el primer criterio es igual (0), evalúa el segundo
// Descomenta las siguientes líneas:
// const byDeptAndSalary = [...employees].sort((a, b) => {
//   const deptCompare = a.dept.localeCompare(b.dept);
//   if (deptCompare !== 0) return deptCompare;
//   return b.salary - a.salary;  // Mayor salario primero dentro del mismo dept
// });

// console.log('Por dept + salario:');
// byDeptAndSalary.forEach(e => console.log(`  ${e.dept} - ${e.name}: $${e.salary}`));

console.log('');

// ============================================
// PASO 6: Manejar null/undefined
// ============================================
console.log('--- Paso 6: Manejar nulls ---');

const scores = [
  { name: 'Ana', score: 85 },
  { name: 'Luis', score: null },
  { name: 'María', score: 92 },
  { name: 'Carlos', score: undefined },
  { name: 'Pedro', score: 78 },
];

// Nulls van al final
// Descomenta las siguientes líneas:
// const sortedScores = [...scores].sort((a, b) => {
//   if (a.score == null) return 1;   // a al final
//   if (b.score == null) return -1;  // b al final
//   return b.score - a.score;        // Mayor primero
// });

// console.log('Con nulls al final:');
// sortedScores.forEach(s => console.log(`  ${s.name}: ${s.score ?? 'N/A'}`));

console.log('');

// ============================================
// PASO 7: Ordenamiento Natural
// ============================================
console.log('--- Paso 7: Ordenamiento natural ---');

const files = [
  'file10.txt',
  'file2.txt',
  'file1.txt',
  'file20.txt',
  'file3.txt',
];

// { numeric: true } hace que "2" < "10"
// Descomenta las siguientes líneas:
// const naturalSorted = [...files].sort((a, b) =>
//   a.localeCompare(b, undefined, { numeric: true })
// );

// console.log('Orden natural:', naturalSorted);
// Esperado: ['file1.txt', 'file2.txt', 'file3.txt', 'file10.txt', 'file20.txt']

console.log('');

// ============================================
// PASO 8: Prioridad Personalizada
// ============================================
console.log('--- Paso 8: Prioridad personalizada ---');

const tasks = [
  { title: 'Bug fix', priority: 'high' },
  { title: 'Feature', priority: 'medium' },
  { title: 'Refactor', priority: 'low' },
  { title: 'Hotfix', priority: 'critical' },
  { title: 'Docs', priority: 'low' },
];

// Mapa de prioridades (menor número = más importante)
const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };

// Descomenta las siguientes líneas:
// const byPriority = [...tasks].sort((a, b) =>
//   priorityOrder[a.priority] - priorityOrder[b.priority]
// );

// console.log('Por prioridad:');
// byPriority.forEach(t => console.log(`  [${t.priority}] ${t.title}`));

console.log('');

// ============================================
// PASO 9: Agrupar con reduce() (groupBy)
// ============================================
console.log('--- Paso 9: Agrupar datos ---');

const sales = [
  { product: 'A', region: 'North', amount: 100 },
  { product: 'B', region: 'South', amount: 200 },
  { product: 'A', region: 'South', amount: 150 },
  { product: 'B', region: 'North', amount: 180 },
];

// reduce para agrupar por una propiedad
// Descomenta las siguientes líneas:
// const byRegion = sales.reduce((groups, sale) => {
//   const key = sale.region;
//   groups[key] = groups[key] || [];
//   groups[key].push(sale);
//   return groups;
// }, {});

// console.log('Agrupado por región:', byRegion);

console.log('');

// ============================================
// PASO 10: Normalizar (indexar por ID)
// ============================================
console.log('--- Paso 10: Indexar por ID ---');

const users = [
  { id: 1, name: 'Ana', email: 'ana@mail.com' },
  { id: 2, name: 'Luis', email: 'luis@mail.com' },
  { id: 3, name: 'María', email: 'maria@mail.com' },
];

// Convierte array a objeto para acceso O(1)
// Descomenta las siguientes líneas:
// const usersById = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {});

// console.log('Indexado por ID:', usersById);
// console.log('Acceso directo:', usersById[2].name);  // 'Luis'

console.log('');
console.log('=== ¡Descomenta cada sección y ejecuta de nuevo! ===');
