/**
 * 🏋️ Ejercicio 03: Módulos Básicos
 *
 * Archivo: main.js (Punto de entrada)
 *
 * TODO: Importa los módulos y crea las funciones de prueba
 */

// TODO 3.5.1: Importa sum, multiply, PI desde utils (barrel)

// TODO 3.5.2: Importa capitalize, truncate desde utils (barrel)

// TODO 3.5.3: Importa el config por defecto

// ============================================
// Funciones de prueba (completa los imports primero)
// ============================================

const testMath = () => {
  const output = document.getElementById('math-output');
  try {
    const results = [
      `PI = ${PI}`,
      `sum(5, 3) = ${sum(5, 3)}`,
      `multiply(4, 7) = ${multiply(4, 7)}`,
    ];
    output.innerHTML = results.join('<br>');
    output.className = 'output success';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    output.className = 'output error';
  }
};

const testStrings = () => {
  const output = document.getElementById('string-output');
  try {
    const results = [
      `capitalize("hello") = "${capitalize('hello')}"`,
      `truncate("hello world", 5) = "${truncate('hello world', 5)}"`,
    ];
    output.innerHTML = results.join('<br>');
    output.className = 'output success';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    output.className = 'output error';
  }
};

const testConfig = () => {
  const output = document.getElementById('config-output');
  try {
    // TODO: Usa el config importado
    const results = [
      `App: ${config.appName}`,
      `Version: ${config.version}`,
      `API URL: ${config.api.url}`,
    ];
    output.innerHTML = results.join('<br>');
    output.className = 'output success';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    output.className = 'output error';
  }
};

const runAllTests = () => {
  testMath();
  testStrings();
  testConfig();

  const output = document.getElementById('full-output');
  output.innerHTML =
    '✅ Todos los tests ejecutados. Revisa cada sección arriba.';
  output.className = 'output success';
};

// Exponer funciones globalmente para los botones
window.testMath = testMath;
window.testStrings = testStrings;
window.testConfig = testConfig;
window.runAllTests = runAllTests;

console.log('🚀 Módulos cargados correctamente');
