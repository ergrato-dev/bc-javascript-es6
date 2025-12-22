/**
 * 🏗️ Proyecto: Task Manager Robusto
 * ==================================
 * Sistema de gestión de tareas con manejo de errores profesional.
 *
 * Instrucciones:
 * 1. Completa cada TODO
 * 2. Prueba cada funcionalidad
 * 3. Verifica que los errores se manejan correctamente
 */

// ============================================
// CONFIGURACIÓN
// ============================================

const CONFIG = {
  STORAGE_KEY: 'robust-tasks',
  MIN_TITLE_LENGTH: 3,
  MAX_TITLE_LENGTH: 100,
  API_FAIL_RATE: 0.3, // 30% chance of failure
  MAX_RETRIES: 3,
  BASE_DELAY: 500,
};

// ============================================
// TODO 1: CLASE BASE - AppError
// ============================================

/**
 * Clase base para todos los errores de la aplicación.
 * Debe incluir: code, timestamp, toJSON()
 */
class AppError extends Error {
  constructor(message, code = 'APP_ERROR') {
    super(message);
    this.name = 'AppError';
    // TODO: Añadir propiedades code y timestamp
    // TODO: Implementar Error.captureStackTrace si está disponible
  }

  toJSON() {
    // TODO: Retornar objeto con name, code, message, timestamp
    return {};
  }
}

// ============================================
// TODO 2: ValidationError
// ============================================

/**
 * Error para validaciones fallidas.
 * Debe incluir: field, value, toUserMessage()
 */
class ValidationError extends AppError {
  constructor(field, message, value = undefined) {
    // TODO: Llamar a super con message y código 'VALIDATION_ERROR'
    // TODO: Añadir propiedades field y value
    super(message);
    this.name = 'ValidationError';
  }

  toUserMessage() {
    // TODO: Retornar mensaje amigable para el usuario
    // Ejemplo: "El campo 'título' es inválido"
    return this.message;
  }
}

// ============================================
// TODO 3: NetworkError
// ============================================

/**
 * Error para fallos de red/API.
 * Debe incluir: status, isRetryable getter
 */
class NetworkError extends AppError {
  constructor(message, status = 0) {
    // TODO: Llamar a super con message y código 'NETWORK_ERROR'
    // TODO: Añadir propiedad status
    super(message);
    this.name = 'NetworkError';
  }

  get isRetryable() {
    // TODO: Retornar true si status >= 500 o status === 0 (network error)
    return false;
  }
}

// ============================================
// TODO 4: StorageError
// ============================================

/**
 * Error para fallos de localStorage.
 * Debe incluir: operation (save/load)
 */
class StorageError extends AppError {
  constructor(operation, message) {
    // TODO: Llamar a super con message y código 'STORAGE_ERROR'
    // TODO: Añadir propiedad operation
    super(message);
    this.name = 'StorageError';
  }
}

// ============================================
// TODO 5: VALIDACIÓN
// ============================================

/**
 * Valida los datos de una tarea.
 * @param {Object} taskData - { title: string }
 * @throws {ValidationError} Si la validación falla
 */
const validateTask = taskData => {
  // TODO: Validar que taskData existe
  // TODO: Validar que title existe y no está vacío
  // TODO: Validar longitud mínima (MIN_TITLE_LENGTH)
  // TODO: Validar longitud máxima (MAX_TITLE_LENGTH)
  // Lanzar ValidationError con información útil

  // Placeholder - reemplazar con validación real
  if (!taskData?.title) {
    throw new ValidationError('title', 'El título es requerido');
  }
};

// ============================================
// TODO 6: SIMULAR API
// ============================================

/**
 * Simula una llamada a API que puede fallar.
 * @param {Function} operation - Operación a ejecutar
 * @returns {Promise} Resultado de la operación
 */
const simulateAPI = async operation => {
  // Simular latencia de red
  await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 300));

  // TODO: Simular fallo aleatorio basado en CONFIG.API_FAIL_RATE
  // Si Math.random() < CONFIG.API_FAIL_RATE, lanzar NetworkError
  // Usar diferentes status codes: 500, 502, 503

  return operation();
};

// ============================================
// TODO 7: RETRY CON BACKOFF
// ============================================

/**
 * Ejecuta una operación con retry y exponential backoff.
 * @param {Function} fn - Función async a ejecutar
 * @param {number} maxRetries - Máximo de reintentos
 * @returns {Promise} Resultado de la operación
 */
const withRetry = async (fn, maxRetries = CONFIG.MAX_RETRIES) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // TODO: Ejecutar la función
      // TODO: Si tiene éxito, retornar resultado
      return await fn();
    } catch (error) {
      lastError = error;
      debugLog('warn', `Intento ${attempt} falló: ${error.message}`);

      // TODO: Si es el último intento, lanzar el error
      // TODO: Si el error no es retryable, lanzar inmediatamente
      // TODO: Esperar con exponential backoff antes del siguiente intento

      if (attempt === maxRetries) {
        throw error;
      }

      // Backoff: 500ms, 1000ms, 2000ms...
      await new Promise(r =>
        setTimeout(r, CONFIG.BASE_DELAY * Math.pow(2, attempt - 1))
      );
    }
  }

  throw lastError;
};

// ============================================
// TODO 8: GUARDAR TAREAS
// ============================================

/**
 * Guarda las tareas en localStorage.
 * @param {Array} tasks - Array de tareas
 * @throws {StorageError} Si falla el guardado
 */
const saveTasks = tasks => {
  try {
    // TODO: Serializar tasks a JSON
    // TODO: Guardar en localStorage con CONFIG.STORAGE_KEY
    const json = JSON.stringify(tasks);
    localStorage.setItem(CONFIG.STORAGE_KEY, json);
    debugLog('info', `Guardadas ${tasks.length} tareas`);
  } catch (error) {
    // TODO: Lanzar StorageError con operación 'save'
    debugLog('error', `Error guardando: ${error.message}`);
    throw new StorageError('save', 'No se pudieron guardar las tareas');
  }
};

// ============================================
// TODO 9: CARGAR TAREAS
// ============================================

/**
 * Carga las tareas desde localStorage.
 * @returns {Array} Array de tareas (vacío si falla)
 */
const loadTasks = () => {
  try {
    // TODO: Obtener datos de localStorage
    // TODO: Parsear JSON
    // TODO: Validar que es un array
    // TODO: Retornar tareas o array vacío
    const json = localStorage.getItem(CONFIG.STORAGE_KEY);

    if (!json) {
      return [];
    }

    const tasks = JSON.parse(json);
    debugLog('info', `Cargadas ${tasks.length} tareas`);
    return Array.isArray(tasks) ? tasks : [];
  } catch (error) {
    // TODO: Loguear error pero retornar array vacío (fallback)
    debugLog('error', `Error cargando tareas: ${error.message}`);
    return [];
  }
};

// ============================================
// TODO 10: MOSTRAR ERROR EN UI
// ============================================

/**
 * Muestra un mensaje de error al usuario.
 * @param {Error} error - Error a mostrar
 */
const showError = error => {
  const errorSection = document.getElementById('errorSection');
  const errorMessage = document.getElementById('errorMessage');

  // TODO: Determinar mensaje a mostrar
  // Si es ValidationError, usar toUserMessage()
  // Si es NetworkError, mostrar mensaje de conexión
  // Si es otro error, mostrar mensaje genérico

  let message = 'Ha ocurrido un error inesperado';

  if (error instanceof ValidationError) {
    message = error.toUserMessage();
  } else if (error instanceof NetworkError) {
    message = 'Error de conexión. Por favor, intenta de nuevo.';
  } else if (error instanceof StorageError) {
    message = 'Error guardando datos. Verifica tu navegador.';
  }

  errorMessage.textContent = message;
  errorSection.classList.remove('hidden');

  // TODO: Loguear error completo para debugging
  debugLog('error', error.message, error.toJSON?.() || error);
};

/**
 * Oculta el mensaje de error.
 */
const hideError = () => {
  const errorSection = document.getElementById('errorSection');
  errorSection.classList.add('hidden');
};

// ============================================
// TODO 11: LOGGING PARA DEBUG
// ============================================

/**
 * Registra mensajes en el panel de debug.
 * @param {string} level - 'info' | 'warn' | 'error'
 * @param {string} message - Mensaje a registrar
 * @param {Object} data - Datos adicionales (opcional)
 */
const debugLog = (level, message, data = null) => {
  const debugLogEl = document.getElementById('debugLog');
  const timestamp = new Date().toLocaleTimeString();

  // Crear entrada de log
  const entry = document.createElement('div');
  entry.className = `debug-entry ${level}`;
  entry.textContent = `[${timestamp}] ${level.toUpperCase()}: ${message}`;

  debugLogEl.appendChild(entry);
  debugLogEl.scrollTop = debugLogEl.scrollHeight;

  // También loguear en consola
  const consoleFn = console[level] || console.log;
  consoleFn(`[TaskManager] ${message}`, data || '');
};

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================

let tasks = [];

// ============================================
// FUNCIONES DE UI
// ============================================

/**
 * Muestra/oculta el indicador de carga.
 */
const setLoading = (isLoading, message = 'Procesando...') => {
  const loadingSection = document.getElementById('loadingSection');
  const loadingMessage = document.getElementById('loadingMessage');
  const addBtn = document.getElementById('addBtn');

  loadingMessage.textContent = message;
  loadingSection.classList.toggle('hidden', !isLoading);
  addBtn.disabled = isLoading;
};

/**
 * Renderiza la lista de tareas.
 */
const renderTasks = () => {
  const taskList = document.getElementById('taskList');
  const emptyState = document.getElementById('emptyState');

  // Clear list
  taskList.innerHTML = '';

  // Show empty state if no tasks
  emptyState.classList.toggle('hidden', tasks.length > 0);

  // Render each task
  tasks.forEach(task => {
    const taskEl = document.createElement('div');
    taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
    taskEl.innerHTML = `
      <input
        type="checkbox"
        class="task-checkbox"
        ${task.completed ? 'checked' : ''}
        data-id="${task.id}"
      >
      <span class="task-title">${escapeHtml(task.title)}</span>
      <button class="task-delete" data-id="${task.id}">🗑️</button>
    `;
    taskList.appendChild(taskEl);
  });

  // Update stats
  updateStats();
};

/**
 * Actualiza las estadísticas.
 */
const updateStats = () => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  document.querySelector('#statsTotal .stat-value').textContent = total;
  document.querySelector('#statsCompleted .stat-value').textContent = completed;
};

/**
 * Escapa HTML para prevenir XSS.
 */
const escapeHtml = str => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

// ============================================
// MANEJADORES DE EVENTOS
// ============================================

/**
 * Maneja el envío del formulario (agregar tarea).
 */
const handleSubmit = async event => {
  event.preventDefault();
  hideError();

  const input = document.getElementById('taskInput');
  const title = input.value.trim();

  try {
    // Validar
    validateTask({ title });

    // Simular guardado con posible fallo
    setLoading(true, 'Guardando tarea...');

    await withRetry(async () => {
      await simulateAPI(() => {
        // Crear tarea
        const newTask = {
          id: Date.now().toString(),
          title,
          completed: false,
          createdAt: new Date().toISOString(),
        };

        tasks.push(newTask);
        saveTasks(tasks);

        return newTask;
      });
    });

    // Éxito
    input.value = '';
    input.classList.remove('error');
    renderTasks();
    debugLog('info', `Tarea creada: "${title}"`);
  } catch (error) {
    showError(error);

    if (error instanceof ValidationError) {
      input.classList.add('error');
      setTimeout(() => input.classList.remove('error'), 500);
    }
  } finally {
    setLoading(false);
  }
};

/**
 * Maneja clicks en la lista de tareas.
 */
const handleTaskClick = async event => {
  const { target } = event;

  // Toggle complete
  if (target.classList.contains('task-checkbox')) {
    const id = target.dataset.id;
    const task = tasks.find(t => t.id === id);

    if (task) {
      try {
        task.completed = target.checked;
        saveTasks(tasks);
        renderTasks();
        debugLog(
          'info',
          `Tarea ${task.completed ? 'completada' : 'pendiente'}: "${
            task.title
          }"`
        );
      } catch (error) {
        showError(error);
        target.checked = !target.checked; // Revert
      }
    }
  }

  // Delete task
  if (target.classList.contains('task-delete')) {
    const id = target.dataset.id;

    try {
      tasks = tasks.filter(t => t.id !== id);
      saveTasks(tasks);
      renderTasks();
      debugLog('info', `Tarea eliminada: ${id}`);
    } catch (error) {
      showError(error);
    }
  }
};

// ============================================
// INICIALIZACIÓN
// ============================================

const init = () => {
  debugLog('info', 'Iniciando aplicación...');

  // Cargar tareas
  try {
    tasks = loadTasks();
    renderTasks();
  } catch (error) {
    debugLog('error', 'Error en inicialización', error);
    tasks = [];
    renderTasks();
  }

  // Event listeners
  document.getElementById('taskForm').addEventListener('submit', handleSubmit);
  document
    .getElementById('taskList')
    .addEventListener('click', handleTaskClick);
  document.getElementById('errorClose').addEventListener('click', hideError);
  document.getElementById('clearDebug').addEventListener('click', () => {
    document.getElementById('debugLog').innerHTML = '';
  });

  debugLog('info', 'Aplicación lista');
};

// Start app
init();
