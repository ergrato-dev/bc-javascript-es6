/**
 * Proyecto: Objeto Seguro con Propiedades Privadas
 * Week 09: Símbolos y Metaprogramación
 *
 * Implementa clases que usan Symbols para ocultar datos sensibles
 * y personalizar comportamiento con Well-known Symbols.
 */

// ============================================
// SÍMBOLOS PRIVADOS
// ============================================

// SecureUser symbols
const _password = Symbol('user.password');
const _ssn = Symbol('user.ssn');

// SecureWallet symbols
const _balance = Symbol('wallet.balance');
const _transactions = Symbol('wallet.transactions');

// SecureConfig symbols
const _secrets = Symbol('config.secrets');

// ============================================
// CLASE: SecureUser
// ============================================

/**
 * Usuario con datos sensibles ocultos
 *
 * Requisitos:
 * - Almacenar password y SSN en propiedades simbólicas
 * - Método verifyPassword para verificar contraseña
 * - Método getMaskedSSN para mostrar SSN parcialmente oculto
 * - Symbol.toStringTag = 'SecureUser'
 * - toJSON() solo serializa datos públicos
 */
class SecureUser {
  /**
   * @param {string} name - Nombre del usuario
   * @param {string} email - Email del usuario
   * @param {string} password - Contraseña (se almacena en símbolo)
   * @param {string} ssn - Número de seguro social (se almacena en símbolo)
   */
  constructor(name, email, password, ssn) {
    // Propiedades públicas
    this.name = name;
    this.email = email;

    // TODO: Almacenar password en this[_password]

    // TODO: Almacenar ssn en this[_ssn]
  }

  /**
   * Symbol.toStringTag para identificar el tipo
   * @returns {string}
   */
  get [Symbol.toStringTag]() {
    // TODO: Retornar 'SecureUser'
    return 'Object';
  }

  /**
   * Verifica si la contraseña es correcta
   * @param {string} input - Contraseña a verificar
   * @returns {boolean}
   */
  verifyPassword(input) {
    // TODO: Comparar input con this[_password]
    return false;
  }

  /**
   * Retorna el SSN parcialmente oculto
   * @returns {string} Formato: ***-**-XXXX
   */
  getMaskedSSN() {
    // TODO: Obtener SSN de this[_ssn]
    // TODO: Retornar con formato ***-**-XXXX (últimos 4 dígitos visibles)
    return '***-**-****';
  }

  /**
   * Serialización JSON (solo datos públicos)
   * @returns {Object}
   */
  toJSON() {
    // TODO: Retornar objeto con solo name y email
    return {};
  }
}

// ============================================
// CLASE: SecureWallet
// ============================================

/**
 * Billetera con balance protegido
 *
 * Requisitos:
 * - Balance solo accesible via getBalance()
 * - Historial de transacciones oculto
 * - Symbol.toPrimitive: number→balance, string→formato moneda
 * - Symbol.iterator: itera sobre transacciones
 * - Symbol.toStringTag = 'SecureWallet'
 */
class SecureWallet {
  /**
   * @param {number} initialBalance - Balance inicial
   */
  constructor(initialBalance = 0) {
    // TODO: Almacenar balance en this[_balance]
    // TODO: Inicializar array de transacciones en this[_transactions]
    // Agregar transacción inicial si balance > 0
  }

  /**
   * Symbol.toStringTag
   */
  get [Symbol.toStringTag]() {
    // TODO: Retornar 'SecureWallet'
    return 'Object';
  }

  /**
   * Symbol.toPrimitive para conversiones
   * @param {string} hint - 'number', 'string', o 'default'
   */
  [Symbol.toPrimitive](hint) {
    // TODO: Si hint es 'number' o 'default', retornar balance
    // TODO: Si hint es 'string', retornar formato '$XXX.XX'
    return 0;
  }

  /**
   * Symbol.iterator para iterar transacciones
   */
  *[Symbol.iterator]() {
    // TODO: Usar yield* para delegar a this[_transactions]
  }

  /**
   * Deposita fondos
   * @param {number} amount - Cantidad a depositar
   */
  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }

    // TODO: Incrementar this[_balance]
    // TODO: Agregar transacción { type: 'deposit', amount, date: new Date() }
  }

  /**
   * Retira fondos
   * @param {number} amount - Cantidad a retirar
   */
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }

    // TODO: Verificar que hay fondos suficientes
    // TODO: Decrementar this[_balance]
    // TODO: Agregar transacción { type: 'withdraw', amount, date: new Date() }
  }

  /**
   * Obtiene el balance actual
   * @returns {number}
   */
  getBalance() {
    // TODO: Retornar this[_balance]
    return 0;
  }

  /**
   * Obtiene el número de transacciones
   * @returns {number}
   */
  getTransactionCount() {
    // TODO: Retornar longitud de this[_transactions]
    return 0;
  }
}

// ============================================
// CLASE: SecureConfig
// ============================================

/**
 * Configuración con claves sensibles ocultas
 *
 * Requisitos:
 * - Propiedades que empiezan con _ se almacenan en símbolo _secrets
 * - Método get() para obtener config pública
 * - Método hasSecret() para verificar si existe un secret
 * - Método useSecret() para usar un secret de forma controlada
 * - getPublicConfig() retorna solo configuración no sensible
 */
class SecureConfig {
  /**
   * @param {Object} config - Objeto de configuración
   *   Propiedades que empiezan con _ se consideran secrets
   */
  constructor(config) {
    // TODO: Inicializar this[_secrets] como objeto vacío
    // TODO: Iterar sobre config
    // - Si la clave empieza con _, guardar en this[_secrets] (sin el _)
    // - Si no, guardar como propiedad pública
  }

  /**
   * Symbol.toStringTag
   */
  get [Symbol.toStringTag]() {
    // TODO: Retornar 'SecureConfig'
    return 'Object';
  }

  /**
   * Obtiene valor de configuración pública
   * @param {string} key
   * @returns {*}
   */
  get(key) {
    // TODO: Retornar this[key]
    return undefined;
  }

  /**
   * Verifica si existe un secret
   * @param {string} key - Nombre del secret (sin _)
   * @returns {boolean}
   */
  hasSecret(key) {
    // TODO: Verificar si key existe en this[_secrets]
    return false;
  }

  /**
   * Usa un secret de forma controlada
   * @param {string} key - Nombre del secret
   * @param {Function} callback - Función que recibe el secret
   */
  useSecret(key, callback) {
    // TODO: Si el secret existe, llamar callback con el valor
    // TODO: Si no existe, lanzar error
  }

  /**
   * Obtiene solo la configuración pública
   * @returns {Object}
   */
  getPublicConfig() {
    // TODO: Retornar objeto con solo propiedades públicas (no símbolos)
    return {};
  }
}

// ============================================
// UTILIDAD: Inspeccionar Símbolos
// ============================================

/**
 * Inspecciona todas las propiedades de un objeto (incluyendo símbolos)
 * @param {Object} obj
 * @returns {Object}
 */
const inspectObject = obj => {
  const result = {
    type: Object.prototype.toString.call(obj),
    stringKeys: Object.keys(obj),
    symbolKeys: Object.getOwnPropertySymbols(obj).map(s => s.description),
    allKeys: Reflect.ownKeys(obj).map(k =>
      typeof k === 'symbol' ? `Symbol(${k.description})` : k
    ),
  };

  return result;
};

// ============================================
// VARIABLES GLOBALES PARA LA UI
// ============================================
let currentUser = null;
let currentWallet = null;
let currentConfig = null;

// ============================================
// FUNCIONES DE UI
// ============================================

/**
 * Muestra output en un elemento
 */
const showOutput = (elementId, content, type = '') => {
  const el = document.getElementById(elementId);
  if (typeof content === 'object') {
    content = JSON.stringify(content, null, 2);
  }
  el.innerHTML = type ? `<span class="${type}">${content}</span>` : content;
};

/**
 * Inicializa event listeners
 */
const initUI = () => {
  // ----- SecureUser -----
  document.getElementById('createUser').addEventListener('click', () => {
    try {
      const name = document.getElementById('userName').value;
      const email = document.getElementById('userEmail').value;
      const password = document.getElementById('userPassword').value;
      const ssn = document.getElementById('userSSN').value;

      currentUser = new SecureUser(name, email, password, ssn);
      showOutput(
        'userOutput',
        `✅ Usuario creado: ${
          currentUser.name
        }\nTipo: ${Object.prototype.toString.call(currentUser)}`,
        'success'
      );
    } catch (e) {
      showOutput('userOutput', `❌ Error: ${e.message}`, 'error');
    }
  });

  document.getElementById('verifyPassword').addEventListener('click', () => {
    if (!currentUser) {
      showOutput('userOutput', '⚠️ Primero crea un usuario', 'warning');
      return;
    }
    const input = document.getElementById('userPassword').value;
    const result = currentUser.verifyPassword(input);
    showOutput(
      'userOutput',
      result ? '✅ Password correcto' : '❌ Password incorrecto',
      result ? 'success' : 'error'
    );
  });

  document.getElementById('showMaskedSSN').addEventListener('click', () => {
    if (!currentUser) {
      showOutput('userOutput', '⚠️ Primero crea un usuario', 'warning');
      return;
    }
    showOutput('userOutput', `SSN: ${currentUser.getMaskedSSN()}`, 'info');
  });

  document.getElementById('showUserKeys').addEventListener('click', () => {
    if (!currentUser) {
      showOutput('userOutput', '⚠️ Primero crea un usuario', 'warning');
      return;
    }
    showOutput(
      'userOutput',
      `Object.keys():\n${JSON.stringify(
        Object.keys(currentUser),
        null,
        2
      )}\n\n✅ Password y SSN NO aparecen`,
      'info'
    );
  });

  document.getElementById('showUserJSON').addEventListener('click', () => {
    if (!currentUser) {
      showOutput('userOutput', '⚠️ Primero crea un usuario', 'warning');
      return;
    }
    showOutput(
      'userOutput',
      `JSON.stringify():\n${JSON.stringify(
        currentUser,
        null,
        2
      )}\n\n✅ Solo datos públicos`,
      'info'
    );
  });

  // ----- SecureWallet -----
  document.getElementById('createWallet').addEventListener('click', () => {
    try {
      const initial =
        parseFloat(document.getElementById('walletInitial').value) || 0;
      currentWallet = new SecureWallet(initial);
      showOutput(
        'walletOutput',
        `✅ Billetera creada con balance: $${currentWallet
          .getBalance()
          .toFixed(2)}`,
        'success'
      );
    } catch (e) {
      showOutput('walletOutput', `❌ Error: ${e.message}`, 'error');
    }
  });

  document.getElementById('depositWallet').addEventListener('click', () => {
    if (!currentWallet) {
      showOutput('walletOutput', '⚠️ Primero crea una billetera', 'warning');
      return;
    }
    try {
      const amount =
        parseFloat(document.getElementById('walletAmount').value) || 0;
      currentWallet.deposit(amount);
      showOutput(
        'walletOutput',
        `✅ Depositado: $${amount.toFixed(2)}\nNuevo balance: $${currentWallet
          .getBalance()
          .toFixed(2)}`,
        'success'
      );
    } catch (e) {
      showOutput('walletOutput', `❌ Error: ${e.message}`, 'error');
    }
  });

  document.getElementById('withdrawWallet').addEventListener('click', () => {
    if (!currentWallet) {
      showOutput('walletOutput', '⚠️ Primero crea una billetera', 'warning');
      return;
    }
    try {
      const amount =
        parseFloat(document.getElementById('walletAmount').value) || 0;
      currentWallet.withdraw(amount);
      showOutput(
        'walletOutput',
        `✅ Retirado: $${amount.toFixed(2)}\nNuevo balance: $${currentWallet
          .getBalance()
          .toFixed(2)}`,
        'success'
      );
    } catch (e) {
      showOutput('walletOutput', `❌ Error: ${e.message}`, 'error');
    }
  });

  document.getElementById('walletAsNumber').addEventListener('click', () => {
    if (!currentWallet) {
      showOutput('walletOutput', '⚠️ Primero crea una billetera', 'warning');
      return;
    }
    showOutput(
      'walletOutput',
      `+wallet = ${+currentWallet}\n\n(Symbol.toPrimitive con hint 'number')`,
      'info'
    );
  });

  document.getElementById('walletAsString').addEventListener('click', () => {
    if (!currentWallet) {
      showOutput('walletOutput', '⚠️ Primero crea una billetera', 'warning');
      return;
    }
    showOutput(
      'walletOutput',
      `\`\${wallet}\` = "${`${currentWallet}`}"\n\n(Symbol.toPrimitive con hint 'string')`,
      'info'
    );
  });

  document.getElementById('iterateWallet').addEventListener('click', () => {
    if (!currentWallet) {
      showOutput('walletOutput', '⚠️ Primero crea una billetera', 'warning');
      return;
    }
    const transactions = [...currentWallet];
    if (transactions.length === 0) {
      showOutput('walletOutput', 'No hay transacciones', 'dim');
    } else {
      const formatted = transactions
        .map(
          (tx, i) =>
            `${i + 1}. ${tx.type}: $${tx.amount.toFixed(
              2
            )} - ${tx.date.toLocaleString()}`
        )
        .join('\n');
      showOutput(
        'walletOutput',
        `Transacciones (via Symbol.iterator):\n${formatted}`,
        'info'
      );
    }
  });

  // ----- SecureConfig -----
  document.getElementById('createConfig').addEventListener('click', () => {
    try {
      const input = document.getElementById('configInput').value;
      const config = JSON.parse(input);
      currentConfig = new SecureConfig(config);
      showOutput(
        'configOutput',
        `✅ Configuración creada\nClaves públicas: ${Object.keys(
          currentConfig
        ).join(', ')}`,
        'success'
      );
    } catch (e) {
      showOutput('configOutput', `❌ Error: ${e.message}`, 'error');
    }
  });

  document.getElementById('getPublicConfig').addEventListener('click', () => {
    if (!currentConfig) {
      showOutput(
        'configOutput',
        '⚠️ Primero crea una configuración',
        'warning'
      );
      return;
    }
    showOutput(
      'configOutput',
      `Configuración pública:\n${JSON.stringify(
        currentConfig.getPublicConfig(),
        null,
        2
      )}`,
      'info'
    );
  });

  document.getElementById('hasApiKey').addEventListener('click', () => {
    if (!currentConfig) {
      showOutput(
        'configOutput',
        '⚠️ Primero crea una configuración',
        'warning'
      );
      return;
    }
    const has = currentConfig.hasSecret('apiKey');
    showOutput(
      'configOutput',
      has ? '✅ Tiene apiKey configurada' : '❌ No tiene apiKey',
      has ? 'success' : 'warning'
    );
  });

  document.getElementById('useApiKey').addEventListener('click', () => {
    if (!currentConfig) {
      showOutput(
        'configOutput',
        '⚠️ Primero crea una configuración',
        'warning'
      );
      return;
    }
    try {
      let result = '';
      currentConfig.useSecret('apiKey', key => {
        result = `🔑 Usando apiKey: ${key}`;
      });
      showOutput('configOutput', result, 'success');
    } catch (e) {
      showOutput('configOutput', `❌ Error: ${e.message}`, 'error');
    }
  });

  document.getElementById('showConfigKeys').addEventListener('click', () => {
    if (!currentConfig) {
      showOutput(
        'configOutput',
        '⚠️ Primero crea una configuración',
        'warning'
      );
      return;
    }
    showOutput(
      'configOutput',
      `Object.keys():\n${JSON.stringify(
        Object.keys(currentConfig),
        null,
        2
      )}\n\n✅ Secrets NO aparecen`,
      'info'
    );
  });

  // ----- Inspection -----
  document.getElementById('inspectUser').addEventListener('click', () => {
    if (!currentUser) {
      showOutput('inspectOutput', '⚠️ Primero crea un usuario', 'warning');
      return;
    }
    showOutput(
      'inspectOutput',
      `🔍 Inspección de SecureUser:\n${JSON.stringify(
        inspectObject(currentUser),
        null,
        2
      )}\n\n⚠️ Los símbolos SON accesibles con getOwnPropertySymbols`,
      'warning'
    );
  });

  document.getElementById('inspectWallet').addEventListener('click', () => {
    if (!currentWallet) {
      showOutput('inspectOutput', '⚠️ Primero crea una billetera', 'warning');
      return;
    }
    showOutput(
      'inspectOutput',
      `🔍 Inspección de SecureWallet:\n${JSON.stringify(
        inspectObject(currentWallet),
        null,
        2
      )}\n\n⚠️ Los símbolos SON accesibles con getOwnPropertySymbols`,
      'warning'
    );
  });

  document.getElementById('inspectConfig').addEventListener('click', () => {
    if (!currentConfig) {
      showOutput(
        'inspectOutput',
        '⚠️ Primero crea una configuración',
        'warning'
      );
      return;
    }
    showOutput(
      'inspectOutput',
      `🔍 Inspección de SecureConfig:\n${JSON.stringify(
        inspectObject(currentConfig),
        null,
        2
      )}\n\n⚠️ Los símbolos SON accesibles con getOwnPropertySymbols`,
      'warning'
    );
  });
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initUI);

// Exportar para testing
export { SecureUser, SecureWallet, SecureConfig, inspectObject };
