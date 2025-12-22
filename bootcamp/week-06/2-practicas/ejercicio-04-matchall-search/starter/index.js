/**
 * 📘 Ejercicio 04: matchAll y Búsqueda Avanzada
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para dominar matchAll() y técnicas de búsqueda avanzada.
 *
 * Ejecuta: node index.js
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const logData = `
2024-01-15 10:30:00 INFO Server started on port 3000
2024-01-15 10:30:05 ERROR Database connection failed
2024-01-15 10:30:10 WARN High memory usage: 85%
2024-01-15 10:30:15 INFO User login: john@example.com
`;

const markdown = `
Visit [Google](https://google.com) for search.
Check [GitHub](https://github.com) for code.
Read [MDN](https://developer.mozilla.org) for docs.
`;

const contacts = `
John Smith: john@email.com, +1-555-123-4567
Jane Doe: jane.doe@company.org, +44-20-7946-0958
Bob Wilson: bob_wilson@test.net, +34-612-345-678
`;

// ============================================
// PASO 1: El Problema con match() Global
// ============================================
console.log('--- Paso 1: Problema con match() ---');

// match() con flag 'g' pierde grupos de captura
// Descomenta las siguientes líneas:

// const text = 'John: 25, Jane: 30, Bob: 28';
// const regex = /(\w+):\s*(\d+)/g;
//
// // match() solo devuelve coincidencias completas
// const matches = text.match(regex);
// console.log('match() con /g:', matches);
// // ['John: 25', 'Jane: 30', 'Bob: 28']
// // ❌ No podemos acceder a los grupos individuales

console.log('');

// ============================================
// PASO 2: matchAll() Básico
// ============================================
console.log('--- Paso 2: matchAll() Básico ---');

// matchAll() retorna un iterador con información completa
// Descomenta las siguientes líneas:

// const text = 'John: 25, Jane: 30, Bob: 28';
// const regex = /(\w+):\s*(\d+)/g;  // ⚠️ Requiere flag 'g'
//
// // matchAll retorna un iterador
// const matches = text.matchAll(regex);
//
// for (const match of matches) {
//   console.log('Full:', match[0]);
//   console.log('Name:', match[1]);
//   console.log('Age:', match[2]);
//   console.log('---');
// }

console.log('');

// ============================================
// PASO 3: Convertir a Array
// ============================================
console.log('--- Paso 3: Convertir a Array ---');

// Usar spread operator o Array.from()
// Descomenta las siguientes líneas:

// const text = 'Colors: #ff0000, #00ff00, #0000ff';
// const hexRegex = /#([0-9a-f]{6})/gi;
//
// // Spread operator
// const matches = [...text.matchAll(hexRegex)];
// console.log('Total matches:', matches.length);
//
// // Extraer solo los grupos
// const colors = matches.map(m => m[1]);
// console.log('Colores:', colors);
//
// // Array.from con mapeo
// const colorsWithHash = Array.from(
//   text.matchAll(hexRegex),
//   m => m[0]
// );
// console.log('Con #:', colorsWithHash);

console.log('');

// ============================================
// PASO 4: Grupos Nombrados
// ============================================
console.log('--- Paso 4: Grupos Nombrados ---');

// Acceder a grupos por nombre en lugar de índice
// Descomenta las siguientes líneas:

// const dateText = 'Events: 2024-01-15, 2024-02-20, 2024-03-25';
// const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;
//
// const dates = [...dateText.matchAll(dateRegex)].map(m => ({
//   year: m.groups.year,
//   month: m.groups.month,
//   day: m.groups.day,
//   formatted: `${m.groups.day}/${m.groups.month}/${m.groups.year}`
// }));
//
// console.log('Fechas:', dates);

console.log('');

// ============================================
// PASO 5: Parsear Logs
// ============================================
console.log('--- Paso 5: Parsear Logs ---');

// Extraer información estructurada de logs
// Descomenta las siguientes líneas:

// const logRegex = /(?<date>\d{4}-\d{2}-\d{2})\s+(?<time>\d{2}:\d{2}:\d{2})\s+(?<level>\w+)\s+(?<message>.+)/g;
//
// const entries = [...logData.matchAll(logRegex)].map(m => ({
//   date: m.groups.date,
//   time: m.groups.time,
//   level: m.groups.level,
//   message: m.groups.message
// }));
//
// console.log('Log entries:', entries);
//
// // Filtrar por nivel
// const errors = entries.filter(e => e.level === 'ERROR');
// console.log('Errores:', errors);

console.log('');

// ============================================
// PASO 6: Extraer Links de Markdown
// ============================================
console.log('--- Paso 6: Links de Markdown ---');

// Parsear sintaxis [texto](url)
// Descomenta las siguientes líneas:

// const linkRegex = /\[(?<text>[^\]]+)\]\((?<url>[^)]+)\)/g;
//
// const links = [...markdown.matchAll(linkRegex)].map(m => ({
//   text: m.groups.text,
//   url: m.groups.url
// }));
//
// console.log('Links encontrados:', links);
//
// // Convertir a HTML
// const html = markdown.replace(linkRegex, '<a href="$<url>">$<text></a>');
// console.log('HTML:', html);

console.log('');

// ============================================
// PASO 7: Extraer Contactos
// ============================================
console.log('--- Paso 7: Extraer Contactos ---');

// Parsear información de contacto
// Descomenta las siguientes líneas:

// const contactRegex = /(?<name>[\w\s]+):\s*(?<email>[\w.+-]+@[\w.-]+),\s*(?<phone>\+[\d-]+)/g;
//
// const contactList = [...contacts.matchAll(contactRegex)].map(m => ({
//   name: m.groups.name.trim(),
//   email: m.groups.email,
//   phone: m.groups.phone
// }));
//
// console.log('Contactos:', contactList);
//
// // Solo emails
// const emails = contactList.map(c => c.email);
// console.log('Emails:', emails);

console.log('');

// ============================================
// PASO 8: Búsqueda con Índices
// ============================================
console.log('--- Paso 8: Índices de Posición ---');

// matchAll incluye índice de cada coincidencia
// Descomenta las siguientes líneas:

// const text = 'The quick brown fox jumps over the lazy dog';
// const wordRegex = /\b\w{4,}\b/g;  // Palabras de 4+ letras
//
// const wordsWithPos = [...text.matchAll(wordRegex)].map(m => ({
//   word: m[0],
//   start: m.index,
//   end: m.index + m[0].length
// }));
//
// console.log('Palabras con posición:', wordsWithPos);
//
// // Resaltar palabras (simulado)
// let highlighted = text;
// wordsWithPos.reverse().forEach(w => {
//   highlighted = highlighted.slice(0, w.start) +
//     `[${w.word}]` +
//     highlighted.slice(w.end);
// });
// console.log('Resaltado:', highlighted);

console.log('');

// ============================================
// PASO 9: Caso Práctico - Template Engine
// ============================================
console.log('--- Paso 9: Template Engine ---');

// Reemplazar variables en plantillas
// Descomenta las siguientes líneas:

// const template = `
// Hola {{name}},
// Tu pedido #{{orderId}} ha sido {{status}}.
// Total: {{total}}€
// `;
//
// const data = {
//   name: 'Ana',
//   orderId: '12345',
//   status: 'enviado',
//   total: '99.99'
// };
//
// const varRegex = /\{\{(\w+)\}\}/g;
//
// // Encontrar todas las variables
// const variables = [...template.matchAll(varRegex)].map(m => m[1]);
// console.log('Variables en template:', variables);
//
// // Reemplazar con datos
// const rendered = template.replace(varRegex, (match, key) => {
//   return data[key] ?? match;
// });
// console.log('Renderizado:', rendered);

console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has dominado matchAll() y búsqueda avanzada.');
console.log('matchAll es esencial para parsear datos estructurados.');
