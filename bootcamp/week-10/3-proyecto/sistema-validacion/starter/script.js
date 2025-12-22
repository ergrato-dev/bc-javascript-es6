/**
 * Sistema de Validación Reactivo
 * ==============================
 * Week 10 | Bootcamp JavaScript ES6+
 *
 * Implementa un sistema de validación de formularios usando
 * Proxies y Reflect para crear reactividad automática.
 */

// ============================================
// SECCIÓN 1: Fábrica de Validadores
// ============================================

/**
 * Colección de validadores reutilizables.
 * Cada validador es una función que retorna otra función.
 * La función interna recibe (value, prop) y retorna:
 * - true si es válido
 * - string con mensaje de error si es inválido
 */
const validators = {
  /**
   * Valida strings con longitud mínima y máxima
   * @param {number} minLength - Longitud mínima
   * @param {number} maxLength - Longitud máxima
   * @returns {Function} Función validadora
   */
  string:
    (minLength = 0, maxLength = Infinity) =>
    (value, prop) => {
      // TODO: Implementar validación de string
      // 1. Verificar que value sea string
      // 2. Verificar longitud mínima
      // 3. Verificar longitud máxima
      // 4. Retornar true o mensaje de error
      return true;
    },

  /**
   * Valida números dentro de un rango
   * @param {number} min - Valor mínimo
   * @param {number} max - Valor máximo
   * @returns {Function} Función validadora
   */
  number:
    (min = -Infinity, max = Infinity) =>
    (value, prop) => {
      // TODO: Implementar validación de número
      // 1. Verificar que value sea número y no NaN
      // 2. Verificar valor mínimo
      // 3. Verificar valor máximo
      // 4. Retornar true o mensaje de error
      return true;
    },

  /**
   * Valida formato de email
   * @returns {Function} Función validadora
   */
  email: () => (value, prop) => {
    // TODO: Implementar validación de email
    // Usar regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Retornar true o mensaje de error
    return true;
  },

  /**
   * Valida contraseña con requisitos de seguridad
   * @param {number} minLength - Longitud mínima
   * @returns {Function} Función validadora
   */
  password:
    (minLength = 8) =>
    (value, prop) => {
      // TODO: Implementar validación de contraseña
      // Requisitos:
      // 1. Longitud mínima
      // 2. Al menos una mayúscula (/[A-Z]/)
      // 3. Al menos un número (/[0-9]/)
      // Retornar true o mensaje de error específico
      return true;
    },
};

// ============================================
// SECCIÓN 2: Crear Formulario Reactivo
// ============================================

/**
 * Crea un formulario reactivo con validación automática.
 * @param {Object} schema - Esquema de validación { campo: validador }
 * @returns {Proxy} Formulario reactivo con métodos adicionales
 */
const createReactiveForm = schema => {
  // Almacén de errores: Map<string, string>
  const errors = new Map();

  // Listeners para cambios: Set<Function>
  const changeListeners = new Set();

  // Listeners para errores: Set<Function>
  const errorListeners = new Set();

  // TODO: Crear el handler del Proxy
  const handler = {
    /**
     * Trap set: intercepta asignaciones
     * @param {Object} target - Objeto original
     * @param {string} prop - Propiedad
     * @param {any} value - Valor a asignar
     * @param {Proxy} receiver - El proxy
     */
    set(target, prop, value, receiver) {
      // TODO: Implementar el trap set
      // 1. Obtener el validador del schema para esta prop
      // 2. Si existe validador, ejecutarlo
      // 3. Si la validación falla:
      //    - Guardar error en el Map de errors
      //    - Notificar a errorListeners
      // 4. Si la validación pasa:
      //    - Eliminar error del Map si existía
      // 5. Usar Reflect.set para asignar el valor
      // 6. Notificar a changeListeners
      // 7. Retornar true

      return Reflect.set(target, prop, value, receiver);
    },

    /**
     * Trap get: intercepta lecturas
     */
    get(target, prop, receiver) {
      // Permitir acceso a métodos especiales
      if (prop === 'subscribe') {
        return fn => {
          changeListeners.add(fn);
          return () => changeListeners.delete(fn);
        };
      }

      if (prop === 'onError') {
        return fn => {
          errorListeners.add(fn);
          return () => errorListeners.delete(fn);
        };
      }

      if (prop === 'isValid') {
        return () => errors.size === 0;
      }

      if (prop === 'getErrors') {
        return () => Object.fromEntries(errors);
      }

      if (prop === 'getError') {
        return propName => errors.get(propName);
      }

      if (prop === 'getData') {
        return () => ({ ...target });
      }

      if (prop === 'reset') {
        return () => {
          Object.keys(target).forEach(key => delete target[key]);
          errors.clear();
          changeListeners.forEach(fn => fn('reset', null, null));
        };
      }

      return Reflect.get(target, prop, receiver);
    },
  };

  // Crear y retornar el Proxy
  return new Proxy({}, handler);
};

// ============================================
// SECCIÓN 3: Esquema de Validación
// ============================================

// TODO: Definir el esquema de validación para el formulario
const formSchema = {
  // name: validators.string(2, 50),
  // email: validators.email(),
  // age: validators.number(18, 120),
  // password: validators.password(8)
};

// ============================================
// SECCIÓN 4: Conexión con el DOM
// ============================================

/**
 * Conecta el formulario reactivo con el DOM
 * @param {Proxy} form - Formulario reactivo
 * @param {Object} config - Configuración de elementos DOM
 */
const connectToDOM = (form, config) => {
  const {
    inputs,
    errors: errorElements,
    submitBtn,
    statusElements,
    logElement,
  } = config;

  /**
   * Añade una entrada al log
   */
  const addLog = (message, type = 'info') => {
    // TODO: Implementar función de logging
    // 1. Crear elemento div con clase 'log-entry' y tipo
    // 2. Añadir timestamp
    // 3. Añadir mensaje
    // 4. Insertar al inicio del log
    // 5. Eliminar mensaje "vacío" si existe
  };

  /**
   * Actualiza el estado visual de un input
   */
  const updateInputState = (inputName, isValid, errorMessage) => {
    // TODO: Implementar actualización de UI
    // 1. Obtener el input por nombre
    // 2. Actualizar clases 'valid' e 'invalid'
    // 3. Mostrar/ocultar mensaje de error
    // 4. Añadir clase 'visible' al error si hay mensaje
  };

  /**
   * Actualiza el estado general del formulario
   */
  const updateFormStatus = () => {
    // TODO: Implementar actualización de estado
    // 1. Contar campos válidos
    // 2. Actualizar contador en UI
    // 3. Actualizar texto de estado
    // 4. Habilitar/deshabilitar botón submit
  };

  // TODO: Configurar event listeners para cada input
  // Object.entries(inputs).forEach(([name, input]) => {
  //   input.addEventListener('input', (e) => {
  //     // Asignar valor al formulario reactivo
  //     // Para 'age', convertir a número
  //   });
  // });

  // TODO: Suscribirse a cambios del formulario
  // form.subscribe((prop, newValue, oldValue) => {
  //   addLog(`[CHANGE] ${prop}: ${oldValue} → ${newValue}`, 'change');
  //   updateFormStatus();
  // });

  // TODO: Suscribirse a errores
  // form.onError((prop, error) => {
  //   addLog(`[ERROR] ${prop}: ${error}`, 'error');
  //   updateInputState(prop, false, error);
  // });

  // Retornar funciones útiles
  return {
    addLog,
    updateFormStatus,
    reset: () => {
      Object.values(inputs).forEach(input => {
        input.value = '';
        input.classList.remove('valid', 'invalid');
      });
      Object.values(errorElements).forEach(el => {
        el.textContent = '';
        el.classList.remove('visible');
      });
      form.reset();
      updateFormStatus();
      addLog('[RESET] Formulario reiniciado', 'info');
    },
  };
};

// ============================================
// SECCIÓN 5: Inicialización
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Referencias a elementos DOM
  const inputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    age: document.getElementById('age'),
    password: document.getElementById('password'),
  };

  const errorElements = {
    name: document.getElementById('name-error'),
    email: document.getElementById('email-error'),
    age: document.getElementById('age-error'),
    password: document.getElementById('password-error'),
  };

  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const formElement = document.getElementById('registrationForm');
  const resultPanel = document.getElementById('resultPanel');
  const resultContent = document.getElementById('resultContent');
  const logElement = document.getElementById('logContent');
  const clearLogBtn = document.getElementById('clearLog');
  const validCountEl = document.getElementById('validCount');
  const formStatusEl = document.getElementById('formStatus');

  // TODO: Crear el formulario reactivo
  // const form = createReactiveForm(formSchema);

  // TODO: Conectar con el DOM
  // const domConnection = connectToDOM(form, {
  //   inputs,
  //   errors: errorElements,
  //   submitBtn,
  //   statusElements: { validCount: validCountEl, formStatus: formStatusEl },
  //   logElement
  // });

  // TODO: Manejar submit del formulario
  // formElement.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   if (form.isValid()) {
  //     const data = form.getData();
  //     // Mostrar resultado
  //     resultContent.innerHTML = `
  //       <p><strong>Nombre:</strong> <span>${data.name}</span></p>
  //       <p><strong>Email:</strong> <span>${data.email}</span></p>
  //       <p><strong>Edad:</strong> <span>${data.age}</span></p>
  //       <p><strong>Contraseña:</strong> <span>${'•'.repeat(data.password.length)}</span></p>
  //     `;
  //     resultPanel.hidden = false;
  //     domConnection.addLog('[SUCCESS] Formulario enviado correctamente', 'success');
  //   }
  // });

  // TODO: Manejar reset
  // resetBtn.addEventListener('click', () => {
  //   domConnection.reset();
  //   resultPanel.hidden = true;
  // });

  // Limpiar log
  clearLogBtn.addEventListener('click', () => {
    logElement.innerHTML =
      '<p class="log-empty">Los eventos aparecerán aquí...</p>';
  });

  console.log('🛡️ Sistema de Validación Reactivo - Starter');
  console.log('Completa los TODOs para implementar la funcionalidad');
});
