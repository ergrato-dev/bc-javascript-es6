/**
 * 🏋️ Ejercicio 04: Imports Avanzados
 *
 * Archivo: app.js - Aplicación principal
 *
 * TODO: Implementa la carga dinámica de módulos
 */

import moduleLoader from './loader.js';

// Referencias al DOM
const calcBtn = document.getElementById('calc-btn');
const convBtn = document.getElementById('conv-btn');
const fmtBtn = document.getElementById('fmt-btn');
const showRegistryBtn = document.getElementById('show-registry');
const clearRegistryBtn = document.getElementById('clear-registry');

// ============================================
// TODO 4.1: Dynamic Import Básico
// ============================================
// Carga el módulo calculator cuando se hace click
// Muestra el resultado de algunas operaciones

calcBtn.addEventListener('click', async () => {
  const output = document.getElementById('calc-output');
  const status = document.getElementById('calc-status');

  status.textContent = 'Estado: Cargando...';
  status.className = 'status loading';

  try {
    // TODO: Usa import() para cargar './features/calculator.js'
    // Luego usa las funciones del módulo

    output.innerHTML = 'Implementa el dynamic import';
    status.textContent = 'Estado: Cargado ✓';
    status.className = 'status loaded';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    status.textContent = 'Estado: Error ✗';
    status.className = 'status error';
  }
});

// ============================================
// TODO 4.2: Carga con Destructuring
// ============================================
// Carga converter y usa destructuring para extraer funciones

convBtn.addEventListener('click', async () => {
  const output = document.getElementById('conv-output');
  const status = document.getElementById('conv-status');

  status.textContent = 'Estado: Cargando...';
  status.className = 'status loading';

  try {
    // TODO: Importa y usa destructuring para obtener las funciones

    output.innerHTML = 'Implementa el dynamic import con destructuring';
    status.textContent = 'Estado: Cargado ✓';
    status.className = 'status loaded';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    status.textContent = 'Estado: Error ✗';
    status.className = 'status error';
  }
});

// ============================================
// TODO 4.3: Carga con Module Loader
// ============================================
// Usa el moduleLoader para cargar formatter con cache

fmtBtn.addEventListener('click', async () => {
  const output = document.getElementById('fmt-output');
  const status = document.getElementById('fmt-status');

  status.textContent = 'Estado: Cargando...';
  status.className = 'status loading';

  try {
    // TODO: Usa moduleLoader.load() para cargar el módulo
    // El loader debe cachear el módulo para futuras cargas

    output.innerHTML = 'Implementa usando moduleLoader';
    status.textContent = 'Estado: Cargado ✓';
    status.className = 'status loaded';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    status.textContent = 'Estado: Error ✗';
    status.className = 'status error';
  }
});

// ============================================
// TODO 4.4: Preloading en Hover
// ============================================
// Precarga módulos cuando el usuario hace hover sobre las cards

const cards = {
  'calc-card': './features/calculator.js',
  'conv-card': './features/converter.js',
  'fmt-card': './features/formatter.js',
};

// TODO: Agrega event listeners de 'mouseenter' a cada card
// para precargar el módulo correspondiente

// ============================================
// Registry UI
// ============================================

showRegistryBtn.addEventListener('click', () => {
  const output = document.getElementById('registry-output');
  const modules = moduleLoader.getLoadedModules();

  if (modules.length === 0) {
    output.innerHTML = 'No hay módulos cargados';
  } else {
    output.innerHTML =
      `Módulos cargados (${modules.length}):<br>` +
      modules.map(m => `• ${m}`).join('<br>');
  }
});

clearRegistryBtn.addEventListener('click', () => {
  moduleLoader.clear();
  document.getElementById('registry-output').innerHTML = 'Cache limpiado';
});

console.log('🚀 App initialized');
